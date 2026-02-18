import { useOrderModal } from '../context/OrderModalContext'

export function Hero() {
  const { open } = useOrderModal()
  return (
    <section className="hero">
      <div
        className="hero-bg"
        aria-hidden
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, transparent 40%, transparent 60%, rgba(0, 0, 0, 0.2) 100%), url("${import.meta.env.BASE_URL}HouseOfWings_files/hofwwe%20back.png") center/cover`,
        }}
      />
      <div className="hero-content">
        <button type="button" className="hero-cta" onClick={open}>
          Order Now
        </button>
      </div>
    </section>
  )
}
