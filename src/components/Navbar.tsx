import { useEffect, useState } from 'react'
import { navItems, siteConfig } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`nav-shell sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="Sushant Kumar Java Backend Developer portfolio home">
          <span className="text-2xl font-bold tracking-tight text-blue-600">SK</span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-slate-900">{siteConfig.name}</span>
            <span className="mt-0.5 text-[11px] text-slate-500">{siteConfig.title}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
          {siteConfig.resumeAvailable && (
            <a href={siteConfig.resumeUrl} download className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Download Resume
            </a>
          )}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="section-shell border-t border-slate-200 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
            {siteConfig.resumeAvailable && (
              <a href={siteConfig.resumeUrl} download onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white">
                Download Resume
              </a>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
