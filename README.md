# Sushant Kumar Portfolio — V1

A focused single-page portfolio for a 3-day launch.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Requirements

- Node.js 20.19+ or 22.12+

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Launch configuration

Configured in `src/data/site.ts`:

- Email: `sushant843120@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/sushant-kumar-05a5342b4/`
- GitHub: `https://github.com/sushantapi`
- Production domain: `https://sushantkumar.co.in`

## Remaining before launch

1. Add the final resume PDF as `public/Sushant-Kumar-Resume.pdf`.
2. Set `resumeAvailable: true` in `src/data/site.ts` after the PDF is present.
3. Re-check the three case studies for confidentiality before publishing.
4. Run lint/build and test desktop + mobile.
5. Deploy and connect `sushantkumar.co.in`.

## V1 scope intentionally excluded

No blog, CMS, auth, booking, admin, newsletter, payments, client portal, analytics platform, or backend contact form.
