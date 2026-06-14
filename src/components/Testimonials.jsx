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
  const cardDirs = ['left', 'right', 'up']

  useEffect(() => {
    if (isUi2) return
    const id = setInterval(() => {
      setActive((v) => (v + 1) % items.length)
    }, 6000)
    return () => clearInterval(id)
  }, [items.length, isUi2])

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        {isUi2 ? (
          <>
            <div className="work__head" {...rv('up')}>
              <div>
                <span className="eyebrow">
                  <span className="eyebrow__hash">#</span>
                  {t.testimonials.eyebrow}
                </span>
                <h2 className="section-title">{t.testimonials.title}</h2>
              </div>
              <a href="#contact" className="btn btn-primary">
                {t.testimonials.explore} <span className="arrow">→</span>
              </a>
            </div>

            <div className="testimonials__grid">
              {items.map((item, i) => (
                <article
                  className="testimonial-card"
                  key={i}
                  {...rv(cardDirs[i], i * 0.1)}
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
                  <span className="testimonial-card__quote" aria-hidden="true">
                    "
                  </span>
                </article>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="section-head" {...rv('left')}>
              <span className="eyebrow">{t.testimonials.eyebrow}</span>
              <h2 className="section-title">{t.testimonials.title}</h2>
            </div>

            <div className="testimonials__slider" {...rv('right', 0.1)}>
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
          </>
        )}
      </div>
    </section>
  )
}
