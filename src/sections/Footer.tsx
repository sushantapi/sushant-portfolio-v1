import { siteConfig } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold text-zinc-300">{siteConfig.name}</div>
          <div className="mt-1">{siteConfig.title}</div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="transition hover:text-zinc-200">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-zinc-200">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`} className="transition hover:text-zinc-200">Email</a>
        </div>

        <div>© 2026 Sushant Kumar</div>
      </div>
    </footer>
  )
}
