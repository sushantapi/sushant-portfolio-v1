import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { caseStudies } from '../data/caseStudies'

export function CaseStudies() {
  return (
    <section id="projects" className="section-pad border-t border-slate-200">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Professional Projects"
          description="Selected resume-backed backend projects from my professional experience."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.id} delay={index * 90} className="h-full">
              <article className="interactive-card card flex h-full flex-col p-5 sm:p-6">
                <div className="text-xs font-semibold text-blue-600">{item.label}</div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{item.name}</h3>
                <p className="mt-3 text-[0.93rem] leading-7 text-slate-600">{item.cardDescription}</p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs text-blue-700">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
