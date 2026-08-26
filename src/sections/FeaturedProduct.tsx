import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const projectAreas = [
  {
    title: 'Identity & Security',
    description: 'Authentication, JWT sessions, revocation, audit trails, and secure account lifecycle controls.',
  },
  {
    title: 'RBAC & Tenant Isolation',
    description: 'Fine-grained roles and permissions with organization-scoped access for multi-tenant teams.',
  },
  {
    title: 'HRMS Workflows',
    description: 'Employee records, departments, designations, attendance, and leave in one organization context.',
  },
  {
    title: 'Payroll & Payslips',
    description: 'Salary structures, payroll runs, statutory fields, and downloadable payslips.',
  },
]

const projectFlow = ['Identity', 'Employee', 'Attendance', 'Leave', 'Payroll', 'Payslip']

export function FeaturedProduct() {
  return (
    <section id="ums-platform" className="section-pad border-t border-slate-200 bg-slate-50/70">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Backend Project"
          title="UMS IAM + HRMS Platform"
          description="A public backend project combining identity and access management with practical HRMS workflows in a secure multi-tenant platform."
        />

        <Reveal>
          <article className="card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_.92fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'Microservices', 'Multi-tenant'].map((item) => (
                    <span key={item} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Secure identity, access control, and HR workflows in one backend platform.
                </h3>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600">
                  The project demonstrates authentication, authorization, tenant-scoped access, employee records, attendance, leave, payroll, sessions, audit activity, and API-first backend design.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {projectAreas.map((area, index) => (
                    <div key={area.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-blue-600">0{index + 1}</span>
                        <h4 className="text-sm font-semibold text-slate-900">{area.title}</h4>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{area.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://github.com/sushantapi/ums-iam-platform"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    View GitHub <span className="cta-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="border-b border-slate-200 pb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Engineering flow</p>
                  <p className="mt-1 text-sm text-slate-500">Identity to monthly payslip</p>
                </div>

                <div className="mt-6 space-y-3">
                  {projectFlow.map((step, index) => (
                    <div key={step} className="grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
                      <span className="font-mono text-xs text-blue-600">0{index + 1}</span>
                      <span className="text-sm font-medium text-slate-800">{step}</span>
                      {index < projectFlow.length - 1 && <span className="text-slate-300" aria-hidden="true">↓</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
