import { useEffect, useState } from 'react'
import { TESTIMONIAL_NAMES } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Testimonials() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const items = t.testimonials.items

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % items.length)
    }, 6000)
    return () => clearInterval(id)
  }, [items.length])

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="section-title">{t.testimonials.title}</h2>
        </div>

        <div className="testimonials__slider reveal">
          {items.map((item, i) => (
            <blockquote className={`testimonial ${i === active ? 'is-active' : ''}`} key={i}>
              <p className="testimonial__text">"{item.text}"</p>
              <footer>
                <strong>{TESTIMONIAL_NAMES[i]}</strong>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}

          <div className="testimonials__dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
