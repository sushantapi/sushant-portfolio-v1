import { siteConfig } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold text-zinc-300">{siteConfig.name}</div>
          <div className="mt-1">{siteConfig.title}</div>
        </div>
        <div>© 2026 Sushant Kumar</div>
      </div>
    </footer>
  )
}
