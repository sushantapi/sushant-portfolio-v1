import { siteConfig } from '../data/site'

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <div className="card overflow-hidden p-6 sm:p-10 lg:p-12">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Have a backend project or opportunity?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Whether you're hiring a Java Backend Developer or need help with a backend project, I'd be happy to hear from you.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${siteConfig.email}`} className="rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-green-300">Email Me</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8">LinkedIn</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
