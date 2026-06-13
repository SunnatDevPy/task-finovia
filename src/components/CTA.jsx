import { useLang } from '../i18n/LanguageContext.jsx'

export default function CTA() {
  const { t } = useLang()
  return (
    <section className="section cta" id="contact">
      <div className="container">
        <div className="cta__box reveal">
          <span className="eyebrow">{t.cta.eyebrow}</span>
          <h2 className="section-title">{t.cta.title}</h2>
          <p>{t.cta.text}</p>
          <a href="mailto:hello@finovia.com" className="btn btn-primary">
            {t.cta.button} <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
