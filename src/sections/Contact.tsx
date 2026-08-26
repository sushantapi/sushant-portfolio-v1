import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/site'

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-slate-200 bg-slate-50/70">
      <div className="section-shell">
        <Reveal>
          <div className="card overflow-hidden p-6 sm:p-10 lg:p-12">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Open to Java Backend Developer opportunities.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">For hiring, interviews, referrals, or Java backend role discussions, feel free to reach out.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a href={`mailto:${siteConfig.email}`} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Email</span>
                <span className="mt-1 block font-medium">{siteConfig.email}</span>
              </a>
              <a href={siteConfig.phoneHref} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Phone</span>
                <span className="mt-1 block font-medium">{siteConfig.phone}</span>
              </a>
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Location</span>
                <span className="mt-1 block font-medium">{siteConfig.location}</span>
              </div>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">LinkedIn</span>
                <span className="mt-1 block font-medium">Profile</span>
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">GitHub</span>
                <span className="mt-1 block font-medium">sushantapi</span>
              </a>
              {siteConfig.resumeAvailable && (
                <a href={siteConfig.resumeUrl} download className="rounded-lg bg-blue-600 p-4 text-sm text-white transition hover:bg-blue-700">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-blue-100">Resume</span>
                  <span className="mt-1 block font-semibold">Download Resume</span>
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
