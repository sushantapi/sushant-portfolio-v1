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
    <section id="about" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
            <p>I'm a Java Backend Engineer with 4.5 years of experience building and supporting backend applications across accessibility SaaS, health insurance, and B2B e-commerce domains.</p>
            <p>My core experience includes Java, Spring Boot, REST APIs, microservices, Spring Security, JPA/Hibernate, and relational databases. I have worked on backend development, API integrations, authentication and authorization, database persistence, automated testing, production troubleshooting, and application modernization.</p>
            <p>I'm currently targeting Senior Java Backend Engineering opportunities where I can contribute through hands-on backend development, problem solving, code quality, and reliable application design.</p>
          </div>
          <div className="card p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-zinc-100">What I focus on</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {focus.map((item) => <div key={item} className="rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2.5 text-sm text-zinc-300">{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
