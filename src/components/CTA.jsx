import { AUTHOR } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { rv } from '../utils/reveal.js'

export default function CTA() {
  const { t } = useLang()
  return (
    <section className="section cta" id="contact">
      <div className="container">
        <div className="cta__box" {...rv('scale')}>
          <span className="eyebrow">{t.cta.eyebrow}</span>
          <h2 className="section-title">{t.cta.title}</h2>
          <p>{t.cta.text}</p>
          <a href={AUTHOR.phoneHref} className="btn btn-primary">
            {t.cta.button} <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
