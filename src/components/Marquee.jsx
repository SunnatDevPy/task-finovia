import { useLang } from '../i18n/LanguageContext.jsx'

export default function Marquee() {
  const { t } = useLang()
  const loop = [...t.marquee, ...t.marquee]
  return (
    <div className="marquee">
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
