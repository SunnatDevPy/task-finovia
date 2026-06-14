import { SERVICE_ICONS } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { rv } from '../utils/reveal.js'

const CARD_DIRS = ['left', 'up', 'right']

export default function Services() {
  const { t } = useLang()
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head" {...rv('down')}>
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-title">{t.services.title}</h2>
        </div>

        <div className="services__grid">
          {t.services.items.map((s, i) => (
            <article
              className="service-card"
              key={i}
              {...rv(CARD_DIRS[i % 3], i * 0.1)}
            >
              <div className="service-card__icon">{SERVICE_ICONS[i]}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contact" className="service-card__link">
                {t.services.learnMore} <span className="arrow">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
