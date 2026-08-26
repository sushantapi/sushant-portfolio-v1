import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { CaseStudies } from './sections/CaseStudies'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { FeaturedProduct } from './sections/FeaturedProduct'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <FeaturedProduct />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
