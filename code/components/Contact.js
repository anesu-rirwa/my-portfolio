'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiSend } from 'react-icons/fi';
import Reveal from './Reveal';
import SocialIcon from './SocialIcon';
import { site, socialLinks } from '@/data/data';

const empty = { firstname: '', lastname: '', email: '', message: '' };

const inputClass =
  'mt-2 block w-full rounded-2xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', text: `The form isn’t available right now. Please email ${site.email}.` });
      return;
    }

    setStatus({ type: 'loading', text: 'Sending…' });
    try {
      await emailjs.send(serviceId, templateId, form, { publicKey });
      setStatus({ type: 'success', text: 'Thanks! Your message is on its way. I’ll reply soon.' });
      setForm(empty);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({ type: 'error', text: `Something went wrong. Please try again or email ${site.email}.` });
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-14 rounded-[2.5rem] bg-accent-soft p-8 sm:p-12 md:grid-cols-2 md:p-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">06 — Contact</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let&rsquo;s put your data to work.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Have a data system, dashboard or model in mind? Send a message or email me directly. I usually reply within
            a couple of days.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-8 inline-flex items-center gap-1 font-display text-xl font-semibold underline decoration-accent/40 decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-2xl"
          >
            {site.email}
            <FiArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <ul className="mt-10 flex gap-3">
            {socialLinks
              .filter((s) => s.name !== 'Email')
              .map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid size-11 place-items-center rounded-full border border-fg/10 bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <SocialIcon name={s.name} className="size-4" />
                  </a>
                </li>
              ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-surface p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                First name
                <input name="firstname" required autoComplete="given-name" value={form.firstname} onChange={handleChange} className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Last name
                <input name="lastname" required autoComplete="family-name" value={form.lastname} onChange={handleChange} className={inputClass} />
              </label>
            </div>
            <label className="block text-sm font-medium">
              Email
              <input type="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Message
              <textarea name="message" rows={5} required value={form.message} onChange={handleChange} className={`${inputClass} resize-y`} />
            </label>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
              >
                <FiSend aria-hidden="true" /> {status.type === 'loading' ? 'Sending…' : 'Send message'}
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status.type === 'error' ? 'text-red-600 dark:text-red-400' : status.type === 'success' ? 'text-emerald-700 dark:text-emerald-400' : 'text-muted'}`}
              >
                {status.text}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
