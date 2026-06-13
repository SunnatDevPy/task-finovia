import { useLang } from '../i18n/LanguageContext.jsx'

export default function WhyChoose() {
  const { t } = useLang()
  return (
    <section className="section why">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2 className="section-title">{t.why.title}</h2>
        </div>

        <div className="why__grid">
          {t.why.items.map((item, i) => (
            <article className="why-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="why-card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
