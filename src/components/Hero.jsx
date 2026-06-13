import { STATS } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import CountUp from './CountUp.jsx'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <span className="eyebrow reveal">{t.hero.eyebrow}</span>
        <h1 className="hero__title reveal">
          {t.hero.titlePre} <span>{t.hero.titleAccent}</span>
        </h1>
        <p className="hero__lead reveal">{t.hero.lead}</p>
        <div className="hero__actions reveal">
          <a href="#contact" className="btn btn-primary">
            {t.hero.getStarted} <span className="arrow">↗</span>
          </a>
          <a href="#work" className="btn btn-outline">
            {t.hero.viewWork}
          </a>
        </div>

        <div className="hero__stats reveal">
          {STATS.map((s, i) => (
            <div className="stat" key={i}>
              <span className="stat__value">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="stat__label">{t.stats.labels[i]}</span>
            </div>
          ))}
          <div className="stat stat--rating">
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
