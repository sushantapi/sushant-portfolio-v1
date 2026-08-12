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
    summary: 'Building backend services for a multi-tenant accessibility SaaS platform using Java 21, Spring Boot, PostgreSQL, secure REST APIs, messaging, and automated testing.',
    bullets: [
      'Develop Spring Boot services and tenant-scoped REST APIs.',
      'Work with PostgreSQL, JPA/Hibernate, security, messaging, and backend scan workflows.',
      'Contribute to automated testing, code review, validation, troubleshooting, and release readiness.',
    ],
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
  },
  {
    company: 'GAVS Technologies',
    role: 'Engineer',
    location: 'Chennai',
    period: 'Jul 2023 – Apr 2024',
    summary: 'Developed backend services for the Aditya Birla Capital Health Insurance Super App using Spring Boot microservices, REST APIs, persistence, and relational databases.',
    bullets: [
      'Developed Spring Boot microservices and REST APIs for insurance workflows.',
      'Worked with JPA/Hibernate, MySQL, Oracle, validation, and backend integrations.',
      'Resolved production defects and supported Agile sprint and release delivery.',
    ],
    tags: ['Spring Boot', 'REST APIs', 'JPA / Hibernate', 'MySQL'],
  },
  {
    company: 'Powersoft Global Solutions',
    role: 'Software Engineer',
    location: 'Bengaluru',
    period: 'Jun 2021 – Jun 2023',
    summary: 'Worked on B2B e-commerce backend development and modernization for Olam Group using Java, Spring, Spring Boot, REST APIs, Hibernate, and Oracle.',
    bullets: [
      'Developed backend modules, business logic, and REST APIs.',
      'Contributed to modernization from legacy Hybris and Spring components toward Spring Boot.',
      'Supported testing, code reviews, defect resolution, and production support.',
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Oracle'],
  },
]
