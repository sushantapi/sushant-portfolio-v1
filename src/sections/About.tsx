import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const focus = [
  '4.5 Years Experience',
  'Java 8 / 17 / 21',
  'Spring Boot & Microservices',
  'REST APIs & Security',
]

export function About() {
  return (
    <section id="about" className="section-pad border-t border-slate-200">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>Java Backend Developer with 4.5 years of experience building and supporting enterprise backend applications across accessibility SaaS, health insurance, and B2B e-commerce.</p>
              <p>Strong hands-on experience with Java 8/17/21, Spring Boot, REST APIs, microservices, Spring Security, Spring Data JPA, Hibernate, PostgreSQL, MySQL, and Oracle. Experienced in authentication and authorization, database persistence, asynchronous workflows, automated testing, production troubleshooting, and backend modernization.</p>
              <p>Targeting Senior Java Backend roles focused on hands-on development, reliability, and maintainable delivery.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-3 sm:grid-cols-2">
              {focus.map((item) => (
                <div key={item} className="card flex min-h-28 items-center justify-center p-5 text-center text-sm font-semibold text-slate-800 sm:p-6">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
