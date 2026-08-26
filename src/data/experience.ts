export type ExperienceItem = {
  company: string
  role: string
  location: string
  period: string
  summary: string
  bullets: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'KVAS Technologies',
    role: 'Software Engineer',
    location: 'Chennai',
    period: 'Sep 2024 – Present',
    summary: 'Building Java 21 and Spring Boot backend services for a multi-tenant accessibility SaaS platform covering organization, workspace, project, scan, crawler, worker, and rule-evaluation workflows.',
    bullets: [
      'Develop tenant-scoped REST APIs with Spring Data JPA, Hibernate, PostgreSQL, and Flyway migrations.',
      'Implement secure user and service endpoints using Spring Security, OAuth2/JWT, Keycloak service identities, role mapping, issuer validation, and audience validation.',
      'Contribute to asynchronous scan execution using RabbitMQ, transactional outbox, worker coordination, execution leases, and heartbeat handling.',
      'Support secure crawler processing with URL admission controls, SSRF protections, bounded HTTP fetching, redirect limits, Jsoup, and Playwright-based rendered-page acquisition.',
      'Establish unit and integration coverage with JUnit 5, Mockito, and Testcontainers; validated a six-module Maven reactor with 555 tests and 0 failures/errors.',
      'Support GitHub pull-request workflows, code review, troubleshooting, validation, documentation, and release-readiness activities.',
    ],
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'RabbitMQ'],
  },
  {
    company: 'GAVS Technologies',
    role: 'Engineer',
    location: 'Chennai',
    period: 'Jul 2023 – Apr 2024',
    summary: 'Developed Spring Boot microservices and REST APIs for Aditya Birla Capital Health Insurance Super App workflows across policy management, claims processing, customer servicing, and digital buying.',
    bullets: [
      'Contributed to plan recommendation, quotation, proposal, KYC, document upload, payment, and STP/NSTP processing integrations.',
      'Improved API reliability through request validation, centralized exception handling, Jackson JSON processing, and JPA/Hibernate persistence.',
      'Worked with MySQL and Oracle, resolved production defects, and supported Agile sprint and release commitments.',
    ],
    tags: ['Spring Boot', 'REST APIs', 'JPA / Hibernate', 'Oracle'],
  },
  {
    company: 'Powersoft Global Solutions',
    role: 'Software Engineer',
    location: 'Bengaluru',
    period: 'Jun 2021 – Jun 2023',
    summary: 'Worked on B2B e-commerce backend development and modernization for Olam Group, migrating a legacy Hybris/traditional Spring platform toward Spring Boot microservices.',
    bullets: [
      'Delivered backend modules, business logic, Hibernate persistence, and REST APIs using Java and Oracle.',
      'Built and customized backend functionality with Java, Spring MVC, Spring JDBC/DAO, Maven, SQL, and REST APIs.',
      'Supported unit testing, peer code reviews, defect resolution, and production support.',
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate', 'Oracle'],
  },
]
