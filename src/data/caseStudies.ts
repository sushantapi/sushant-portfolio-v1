export type CaseStudy = {
  id: string
  name: string
  label: string
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
    id: 'kvas-accessibility-platform',
    name: 'KVAS Accessibility Platform',
    label: 'Professional Project · Accessibility SaaS',
    description: 'Backend engineering for a multi-tenant accessibility SaaS platform using Java 21 and Spring Boot, supporting tenant-scoped APIs, secure endpoints, scan execution, crawler processing, persistence, messaging, and automated testing.',
    cardDescription: 'Multi-tenant accessibility SaaS backend supporting tenant-scoped APIs, secure endpoints, scan execution, crawler processing, persistence, messaging, and automated testing.',
    contribution: 'Contributed to Java 21 and Spring Boot backend services, tenant-scoped REST APIs, Spring Security, OAuth2/JWT, Keycloak service identities, PostgreSQL persistence, RabbitMQ scan execution, crawler processing, JUnit 5, Mockito, Testcontainers, and release readiness.',
    cardContribution: 'Tenant-scoped REST APIs, secure endpoints, PostgreSQL persistence, RabbitMQ workflows, crawler processing, automated testing, and release readiness.',
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'RabbitMQ', 'JPA / Hibernate', 'Flyway', 'OAuth2 / JWT', 'Keycloak', 'JUnit 5', 'Mockito', 'Testcontainers', 'Jsoup', 'Playwright', 'Selenium'],
    engineeringAreas: ['REST APIs', 'Multi-Tenancy', 'Security', 'Scan Workflows'],
    problem: 'Support secure, tenant-scoped accessibility scanning and evaluation workflows across multiple backend services while keeping execution reliable and testable.',
    approach: 'Use focused Spring Boot services, tenant-aware APIs, relational persistence, secure user and service identities, asynchronous messaging, and automated testing for scan-oriented backend workflows.',
    decisions: [
      'Develop tenant-scoped REST APIs for organization, workspace, project, scan, crawler, worker, and rule-evaluation workflows.',
      'Use RabbitMQ, transactional outbox, worker coordination, execution leases, and heartbeat handling for asynchronous scan execution.',
      'Secure user and service endpoints with Spring Security, OAuth2/JWT, Keycloak service identities, role mapping, issuer validation, and audience validation.',
      'Build automated unit and integration coverage with JUnit 5, Mockito, and Testcontainers.',
    ],
    outcome: 'Contributed to a secure and maintainable backend foundation covering API development, persistence, scan processing, security, testing, and accessibility-evaluation workflows.',
    architecture: 'Client → Spring Boot APIs → Domain Services → PostgreSQL / RabbitMQ → Scan & Evaluation Workflows',
    confidentialityNote: 'Professional project case study. Private source code, credentials, internal URLs, customer information, and proprietary implementation details are intentionally excluded.',
  },
  {
    id: 'aditya-birla-health-insurance',
    name: 'Aditya Birla Capital – Health Insurance Super App',
    label: 'Client Project · Health Insurance',
    description: 'Enterprise backend development for health-insurance workflows using Spring Boot microservices, REST APIs, JPA/Hibernate persistence, validation, JSON processing, and relational database integrations.',
    cardDescription: 'Enterprise backend development for policy, claims, customer servicing, digital buying, KYC, document upload, payment, and STP/NSTP workflows.',
    contribution: 'Developed Spring Boot microservices and REST APIs, translated requirements into backend functionality, worked with JPA/Hibernate, MySQL, Oracle, Jackson JSON processing, validation, exception handling, production defects, and Agile release delivery.',
    cardContribution: 'REST APIs, backend business logic, JPA/Hibernate persistence, validation, JSON processing, production defect resolution, and sprint delivery.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'JPA / Hibernate', 'MySQL', 'Oracle', 'Jackson', 'JSON', 'JUnit', 'Maven', 'Git'],
    engineeringAreas: ['API Development', 'Persistence', 'Validation', 'Production Support'],
    problem: 'Deliver reliable backend services for health-insurance customer, policy-servicing, claims-related, and digital buying workflows.',
    approach: 'Implement Spring Boot microservices and REST APIs backed by JPA/Hibernate persistence, relational databases, request validation, structured exception handling, and JSON processing.',
    decisions: [
      'Translate policy management, claims processing, customer servicing, and digital buying requirements into REST endpoints.',
      'Contribute to plan recommendation, quotation, proposal, KYC, document upload, payment, and STP/NSTP processing integrations.',
      'Use JPA/Hibernate with MySQL and Oracle for application persistence.',
      'Improve API reliability through request validation and centralized exception handling.',
    ],
    outcome: 'Contributed to enterprise backend services supporting health-insurance customer and digital buying workflows while improving application stability through backend development and production support.',
    architecture: 'Client Journeys → Spring Boot Microservices → REST APIs → JPA / Hibernate → MySQL / Oracle',
  },
  {
    id: 'olam-ecommerce-modernization',
    name: 'Olam Group – B2B E-commerce Modernization',
    label: 'Client Project · B2B E-commerce',
    description: 'Backend development and modernization of an enterprise B2B e-commerce platform, including migration from legacy Hybris/traditional Spring components toward Spring Boot microservices.',
    cardDescription: 'Enterprise backend modernization involving migration from legacy Hybris/traditional Spring components toward Spring Boot microservices.',
    contribution: 'Delivered Java backend modules, business logic, Hibernate persistence, and REST APIs; built backend functionality with Spring MVC, Spring JDBC/DAO, Maven, SQL, and Oracle; supported testing, reviews, defects, and production support.',
    cardContribution: 'Java backend development, Spring Boot migration, REST APIs, persistence, testing, code reviews, and production support.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'Oracle', 'Spring', 'Maven', 'JUnit', 'Git'],
    engineeringAreas: ['Modernization', 'REST APIs', 'Persistence', 'Production Support'],
    problem: 'Modernize and maintain a B2B e-commerce backend while moving functionality away from legacy Hybris and traditional Spring components.',
    approach: 'Develop Java backend modules and REST APIs, contribute to Spring Boot migration work, use Hibernate with Oracle for persistence, and support application quality through testing and reviews.',
    decisions: [
      'Translate business requirements into backend modules and maintainable business logic.',
      'Contribute to migration of backend functionality toward Spring Boot services.',
      'Use Hibernate and Oracle for enterprise application data access.',
      'Support unit testing, peer reviews, defect resolution, and production stability.',
    ],
    outcome: 'Contributed to modernization and maintenance of a B2B e-commerce backend while supporting migration, feature development, testing, defect resolution, and production stability.',
    architecture: 'B2B Application → Java / Spring Boot Services → REST APIs → Hibernate → Oracle',
  },
]
