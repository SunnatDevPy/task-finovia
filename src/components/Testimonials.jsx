import { useEffect, useState } from 'react'
import { TESTIMONIAL_AVATARS, TESTIMONIAL_NAMES } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useUIVariant } from '../context/UIVariantContext.jsx'
import { rv } from '../utils/reveal.js'

export default function Testimonials() {
  const { t } = useLang()
  const { variant } = useUIVariant()
  const isUi2 = variant === '2'
  const [active, setActive] = useState(0)
  const items = t.testimonials.items

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % items.length)
    }, 5500)
    return () => clearInterval(id)
  }, [items.length])

  return (
    <section className={`section testimonials ${isUi2 ? 'testimonials--ui2' : ''}`} id="testimonials">
      <div className="container">
        <div className={isUi2 ? 'work__head' : 'section-head'} {...rv('left')}>
          <div>
            <span className="eyebrow">
              {isUi2 && <span className="eyebrow__hash">#</span>}
              {t.testimonials.eyebrow}
            </span>
            <h2 className="section-title">{t.testimonials.title}</h2>
          </div>
          {isUi2 && (
            <a href="#contact" className="btn btn-primary">
              {t.testimonials.explore} <span className="arrow">→</span>
            </a>
          )}
        </div>

        <div className="testimonials__cards card-glow-wrap" {...rv('right', 0.1)}>
          <div className="testimonials__track">
            {items.map((item, i) => (
              <article
                className={`testimonial-card card-glow ${i === active ? 'is-active' : ''}`}
                key={i}
              >
                <div className="testimonial-card__stars" aria-label="5 stars">
                  ★★★★★
                </div>
                <p className="testimonial-card__text">"{item.text}"</p>
                <footer className="testimonial-card__footer">
                  <img src={TESTIMONIAL_AVATARS[i]} alt={TESTIMONIAL_NAMES[i]} loading="lazy" />
                  <div>
                    <strong>{TESTIMONIAL_NAMES[i]}.</strong>
                    <span>{item.role}.</span>
                  </div>
                </footer>
                <span className="testimonial-card__quote" aria-hidden="true">"</span>
              </article>
            ))}
          </div>

          <div className="testimonials__dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
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
