import { STATS } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import CountUp from './CountUp.jsx'
import { rv } from '../utils/reveal.js'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <span className="eyebrow" {...rv('down')}>{t.hero.eyebrow}</span>
        <h1 className="hero__title" {...rv('scale', 0.05)}>
          {t.hero.titlePre} <span>{t.hero.titleAccent}</span>
        </h1>
        <p className="hero__lead" {...rv('left', 0.1)}>{t.hero.lead}</p>
        <div className="hero__actions" {...rv('up', 0.15)}>
          <a href="#contact" className="btn btn-primary">
            {t.hero.getStarted} <span className="arrow">↗</span>
          </a>
          <a href="#work" className="btn btn-outline">
            {t.hero.viewWork}
          </a>
        </div>

        <div className="hero__stats" {...rv('right', 0.2)}>
          {STATS.map((s, i) => (
            <div className="stat" key={i} {...rv('up', 0.25 + i * 0.06)}>
              <span className="stat__value">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="stat__label">{t.stats.labels[i]}</span>
            </div>
          ))}
          <div className="stat stat--rating" {...rv('scale', 0.45)}>
            <span className="stat__value">
              <CountUp end={5} decimals={1} suffix=" ★" />
            </span>
            <span className="stat__label">{t.stats.rating}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
