import { PRICING_META } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Pricing() {
  const { t } = useLang()
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.pricing.eyebrow}</span>
          <h2 className="section-title">{t.pricing.title}</h2>
        </div>

        <div className="pricing__grid">
          {t.pricing.plans.map((plan, i) => {
            const meta = PRICING_META[i]
            return (
              <article
                className={`price-card reveal ${meta.featured ? 'is-featured' : ''}`}
                key={i}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {meta.featured && <span className="price-card__badge">{t.pricing.badge}</span>}
                <h3 className="price-card__name">{plan.name}</h3>
                <div className="price-card__price">
                  {meta.price}
                  <span>{t.pricing.per}</span>
                </div>
                <p className="price-card__desc">{plan.desc}</p>
                <ul className="price-card__features">
                  {t.pricing.features.map((f, fi) => (
                    <li key={fi}>
                      <span className="check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`btn ${meta.featured ? 'btn-primary' : 'btn-outline'}`}>
                  {t.pricing.getStarted} <span className="arrow">↗</span>
                </a>
              </article>
            )
          })}
        </div>
        <p className="pricing__note">{t.pricing.note}</p>
      </div>
    </section>
  )
}
