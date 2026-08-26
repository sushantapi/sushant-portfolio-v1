import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-slate-200 bg-slate-50/70">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="Resume-backed Java backend experience across accessibility SaaS, health insurance, and B2B e-commerce."
        />
        <div className="space-y-5">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 90}>
              <article className="interactive-card card p-5 sm:p-6 lg:p-7">
                <div className="grid gap-6 lg:grid-cols-[.3fr_.7fr]">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{index === 0 ? 'Current' : 'Experience'}</div>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.company}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-700">{item.role}</p>
                    <p className="mt-3 text-sm text-slate-500">{item.period}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  </div>

                  <div>
                    {item.client && (
                      <p className="text-sm font-semibold text-blue-700">Client: {item.client}</p>
                    )}
                    <h4 className={`${item.client ? 'mt-1' : ''} text-base font-semibold text-slate-900`}>{item.project}</h4>
                    <ul className="mt-4 space-y-2 text-[0.93rem] leading-7 text-slate-600">
                      {item.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => <span key={tag} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">{tag}</span>)}
                    </div>
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
