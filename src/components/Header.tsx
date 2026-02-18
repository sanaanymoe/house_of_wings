import { useState, useEffect } from 'react'
import { useOrderModal } from '../context/OrderModalContext'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#locations' },
  { label: 'Order Now', order: true },
]

export function Header() {
  const { open } = useOrderModal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  const handleOrderClick = () => {
    setMenuOpen(false)
    open()
  }

  useEffect(() => {
    const checkScroll = () => {
      const heroHeight = window.innerHeight * 0.85
      setScrolledPastHero(window.scrollY > heroHeight)
    }
    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <header className={`header ${scrolledPastHero ? 'header-solid' : ''}`}>
      <div className="header-inner">
        <a href="#" className="logo">
          <img src={`${import.meta.env.BASE_URL}HouseOfWings_files/logo-nyc1.png`} alt="House of Wings" className="logo-img" />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {'order' in link && link.order ? (
                  <button
                    type="button"
                    className="nav-order-btn"
                    onClick={handleOrderClick}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
