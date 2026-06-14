import { ABOUT_IMAGE } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { rv } from '../utils/reveal.js'

export default function About() {
  const { t } = useLang()
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__media" {...rv('left')}>
          <img src={ABOUT_IMAGE} alt="Finovia team at work" />
          <div className="about__badge">
            <strong>{t.about.badgeNum}</strong>
            <span>{t.about.badgeText}</span>
          </div>
        </div>

        <div className="about__content" {...rv('right', 0.12)}>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p>{t.about.text}</p>

          <div className="about__points">
            {t.about.points.map((p, i) => (
              <div className="about__point" key={i} {...rv(i === 0 ? 'up' : 'down', 0.15 + i * 0.08)}>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <a href="#work" className="btn btn-primary">
            {t.about.explore} <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
