import { siteConfig } from '../data/site'

const backendFocus = [
  ['01', 'REST APIs', 'design • validation'],
  ['02', 'Spring Boot', 'services • business logic'],
  ['03', 'JPA / Hibernate', 'persistence • data access'],
  ['04', 'Spring Security', 'authentication • authorization'],
  ['05', 'Testing', 'JUnit • Mockito'],
]

export function Hero() {
  return (
    <section id="top" className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_.8fr] lg:py-20">
      <div>
        <p className="hero-enter hero-delay-1 text-sm font-semibold uppercase tracking-[0.14em] text-green-300">Professional Portfolio · {siteConfig.name}</p>
        <h1 className="hero-enter hero-delay-2 mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {siteConfig.title}
        </h1>
        <p className="hero-enter hero-delay-3 mt-5 max-w-3xl text-xl font-medium leading-8 text-zinc-200 sm:text-2xl sm:leading-9">
          I build secure REST APIs, Spring Boot microservices, and reliable backend systems for enterprise applications.
        </p>
        <div className="hero-enter hero-delay-4 mt-5 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-green-300">Core Focus</div>
          <p className="mt-2 text-base leading-8 text-zinc-400 sm:text-lg">
            Java · Spring Boot · REST APIs · Microservices · Spring Security · JPA/Hibernate
          </p>
        </div>

        <div className="hero-enter hero-delay-5 mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-zinc-300" aria-label="Experience and target role">
          <span>4.5 Years Experience</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span className="text-green-200">Targeting Senior Java Backend Roles</span>
        </div>

        <div className="hero-enter hero-delay-6 mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-green-300">View Professional Work <span className="cta-arrow" aria-hidden="true">→</span></a>
          <a href="#contact" className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8">Contact Me <span className="cta-arrow" aria-hidden="true">→</span></a>
          {siteConfig.resumeAvailable && (
            <a href={siteConfig.resumeUrl} className="px-2 py-3 text-sm font-medium text-zinc-400 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-100">Download Resume</a>
          )}
        </div>
      </div>

      <div className="hero-panel card p-5 sm:p-6" aria-label="Core backend focus">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-300">Backend Engineering</p>
            <p className="mt-1 text-sm text-zinc-400">Hands-on professional focus</p>
          </div>
          <span className="rounded-full border border-green-300/20 bg-green-300/8 px-2.5 py-1 text-xs text-green-200">4.5 yrs</span>
        </div>
        <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
          {backendFocus.map(([step, title, detail], index) => (
            <div key={step} className={`focus-flow-item focus-step-${index + 1} grid grid-cols-[2rem_1fr] gap-3 rounded-xl border border-white/8 bg-black/20 p-3.5`}>
              <span className="text-green-300">{step}</span>
              <div>
                <div className="text-zinc-100">{title}</div>
                <div className="mt-1 text-zinc-500">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
