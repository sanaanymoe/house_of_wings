import { OrderModalProvider } from './context/OrderModalContext'
import { OrderModal } from './components/OrderModal'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { PromoSection } from './components/PromoSection'
import { OrderCta } from './components/OrderCta'
import { FollowSection } from './components/FollowSection'
import { Testimonials } from './components/Testimonials'
import { Locations } from './components/Locations'
import { Footer } from './components/Footer'

function App() {
  return (
    <OrderModalProvider>
      <OrderModal />
      <Header />
      <main>
        <Hero />
        <About />
        <PromoSection />
        {/* <ImageSlider /> */}
        <OrderCta />
        <FollowSection />
        <Testimonials />
        <Locations />
      </main>
      <Footer />
    </OrderModalProvider>
  )
}

export default App
