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
        <p className="hero-enter hero-delay-1 text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">Professional Portfolio · {siteConfig.name}</p>
        <h1 className="hero-enter hero-delay-2 mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {siteConfig.title}
        </h1>
        <p className="hero-enter hero-delay-3 mt-5 max-w-3xl text-xl font-medium leading-8 text-slate-700 sm:text-2xl sm:leading-9">
          I build secure REST APIs, Spring Boot microservices, and reliable backend systems for enterprise applications.
        </p>
        <div className="hero-enter hero-delay-4 mt-5 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Core Focus</div>
          <p className="mt-2 text-base leading-8 text-slate-600 sm:text-lg">
            Java · Spring Boot · REST APIs · Microservices · Spring Security · JPA/Hibernate
          </p>
        </div>

        <div className="hero-enter hero-delay-5 mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-slate-700" aria-label="Experience and target role">
          <span>4.5 Years Experience</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-blue-700">Targeting Senior Java Backend Roles</span>
        </div>

        <div className="hero-enter hero-delay-6 mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">View Professional Work <span className="cta-arrow" aria-hidden="true">→</span></a>
          <a href="#contact" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Contact Me <span className="cta-arrow" aria-hidden="true">→</span></a>
          {siteConfig.resumeAvailable && (
            <a href={siteConfig.resumeUrl} className="px-2 py-3 text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950">Download Resume</a>
          )}
        </div>
      </div>

      <div className="hero-panel card p-5 sm:p-6" aria-label="Core backend focus">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Backend Engineering</p>
            <p className="mt-1 text-sm text-slate-600">Hands-on professional focus</p>
          </div>
          <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs text-blue-700">4.5 yrs</span>
        </div>
        <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
          {backendFocus.map(([step, title, detail], index) => (
            <div key={step} className={`focus-flow-item focus-step-${index + 1} grid grid-cols-[2rem_1fr] gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5`}>
              <span className="text-blue-600">{step}</span>
              <div>
                <div className="text-slate-900">{title}</div>
                <div className="mt-1 text-slate-500">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
