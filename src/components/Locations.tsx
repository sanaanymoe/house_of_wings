import { locations } from '../data/content'

export function Locations() {
  return (
    <section id="locations" className="locations">
      <div className="locations-inner">
        <h2 className="locations-title">Our Locations</h2>
        <div className="locations-grid">
          {locations.map((loc) => (
            <article key={loc.name + loc.address} className="location-card">
              <h3 className="location-name">{loc.name}</h3>
              <p className="location-area">{loc.area}</p>
              <address className="location-address">
                <span>{loc.address}</span>
                <span>{loc.cityStateZip}</span>
                {loc.phone && <span>{loc.phone}</span>}
              </address>
              <div className="location-actions">
                <a href={loc.directionsUrl} target="_blank" rel="noopener noreferrer">
                  Directions
                </a>
                <a href={loc.orderUrl} target="_blank" rel="noopener noreferrer">
                  Order
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
