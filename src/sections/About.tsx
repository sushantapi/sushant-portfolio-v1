import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const focus = [
  'Backend Development',
  'REST API Development',
  'Microservices',
  'Authentication & Authorization',
  'Database Persistence',
  'Backend Integration',
  'Automated Testing',
  'Production Support',
]

export function About() {
  return (
    <section id="about" className="section-pad border-t border-slate-200">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>I'm a Java Backend Developer with 4.5 years of experience building and supporting enterprise backend applications across accessibility SaaS, health insurance, and B2B e-commerce domains.</p>
              <p>My hands-on experience includes Java 8/17/21, Spring Boot, REST APIs, microservices, Spring Security, Spring Data JPA, Hibernate, PostgreSQL, MySQL, and Oracle. I have worked on authentication and authorization, persistence, asynchronous workflows, automated testing, production troubleshooting, and backend modernization.</p>
              <p>I'm targeting Senior Java Backend roles focused on hands-on development, reliability, code quality, and maintainable delivery.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-900">What I focus on</h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {focus.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700">{item}</div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
