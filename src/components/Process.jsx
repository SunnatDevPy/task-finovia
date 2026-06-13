import { useLang } from '../i18n/LanguageContext.jsx'

export default function Process() {
  const { t } = useLang()
  return (
    <section className="section process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2 className="section-title">{t.process.title}</h2>
        </div>

        <div className="process__grid">
          {t.process.items.map((step, i) => (
            <article className="process-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="process-card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
