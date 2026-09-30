# Anesu Rirwa — Portfolio

Personal site for Anesu Rirwa, Data & AI Engineer. Built with Next.js 15 (App Router), Tailwind CSS v4 and Motion.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `data/data.js` — all site content (experience, projects, skills, links). Edit this to update the site.
- `components/` — one file per section (`Hero`, `About`, `Experience`, `Work`, `Expertise`, `Credentials`, `Contact`) plus `Nav`, `Footer`, `ThemeToggle`.
- `app/globals.css` — colour tokens for light (default) and dark themes.
- `public/Anesu_Rirwa_CV.pdf` — the CV linked from the hero. Replace it to update.

## Theme

Light is the default. The toggle in the nav adds `.dark` to `<html>` and remembers the choice in `localStorage`; an inline script in `app/layout.js` applies it before paint so there's no flash.

## Contact form

The form sends through EmailJS. Set these in `.env.local` (and in the Vercel project):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The template receives `firstname`, `lastname`, `email` and `message`. If the variables are missing, the form asks visitors to email directly.
