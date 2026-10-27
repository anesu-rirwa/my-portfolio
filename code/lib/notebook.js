import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('python', python);

const join = (value) => (Array.isArray(value) ? value.join('') : value ?? '');

// Terminal colour codes from pip and Keras progress bars.
const stripAnsi = (text) => text.replace(/\x1b\[[0-9;?]*[A-Za-z]/g, '');

// Keep only what a terminal would show after carriage returns overwrite a line.
const collapseCarriageReturns = (text) =>
  text
    .split('\n')
    .map((line) => line.split('\r').filter(Boolean).pop() ?? '')
    .join('\n');

const cleanText = (text) =>
  collapseCarriageReturns(stripAnsi(text))
    .replace(/^(?:[ \t]*\n)+/, '')
    .replace(/\s+$/, '');

// The notebooks are trusted content, but pandas and scikit-learn ship <style>/<script> blocks
// that would leak into the page, so drop them and style tables ourselves.
const cleanHtml = (html) =>
  html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\s(?:border="1"|class="dataframe")/g, '');

function renderOutput(output) {
  switch (output.output_type) {
    case 'stream':
      return { kind: 'text', stream: output.name, text: cleanText(join(output.text)) };
    case 'error':
      return { kind: 'error', text: cleanText(output.traceback?.join('\n') || `${output.ename}: ${output.evalue}`) };
    case 'execute_result':
    case 'display_data': {
      const data = output.data ?? {};
      if (data['image/png']) return { kind: 'image', src: `data:image/png;base64,${join(data['image/png']).trim()}` };
      // Only use HTML for tables (DataFrames); estimator widgets read better as plain text.
      const html = join(data['text/html']);
      if (html.includes('<table')) return { kind: 'html', html: cleanHtml(html) };
      if (data['text/plain']) return { kind: 'text', stream: 'result', text: cleanText(join(data['text/plain'])) };
      return null;
    }
    default:
      return null;
  }
}

export async function loadNotebook(file) {
  const raw = await readFile(path.join(process.cwd(), 'public', 'notebooks', file), 'utf8');
  const nb = JSON.parse(raw);

  const cells = nb.cells
    .map((cell) => {
      const source = join(cell.source).trimEnd();
      if (cell.cell_type === 'markdown') {
        return source.trim() ? { type: 'markdown', html: marked.parse(source) } : null;
      }
      if (cell.cell_type !== 'code') return null;
      const outputs = (cell.outputs ?? []).map(renderOutput).filter((o) => o && (o.kind !== 'text' || o.text));
      if (!source.trim() && !outputs.length) return null;
      return {
        type: 'code',
        html: hljs.highlight(source, { language: 'python', ignoreIllegals: true }).value,
        outputs,
      };
    })
    .filter(Boolean);

  return { cells };
}
