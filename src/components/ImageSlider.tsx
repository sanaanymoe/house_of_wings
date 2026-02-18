import { useState, useEffect } from 'react'

const SLIDES = [
  { alt: 'House of Wings', src: '/HouseOfWings_files/a1.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/a2.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/a3.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/a4.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c1.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c2.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c3.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c4.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c5.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c6.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c7.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c8.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c9.jpg' },
  { alt: 'House of Wings', src: '/HouseOfWings_files/c10.jpg' },
]

export function ImageSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="slider" aria-label="Food gallery">
      <div className="slider-inner">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div key={slide.src} className="slider-slide">
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="slider-prev"
          aria-label="Previous image"
          onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
        >
          ‹
        </button>
        <button
          type="button"
          className="slider-next"
          aria-label="Next image"
          onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
        >
          ›
        </button>
      </div>
      <div className="slider-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? 'active' : ''}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
