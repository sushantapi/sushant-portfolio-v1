import { siteConfig } from '../data/site'

export function Hero() {
  return (
    <section id="top" className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_.8fr] lg:py-20">
      <div>
        <p className="text-sm font-semibold tracking-wide text-green-300">{siteConfig.name}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {siteConfig.title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-zinc-200 sm:text-2xl sm:leading-9">
          I build secure REST APIs, scalable microservices, and reliable backend systems with Java &amp; Spring Boot.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          I specialize in Java, Spring Boot, Microservices, REST APIs, Security, Kafka, PostgreSQL, and Docker. I enjoy solving complex backend problems and building clean, maintainable systems.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-zinc-300" aria-label="Experience and core technologies">
          <span>4+ Years Experience</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span>Spring Boot</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span>Microservices</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span>Security</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span>PostgreSQL</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-green-300">View My Work</a>
          <a href="#contact" className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8">Let's Talk</a>
          {siteConfig.resumeAvailable && (
            <a href={siteConfig.resumeUrl} className="px-2 py-3 text-sm font-medium text-zinc-400 underline decoration-zinc-700 underline-offset-4 hover:text-zinc-100">Download Resume</a>
          )}
        </div>
      </div>

      <div className="card p-5 sm:p-6" aria-label="Backend architecture focus">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-300">Backend Focus</p>
            <p className="mt-1 text-sm text-zinc-400">How I think about systems</p>
          </div>
          <span className="rounded-full border border-green-300/20 bg-green-300/8 px-2.5 py-1 text-xs text-green-200">Production-minded</span>
        </div>
        <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
          {[
            ['01', 'API Gateway', 'routing • security'],
            ['02', 'Spring Boot Services', 'business logic • REST'],
            ['03', 'PostgreSQL', 'data integrity • migrations'],
            ['04', 'Kafka / RabbitMQ', 'async workflows'],
            ['05', 'Docker', 'repeatable runtime'],
          ].map(([step, title, detail]) => (
            <div key={step} className="grid grid-cols-[2rem_1fr] gap-3 rounded-xl border border-white/8 bg-black/20 p-3.5">
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
