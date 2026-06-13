import { WORK_IMAGES } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Work() {
  const { t } = useLang()
  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work__head reveal">
          <div>
            <span className="eyebrow">{t.work.eyebrow}</span>
            <h2 className="section-title">{t.work.title}</h2>
          </div>
          <a href="#contact" className="btn btn-outline">
            {t.work.all} <span className="arrow">↗</span>
          </a>
        </div>

        <div className="work__grid">
          {t.work.items.map((w, i) => (
            <article className="work-card reveal" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="work-card__img">
                <img src={WORK_IMAGES[i]} alt={w.title} loading="lazy" />
                <span className="work-card__tag">{w.tag}</span>
              </div>
              <h3>{w.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
