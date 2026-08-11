import { siteConfig } from '../data/site'

const isConfigured = (value: string) => !value.includes('_HERE')

export function Contact() {
  const emailReady = isConfigured(siteConfig.email)

  return (
    <section id="contact" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <div className="card overflow-hidden p-6 sm:p-10 lg:p-12">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Have a backend project or opportunity?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Whether you're hiring a Java Backend Developer or need help with a backend project, I'd be happy to hear from you.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {emailReady ? (
              <a href={`mailto:${siteConfig.email}`} className="rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-green-300">Email Me</a>
            ) : (
              <span className="rounded-lg bg-green-400/70 px-5 py-3 text-sm font-semibold text-zinc-950" title="Add your email in src/data/site.ts">Email Me — add email before launch</span>
            )}
            <ExternalContact label="LinkedIn" href={siteConfig.linkedin} />
            <ExternalContact label="GitHub" href={siteConfig.github} />
          </div>

          <p className="mt-5 text-xs leading-5 text-zinc-500">V1 intentionally uses direct contact links instead of a fake contact form. Replace the placeholders in <code className="text-zinc-400">src/data/site.ts</code> before deployment.</p>
        </div>
      </div>
    </section>
  )
}

function ExternalContact({ label, href }: { label: string; href: string }) {
  if (!isConfigured(href)) {
    return <span className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-500" title={`Add your ${label} URL in src/data/site.ts`}>{label}</span>
  }

  return <a href={href} target="_blank" rel="noreferrer" className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/8">{label}</a>
}
