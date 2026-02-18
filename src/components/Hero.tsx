import { useOrderModal } from '../context/OrderModalContext'

export function Hero() {
  const { open } = useOrderModal()
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden />
      <div className="hero-content">
        <button type="button" className="hero-cta" onClick={open}>
          Order Now
        </button>
      </div>
    </section>
  )
}
