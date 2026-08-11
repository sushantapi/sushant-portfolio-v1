import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-white/8 bg-white/[0.012]">
      <div className="section-shell">
        <SectionHeading eyebrow="Capabilities" title="Skills & Technologies" description="The backend tools I use to design, build, secure, integrate, and operate maintainable applications." />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="card p-5 sm:p-6">
              <h3 className="text-base font-semibold text-zinc-100">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
