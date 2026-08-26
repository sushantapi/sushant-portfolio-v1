import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/site'

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-slate-200 bg-slate-50/70">
      <div className="section-shell">
        <Reveal>
          <div className="card overflow-hidden p-6 sm:p-10 lg:p-12">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Open to Java Backend opportunities and selected backend projects.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">For hiring, interviews, referrals, or backend development discussions involving Java, Spring Boot, REST APIs, microservices, security, and database-driven applications, you can reach me directly.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.email}`} className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Email Me <span className="cta-arrow" aria-hidden="true">→</span></a>
              <a href={siteConfig.phoneHref} className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Call {siteConfig.phone}</a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">LinkedIn</a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">GitHub</a>
              {siteConfig.resumeAvailable && (
                <a href={siteConfig.resumeUrl} download className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Download Resume</a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
