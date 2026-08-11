import { useState } from 'react'
import { CaseStudyModal } from '../components/CaseStudyModal'
import { SectionHeading } from '../components/SectionHeading'
import { caseStudies, type CaseStudy } from '../data/caseStudies'

export function CaseStudies() {
  const [selected, setSelected] = useState<CaseStudy | null>(null)

  return (
    <section id="projects" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <SectionHeading eyebrow="Selected work" title="Featured Case Studies" description="A few backend systems and engineering problems I've worked on." />
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <article key={item.id} className="card flex flex-col p-5 sm:p-6">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">0{index + 1}</div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-50">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.cardDescription}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-500">My contribution</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{item.cardContribution}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.slice(0, 5).map((tech) => <span key={tech} className="rounded-md border border-white/8 bg-black/20 px-2.5 py-1 text-xs text-zinc-400">{tech}</span>)}
              </div>

              <div className="mt-auto pt-6">
                <button type="button" onClick={() => setSelected(item)} className="w-full rounded-lg border border-green-300/20 bg-green-300/6 px-4 py-2.5 text-sm font-semibold text-green-200 transition hover:bg-green-300/10">
                  View Case Study
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CaseStudyModal caseStudy={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
