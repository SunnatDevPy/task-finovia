import { useLang } from '../i18n/LanguageContext.jsx'
import { rv } from '../utils/reveal.js'

export default function Process() {
  const { t } = useLang()
  const dirs = ['left', 'up', 'right']
  return (
    <section className="section process">
      <div className="container">
        <div className="section-head" {...rv('left')}>
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2 className="section-title">{t.process.title}</h2>
        </div>

        <div className="process__grid">
          {t.process.items.map((step, i) => (
            <article className="process-card card-glow" key={i} {...rv(dirs[i], i * 0.12)}>
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
