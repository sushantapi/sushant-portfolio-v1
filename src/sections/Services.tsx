import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <SectionHeading eyebrow="Services" title="Backend Development Services" description="Practical Java backend development support for APIs, microservices, security, persistence, debugging, and modernization." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-zinc-50">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
