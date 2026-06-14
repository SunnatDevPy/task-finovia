import { WORK_IMAGES } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { rv } from '../utils/reveal.js'

export default function Work() {
  const { t } = useLang()
  const dirs = ['right', 'left', 'up', 'scale']
  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work__head" {...rv('down')}>
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
            <article className="work-card" key={i} {...rv(dirs[i % 4], i * 0.07)}>
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
