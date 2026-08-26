import { siteConfig } from '../data/site'

export function Hero() {
  return (
    <section id="top" className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <div>
        <p className="hero-enter hero-delay-1 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{siteConfig.title}</p>
        <h1 className="hero-enter hero-delay-2 mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          Hi, I’m <span className="text-blue-600">{siteConfig.name}</span>
        </h1>
        <p className="hero-enter hero-delay-3 mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Java Backend Developer</p>
        <p className="hero-enter hero-delay-4 mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          I build and support enterprise backend applications using Java, Spring Boot, REST APIs, microservices, security, and relational databases.
        </p>

        <div className="hero-enter hero-delay-5 mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-blue-700">{siteConfig.email}</a>
          <a href={siteConfig.phoneHref} className="hover:text-blue-700">{siteConfig.phone}</a>
          <span>{siteConfig.location}</span>
        </div>

        <div className="hero-enter hero-delay-6 mt-7 flex flex-wrap gap-3">
          {siteConfig.resumeAvailable && (
            <a href={siteConfig.resumeUrl} download className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Download Resume</a>
          )}
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">View GitHub</a>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700">LinkedIn</a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-blue-700">GitHub</a>
          <a href={siteConfig.siteUrl} target="_blank" rel="noreferrer" className="hover:text-blue-700">sushantkumar.co.in</a>
        </div>
      </div>

      <div className="hero-panel overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
        <img
          src={siteConfig.profilePhotoUrl}
          alt="Sushant Kumar"
          className="aspect-[3/2] h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}
