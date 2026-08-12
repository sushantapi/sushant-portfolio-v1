import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="section-pad border-t border-white/8 bg-white/[0.012]">
      <div className="section-shell">
        <SectionHeading eyebrow="Services" title="Backend Development Services" description="Practical Java backend development support for APIs, microservices, security, persistence, debugging, and modernization." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 75} className="h-full">
              <article className="interactive-card card h-full p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-zinc-50">{service.title}</h3>
                  <span className="translate-x-[-4px] text-green-300/0 transition duration-200 group-hover:text-green-300" aria-hidden="true">→</span>
                </div>
                <p className="mt-3 text-[0.93rem] leading-7 text-zinc-400">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
