import { useState } from 'react'
import { CaseStudyModal } from '../components/CaseStudyModal'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { caseStudies, type CaseStudy } from '../data/caseStudies'

export function CaseStudies() {
  const [selected, setSelected] = useState<CaseStudy | null>(null)

  return (
    <section id="projects" className="section-pad border-t border-slate-200">
      <div className="section-shell">
        <SectionHeading eyebrow="Selected work" title="Featured Professional Projects" description="Three resume-backed backend projects that show enterprise development, modernization, security, persistence, testing, and production support." />
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.id} delay={index * 90} className="h-full">
              <article className="interactive-card card flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs font-semibold text-blue-600">{item.label}</div>
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</div>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{item.name}</h3>
                <p className="mt-3 text-[0.93rem] leading-7 text-slate-600">{item.cardDescription}</p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500">My contribution</p>
                  <p className="mt-2 text-[0.93rem] leading-7 text-slate-700">{item.cardContribution}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.slice(0, 5).map((tech) => <span key={tech} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">{tech}</span>)}
                </div>

                <div className="mt-auto pt-6">
                  <button type="button" onClick={() => setSelected(item)} className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100">
                    View Case Study <span className="cta-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <CaseStudyModal caseStudy={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
