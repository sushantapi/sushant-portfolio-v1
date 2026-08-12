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
    <header className={`nav-shell sticky top-0 z-50 border-b border-white/8 bg-zinc-950/88 backdrop-blur ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-wide text-zinc-50" aria-label="Sushant Kumar home">
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-400 transition hover:text-zinc-50">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="rounded-lg bg-green-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-green-300">
            Let's Talk <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="section-shell border-t border-white/8 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
