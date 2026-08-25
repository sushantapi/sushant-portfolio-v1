import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const productPillars = [
  {
    title: 'Identity & Security',
    description: 'Centralized authentication, JWT sessions, revocation, audit trails, and secure account lifecycle controls.',
  },
  {
    title: 'RBAC & Tenant Isolation',
    description: 'Fine-grained roles and permissions with organization-scoped access for multi-tenant teams.',
  },
  {
    title: 'HR Operations',
    description: 'Employee records, departments, designations, attendance, and leave in the same organization context.',
  },
  {
    title: 'Payroll & Payslips',
    description: 'Versioned salary structures, payroll runs, statutory fields, and professional downloadable payslips.',
  },
]

const productFlow = ['Identity', 'Employee', 'Attendance', 'Leave', 'Payroll', 'Payslip']

export function FeaturedProduct() {
  return (
    <section id="ums-platform" className="section-pad border-t border-white/8">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured product"
          title="UMS IAM + HRMS"
          description="An IAM-first HRMS for growing teams: one secure employee identity connected to organization access, HR operations, payroll, and auditability."
        />

        <Reveal>
          <article className="card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_.92fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2">
                  {['IAM-first HRMS', 'Multi-tenant', 'API-first', 'Event-driven'].map((item) => (
                    <span key={item} className="rounded-full border border-green-300/15 bg-green-300/6 px-3 py-1 text-xs font-medium text-green-200">
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  One identity from secure access to monthly payslip.
                </h3>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-zinc-400">
                  UMS combines identity and access management with practical HR workflows so growing organizations can manage users, permissions, employees, attendance, leave, payroll, sessions, and audit activity without maintaining separate identity silos.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {productPillars.map((pillar, index) => (
                    <div key={pillar.title} className="rounded-xl border border-white/8 bg-black/20 p-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-green-300">0{index + 1}</span>
                        <h4 className="text-sm font-semibold text-zinc-100">{pillar.title}</h4>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-500">{pillar.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/sushantapi/ums-iam-platform"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-green-300"
                  >
                    View GitHub <span className="cta-arrow" aria-hidden="true">→</span>
                  </a>
                  <a
                    href="#contact"
                    className="rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8"
                  >
                    Request Demo <span className="cta-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-white/8 bg-black/20 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-300">Product journey</p>
                    <p className="mt-1 text-sm text-zinc-500">A simple employee lifecycle story</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">V1</span>
                </div>

                <div className="mt-6 space-y-3">
                  {productFlow.map((step, index) => (
                    <div key={step} className="grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 rounded-xl border border-white/8 bg-zinc-950/60 p-3.5">
                      <span className="font-mono text-xs text-green-300">0{index + 1}</span>
                      <span className="text-sm font-medium text-zinc-200">{step}</span>
                      {index < productFlow.length - 1 && <span className="text-zinc-700" aria-hidden="true">↓</span>}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-green-300/15 bg-green-300/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-green-300">Built for</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Startups, IT services, agencies, consultancies, and growing teams that need HR operations with stronger access control and auditability.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
