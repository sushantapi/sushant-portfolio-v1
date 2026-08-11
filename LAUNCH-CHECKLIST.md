# V1 Launch Readiness Checklist

Local project path:

```text
E:\sushant-portfolio-v1
```

## 1. Verify local runtime

Open PowerShell:

```powershell
Set-Location "E:\sushant-portfolio-v1"
node --version
npm --version
```

Use Node.js 20.19+ or 22.12+.

## 2. Install dependencies

```powershell
npm install
```

This should generate `package-lock.json`. Keep that file in source control.

## 3. Add final resume

Copy the final PDF to:

```text
E:\sushant-portfolio-v1\public\Sushant-Kumar-Resume.pdf
```

Then change this value in `src/data/site.ts`:

```ts
resumeAvailable: true,
```

Do not enable the button until the PDF exists.

## 4. Run quality gates

```powershell
npm run lint
npm run build
```

Both must complete successfully before deployment.

## 5. Test locally

```powershell
npm run dev
```

Check:

- Desktop navigation
- Mobile menu
- Hero CTA links
- All three case-study modals
- Email link
- LinkedIn link
- GitHub link
- Resume download after enabled
- Keyboard focus states
- No horizontal overflow on mobile

## 6. Production URL

The production domain is already configured as:

```text
https://sushantkumar.co.in
```

`index.html` now includes the canonical URL, `og:url`, and absolute social image metadata for this domain. After deployment, verify that the domain resolves to the deployed site before sharing it publicly.

## 7. Confidentiality check

Before publishing the Enterprise Accessibility Platform case study, confirm it contains no:

- Private source code
- Credentials or tokens
- Internal URLs
- Customer information
- Confidential requirements
- Proprietary implementation details

The current V1 copy is intentionally anonymized and contribution-focused.

## 8. Deployment gate

Deploy only when:

- `npm run lint` passes
- `npm run build` passes
- Resume link works
- `sushantkumar.co.in` resolves to the deployed site
- Desktop and mobile checks pass
- Case-study confidentiality review is complete
