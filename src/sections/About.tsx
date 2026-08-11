import { SectionHeading } from '../components/SectionHeading'

const focus = ['Backend Development', 'REST API Design', 'Microservices', 'Authentication & Authorization', 'Database Design', 'API Integration', 'Backend Debugging', 'System Design']

export function About() {
  return (
    <section id="about" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
            <p>I'm a Java Backend Developer with 4+ years of experience building backend applications, REST APIs, and microservice-based systems.</p>
            <p>My primary focus is Java and Spring Boot, with hands-on experience in security, authentication, databases, messaging, API integration, and distributed backend systems.</p>
            <p>I enjoy understanding difficult backend problems, designing practical solutions, and writing clean and maintainable code.</p>
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
