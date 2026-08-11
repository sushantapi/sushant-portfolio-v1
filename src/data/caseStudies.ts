export type CaseStudy = {
  id: string
  name: string
  description: string
  cardDescription: string
  contribution: string
  cardContribution: string
  technologies: string[]
  engineeringAreas: string[]
  problem: string
  approach: string
  decisions: string[]
  outcome: string
  architecture: string
  confidentialityNote?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'accessibility-platform',
    name: 'Enterprise Accessibility Platform',
    description: 'Backend services for an enterprise accessibility platform supporting website scanning, authentication, tenant isolation, scan execution, and accessibility compliance workflows.',
    cardDescription: 'Enterprise backend services for secure accessibility scanning, tenant isolation, and scan orchestration.',
    contribution: 'Contributed to backend service design and implementation, security integration, scan-related workflows, persistence, messaging, testing, and engineering documentation.',
    cardContribution: 'Backend service design, security integration, persistence, messaging, testing, and scan workflows.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Flyway', 'OIDC'],
    engineeringAreas: ['Microservices', 'Authentication & OIDC', 'Multi-Tenancy', 'Scan Orchestration'],
    problem: 'Build a backend foundation that can securely coordinate accessibility scanning workflows across tenant-scoped services.',
    approach: 'Use focused Spring Boot services behind an API gateway, centralized identity integration, service-owned persistence, and asynchronous messaging for worker-oriented flows.',
    decisions: [
      'Separate service responsibilities around bounded backend capabilities.',
      'Apply tenant-aware authorization and secure service communication.',
      'Use database migrations and messaging patterns that support repeatable deployments.',
    ],
    outcome: 'Contributed to a scalable backend foundation for secure scan workflows while keeping professional implementation details anonymized.',
    architecture: 'API Gateway → Authentication → Microservices → PostgreSQL → Message Broker → Workers',
    confidentialityNote: 'Anonymized professional case study. Private source code, internal URLs, credentials, customer information, and proprietary requirements are intentionally excluded.',
  },
  {
    id: 'ums-iam',
    name: 'UMS IAM Platform',
    description: 'A multi-tenant Identity and Access Management platform designed to manage authentication, authorization, users, organizations, sessions, notifications, and audit activities.',
    cardDescription: 'Multi-tenant IAM platform built around authentication, authorization, user management, and service APIs.',
    contribution: 'Designed and implemented backend capabilities for identity, authorization, tenant-aware user management, service APIs, and supporting infrastructure.',
    cardContribution: 'Identity, authorization, tenant-aware user management, service APIs, and supporting infrastructure.',
    technologies: ['Java', 'Spring Boot', 'Keycloak', 'JWT', 'PostgreSQL', 'Docker', 'API Gateway'],
    engineeringAreas: ['RBAC', 'Multi-Tenancy', 'User Management', 'Audit & Sessions'],
    problem: 'Provide a reusable backend IAM layer for applications that need tenant-aware identity, access control, and account lifecycle capabilities.',
    approach: 'Expose IAM capabilities through Spring Boot services behind an API gateway and integrate Keycloak-based identity with application-level authorization and persistence.',
    decisions: [
      'Keep authentication concerns separate from domain authorization rules.',
      'Model tenant and organization boundaries explicitly.',
      'Capture audit and session activity as first-class backend concerns.',
    ],
    outcome: 'Built a portfolio-ready IAM architecture that demonstrates secure backend design across authentication, authorization, and organization management.',
    architecture: 'Client → API Gateway → Auth / IAM Services → PostgreSQL',
  },
  {
    id: 'hrms-portal',
    name: 'HRMS Portal',
    description: 'A small-company-focused HRMS application designed to manage employees, attendance, leave, payroll, and authentication.',
    cardDescription: 'Practical HRMS backend for employees, attendance, leave, payroll, and authentication.',
    contribution: 'Worked on backend modules, REST endpoints, persistence models, security, and integration between core HR workflows.',
    cardContribution: 'Backend modules, REST endpoints, persistence models, security, and core HR workflow integration.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL / MySQL'],
    engineeringAreas: ['Employee Management', 'Attendance', 'Leave Management', 'Payroll'],
    problem: 'Replace fragmented HR administration with a practical backend application for everyday employee operations.',
    approach: 'Organize the system around clear HR modules with REST APIs, relational persistence, authentication, authorization, and maintainable service-layer logic.',
    decisions: [
      'Keep workflows modular and easy to evolve for a small-company environment.',
      'Use relational modeling for employee, attendance, leave, and payroll data.',
      'Apply role-aware security to administrative operations.',
    ],
    outcome: 'Produced a straightforward business application foundation that demonstrates end-to-end Java backend development.',
    architecture: 'Client → Spring Boot REST API → Security → HR Modules → Relational Database',
  },
]
