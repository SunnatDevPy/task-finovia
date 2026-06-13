import { useMemo } from 'react'
import CountUp from './CountUp.jsx'
import useDashboardData from '../hooks/useDashboardData.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useUIVariant } from '../context/UIVariantContext.jsx'

function LineChart({ data, labels, variant }) {
  const { path, area, points } = useMemo(() => {
    const w = 320
    const h = 120
    const pad = 8
    const max = Math.max(...data, 1)
    const pts = data.map((v, i) => {
      const x = pad + (i / (data.length - 1)) * (w - pad * 2)
      const y = h - pad - (v / max) * (h - pad * 2)
      return { x, y }
    })
    const line = pts.map((p) => `${p.x},${p.y}`).join(' ')
    const areaPath = `M ${pts[0].x} ${h} L ${pts.map((p) => `${p.x} ${p.y}`).join(' L ')} L ${pts[pts.length - 1].x} ${h} Z`
    return { path: line, area: areaPath, points: pts }
  }, [data])

  return (
    <div className={`chart-line chart-line--${variant}`}>
      <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden>
        <path className="chart-line__area" d={area} />
        <polyline className="chart-line__stroke" points={path} />
        {points.map((p, i) => (
          <circle key={i} className="chart-line__dot" cx={p.x} cy={p.y} r="3" />
        ))}
      </svg>
      <div className="chart-line__labels">
        {labels.filter((_, i) => i % 2 === 0).map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  )
}

function DonutChart({ segments, labels, total, variant }) {
  const r = 52
  const c = 2 * Math.PI * r
  let offset = 0
  const colors = ['#6c4dff', '#ff6b2c', '#22c55e', '#38bdf8']

  return (
    <div className={`chart-donut chart-donut--${variant}`}>
      <svg viewBox="0 0 140 140" aria-hidden>
        <circle className="chart-donut__bg" cx="70" cy="70" r={r} />
        {segments.map((seg, i) => {
          const dash = (seg.value / total) * c
          const el = (
            <circle
              key={seg.key}
              className="chart-donut__seg"
              cx="70"
              cy="70"
              r={r}
              stroke={colors[i % colors.length]}
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              style={{ transition: 'stroke-dasharray 1.2s ease' }}
            />
          )
          offset += dash
          return el
        })}
      </svg>
      <div className="chart-donut__legend">
        {segments.map((seg, i) => (
          <span key={seg.key}>
            <i style={{ background: colors[i % colors.length] }} />
            {labels[seg.key]} {Math.round((seg.value / total) * 100)}%
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { t } = useLang()
  const { variant } = useUIVariant()
  const data = useDashboardData()
  const skin = variant === '3' ? 'dark' : 'light'
  const d = t.dashboard

  const kpiMeta = [
    { ...data.kpis[0], label: d.kpis.traffic },
    { ...data.kpis[1], label: d.kpis.conversion },
    { ...data.kpis[2], label: d.kpis.revenue },
    { ...data.kpis[3], label: d.kpis.roi },
  ]

  return (
    <section className={`section dashboard dashboard--${skin}`} id="dashboard">
      <div className="container">
        <div className="dashboard__head reveal">
          <div>
            <span className="eyebrow">
              {skin === 'light' && <span className="eyebrow__hash">#</span>}
              {d.eyebrow}
            </span>
            <h2 className="section-title">{d.title}</h2>
            <p className="dashboard__sub">{d.subtitle}</p>
          </div>
          <div className="dashboard__pulse" aria-hidden>
            <span className="dashboard__pulse-dot" />
            LIVE
          </div>
        </div>

        <div className="dashboard__kpis reveal">
          {kpiMeta.map((k, i) => (
            <article className="dash-kpi" key={k.id} style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="dash-kpi__label">{k.label}</span>
              <span className="dash-kpi__value">
                <CountUp end={k.value} prefix={k.prefix || ''} suffix={k.suffix || ''} />
              </span>
              <span className={`dash-kpi__trend ${k.trend >= 0 ? 'is-up' : 'is-down'}`}>
                {k.trend >= 0 ? '↑' : '↓'} {Math.abs(k.trend)}% {d.vsLast}
              </span>
            </article>
          ))}
        </div>

        <div className="dashboard__grid reveal">
          <article className="dash-card dash-card--wide">
            <h3>{d.charts.weekly}</h3>
            <div className="chart-bars">
              {data.bars.map((h, i) => (
                <div className="chart-bars__col" key={i}>
                  <div className="chart-bars__bar" style={{ '--h': `${h}%` }} />
                  <span>{data.barLabels[i]}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="dash-card">
            <h3>{d.charts.growth}</h3>
            <LineChart data={data.line} labels={data.lineLabels} variant={skin} />
          </article>

          <article className="dash-card">
            <h3>{d.charts.sources}</h3>
            <DonutChart
              segments={data.donut}
              labels={d.donut}
              total={data.donutTotal}
              variant={skin}
            />
          </article>

          <article className="dash-card">
            <h3>{d.charts.score}</h3>
            <div className="chart-gauge">
              <svg viewBox="0 0 120 120" aria-hidden>
                <circle className="chart-gauge__bg" cx="60" cy="60" r="48" />
                <circle
                  className="chart-gauge__fill"
                  cx="60"
                  cy="60"
                  r="48"
                  style={{ '--pct': data.gauge }}
                />
              </svg>
              <span className="chart-gauge__val">
                <CountUp end={data.gauge} suffix="%" />
              </span>
            </div>
          </article>

          <article className="dash-card dash-card--wide">
            <h3>{d.charts.live}</h3>
            <ul className="dash-activity">
              {data.activities.map((a) => (
                <li key={a.id}>
                  <span className={`dash-activity__icon dash-activity__icon--${a.type}`}>●</span>
                  <span className="dash-activity__text">{d.activity[a.type]}</span>
                  <span className="dash-activity__delta">+{a.delta}%</span>
                  <span className="dash-activity__time">{a.minutes}m</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
