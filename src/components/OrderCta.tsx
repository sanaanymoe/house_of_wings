import { useOrderModal } from '../context/OrderModalContext'

export function OrderCta() {
  const { open } = useOrderModal()
  return (
    <section className="order-cta">
      <div className="order-cta-inner">
        <h2 className="order-cta-title">Order Directly for the Lowest Prices!</h2>
        <p className="order-cta-subtitle">Order ahead or for Pick Up!</p>
        <button type="button" className="order-cta-btn" onClick={open}>
          Order HERE
        </button>
      </div>
    </section>
  )
}
