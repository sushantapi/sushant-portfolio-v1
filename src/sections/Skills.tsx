import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { additionalSkills, skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <SectionHeading eyebrow="Capabilities" title="Core Backend Skills" description="A focused view of the Java backend technologies I use most, with additional project-specific experience shown separately." />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <article className="interactive-card card h-full p-5 sm:p-6">
                <h3 className="text-base font-semibold text-zinc-100">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300">{item}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="secondary-skill-panel mt-4 rounded-xl border p-5 sm:p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">Additional Backend Experience</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {additionalSkills.map((item) => <span key={item} className="rounded-md border border-white/6 bg-black/15 px-2.5 py-1 text-xs text-zinc-500">{item}</span>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
