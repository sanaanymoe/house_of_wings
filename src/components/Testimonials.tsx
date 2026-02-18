import { useState, useEffect } from 'react'
import { testimonials } from '../data/content'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="testimonials" aria-label="Customer testimonials">
      <div className="testimonials-inner">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <div className="testimonials-slider">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-slide">
                <blockquote className="testimonial-card">
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <footer>
                    <cite className="testimonial-author">{t.author}</cite>
                    <span className="testimonial-location">{t.location}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="testimonials-prev"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          >
            ‹
          </button>
          <button
            type="button"
            className="testimonials-next"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          >
            ›
          </button>
          <div className="testimonials-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === index ? 'active' : ''}
                aria-label={`Testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
