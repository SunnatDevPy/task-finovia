import { SERVICE_ICONS } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Services() {
  const { t } = useLang()
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-title">{t.services.title}</h2>
        </div>

        <div className="services__grid">
          {t.services.items.map((s, i) => (
            <article className="service-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
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
