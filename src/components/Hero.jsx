import { STATS, TEAM, HERO_IMAGE } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import CountUp from './CountUp.jsx'
import { rv } from '../utils/reveal.js'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow" {...rv('down')}>{t.hero.eyebrow}</span>
          <h1 className="hero__title" {...rv('left', 0.05)}>
            {t.hero.titlePre} <span>{t.hero.titleAccent}</span>
          </h1>
          <div className="hero__lead-row" {...rv('left', 0.1)}>
            <span className="hero__hash" aria-hidden="true">#</span>
            <p className="hero__lead">{t.hero.lead}</p>
          </div>
          <div className="hero__actions" {...rv('up', 0.15)}>
            <a href="#contact" className="btn btn-primary">
              {t.hero.getStarted} <span className="arrow">→</span>
            </a>
            <a href="#work" className="hero__play" aria-label={t.hero.viewWork}>
              <span aria-hidden="true">▶</span>
            </a>
          </div>
          <div className="hero__divider" {...rv('up', 0.2)} />
          <div className="hero__stats" {...rv('up', 0.25)}>
            {STATS.map((s, i) => (
              <div className="stat" key={i}>
                <span className="stat__value">
                  <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />
                </span>
                <span className="stat__label">{t.stats.labels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__media" {...rv('right', 0.1)}>
          <div className="hero__media-img">
            <img src={HERO_IMAGE} alt="" />
          </div>
          <span className="hero__media-badge" aria-hidden="true">◎</span>

          <div className="hero__rating">
            <div className="hero__rating-head">
              <span className="hero__rating-label">
                {t.stats.rating} <strong>5.0</strong>
              </span>
              <span className="hero__rating-stars" aria-hidden="true">★★★★★</span>
            </div>
            <div className="hero__avatars">
              {TEAM.slice(0, 4).map((m, i) => (
                <img key={i} src={m.img} alt={m.name} loading="lazy" />
              ))}
              <span className="hero__avatars-add" aria-hidden="true">+</span>
            </div>
          </div>

          <div className="hero__socials">
            <a href="#contact" aria-label="Facebook">f</a>
            <a href="#contact" aria-label="Twitter">t</a>
            <a href="#contact" aria-label="YouTube">▶</a>
          </div>
        </div>
      </div>
    </section>
  )
}
