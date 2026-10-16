import { client } from './config'
import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Steps from './components/Steps'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  // the client's colors become CSS variables
  const theme = {
    '--brand': client.colors.brand,
    '--brand-2': client.colors.brandHover,
    '--soft': client.colors.soft,
    '--ink': client.colors.ink,
    '--line': client.colors.line,
  }

  return (
    <div style={theme}>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Steps />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
