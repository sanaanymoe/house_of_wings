import { useState } from 'react'
import { locations, getStatesWithLocations } from '../data/content'
import { useOrderModal } from '../context/OrderModalContext'

export function OrderModal() {
  const { isOpen, close } = useOrderModal()
  const [selectedState, setSelectedState] = useState<string>('')
  const states = getStatesWithLocations()
  const filteredLocations = selectedState
    ? locations.filter((loc) => loc.state === selectedState)
    : []

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close()
  }

  return (
    <div
      className="order-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div className="order-modal">
        <div className="order-modal__header">
          <h2 id="order-modal-title" className="order-modal__title">
            Choose your location
          </h2>
          <button
            type="button"
            className="order-modal__close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="order-modal__body">
          <label htmlFor="order-modal-state" className="order-modal__label">
            State
          </label>
          <select
            id="order-modal-state"
            className="order-modal__select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {states.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>

          {selectedState && (
            <div className="order-modal__locations">
              <p className="order-modal__locations-title">
                Locations in {states.find((s) => s.code === selectedState)?.name}
              </p>
              <ul className="order-modal__list">
                {filteredLocations.map((loc) => (
                  <li key={loc.name + loc.address} className="order-modal__item">
                    <div className="order-modal__item-info">
                      <strong className="order-modal__item-name">{loc.name}</strong>
                      <span className="order-modal__item-address">
                        {loc.address}, {loc.cityStateZip}
                      </span>
                      {loc.phone && (
                        <span className="order-modal__item-phone">{loc.phone}</span>
                      )}
                    </div>
                    <a
                      href={loc.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="order-modal__order-btn"
                    >
                      Order
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
