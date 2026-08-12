import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/site'

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <Reveal>
          <div className="card overflow-hidden p-6 sm:p-10 lg:p-12">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Have a Java Backend opportunity or project?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">I'm open to Senior Java Backend opportunities and backend development projects involving Java, Spring Boot, REST APIs, microservices, security, and database-driven applications.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.email}`} className="rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-green-300">Email Me <span className="cta-arrow" aria-hidden="true">→</span></a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8">LinkedIn</a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8">GitHub</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
