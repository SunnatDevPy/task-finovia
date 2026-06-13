import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Work from './components/Work.jsx'
import Team from './components/Team.jsx'
import CTA from './components/CTA.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Blog from './components/Blog.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import Marquee from './components/Marquee.jsx'
import useReveal from './hooks/useReveal.js'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { UIVariantProvider, useUIVariant } from './context/UIVariantContext.jsx'
import './styles/app.css'
import './styles/ui2.css'

function Site() {
  const { variant } = useUIVariant()
  useReveal()

  return (
    <div className={`app ui-${variant}`} id="top">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <WhyChoose />
        <Work />
        <Team />
        <CTA />
        <Process />
        <Pricing />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <UIVariantProvider>
      <LanguageProvider>
        <Site />
      </LanguageProvider>
    </UIVariantProvider>
  )
}
