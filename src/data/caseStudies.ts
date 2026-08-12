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
    description: 'Backend engineering for a multi-tenant accessibility SaaS platform using Java 21 and Spring Boot, supporting secure APIs, scan workflows, persistence, messaging, crawler processing, and accessibility evaluation.',
    cardDescription: 'Multi-tenant accessibility SaaS backend supporting secure APIs, scan workflows, persistence, messaging, crawler processing, and accessibility evaluation.',
    contribution: 'Contributed to Spring Boot backend services, tenant-scoped REST APIs, security, PostgreSQL persistence, asynchronous scan workflows, crawler and evaluation processing, automated testing, validation, troubleshooting, and release readiness.',
    cardContribution: 'Backend services, REST APIs, security, persistence, asynchronous scan workflows, testing, and production-oriented validation.',
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'RabbitMQ', 'JPA / Hibernate', 'Flyway', 'OAuth2 / JWT', 'Keycloak', 'JUnit 5', 'Mockito', 'Testcontainers', 'Jsoup', 'Playwright', 'Selenium'],
    engineeringAreas: ['REST APIs', 'Multi-Tenancy', 'Security', 'Scan Workflows'],
    problem: 'Support secure, tenant-scoped accessibility scanning and evaluation workflows across multiple backend services while keeping execution reliable and testable.',
    approach: 'Use focused Spring Boot services, tenant-aware APIs, relational persistence, secure user and service identities, asynchronous messaging, and automated testing for scan-oriented backend workflows.',
    decisions: [
      'Develop tenant-scoped REST APIs and domain services around core platform workflows.',
      'Use RabbitMQ and worker coordination for asynchronous scan execution.',
      'Secure user-facing and internal endpoints with Spring Security and token-based authentication.',
      'Build unit and integration coverage with JUnit 5, Mockito, and Testcontainers.',
    ],
    outcome: 'Contributed to a secure and maintainable backend foundation covering API development, persistence, scan processing, security, testing, and accessibility-evaluation workflows.',
    architecture: 'Client → Spring Boot APIs → Domain Services → PostgreSQL / RabbitMQ → Scan & Evaluation Workflows',
    confidentialityNote: 'Professional project case study. Private source code, credentials, internal URLs, customer information, and proprietary implementation details are intentionally excluded.',
  },
  {
    id: 'aditya-birla-health-insurance',
    name: 'Aditya Birla Capital – Health Insurance Super App',
    label: 'Client Project · Health Insurance',
    description: 'Enterprise backend development for health-insurance application workflows using Spring Boot microservices, REST APIs, persistence, validation, and relational database integrations.',
    cardDescription: 'Enterprise backend development for health-insurance workflows using Spring Boot microservices, REST APIs, persistence, and database integrations.',
    contribution: 'Developed Spring Boot microservices and REST APIs, translated business requirements into backend functionality, worked with JPA/Hibernate and relational databases, improved validation and exception handling, and resolved production defects.',
    cardContribution: 'REST APIs, backend business logic, JPA/Hibernate persistence, validation, production defect resolution, and sprint delivery.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'JPA / Hibernate', 'MySQL', 'Oracle', 'Jackson', 'JSON', 'JUnit', 'Maven', 'Git'],
    engineeringAreas: ['API Development', 'Persistence', 'Validation', 'Production Support'],
    problem: 'Deliver reliable backend services for health-insurance customer, policy-servicing, claims-related, and digital buying workflows.',
    approach: 'Implement Spring Boot microservices and REST APIs backed by JPA/Hibernate persistence, relational databases, request validation, structured exception handling, and JSON processing.',
    decisions: [
      'Translate business requirements into maintainable backend components and REST endpoints.',
      'Use JPA/Hibernate with MySQL and Oracle for application persistence.',
      'Improve API reliability through request validation and centralized exception handling.',
      'Resolve production defects and support sprint and release commitments.',
    ],
    outcome: 'Contributed to enterprise backend services supporting health-insurance customer and digital buying workflows while improving application stability through backend development and production support.',
    architecture: 'Client Journeys → Spring Boot Microservices → REST APIs → JPA / Hibernate → MySQL / Oracle',
  },
  {
    id: 'olam-ecommerce-modernization',
    name: 'Olam Group – B2B E-commerce Modernization',
    label: 'Client Project · B2B E-commerce',
    description: 'Backend development and modernization of an enterprise B2B e-commerce platform, including migration from legacy Hybris and traditional Spring components toward Spring Boot-based services.',
    cardDescription: 'Enterprise backend modernization involving migration from legacy Hybris and Spring components toward Spring Boot-based services.',
    contribution: 'Developed Java backend modules, business logic, and REST APIs; contributed to Spring Boot migration work; implemented Hibernate persistence; and supported testing, code reviews, defect resolution, and production support.',
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
