import { TEAM } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Team() {
  const { t } = useLang()
  return (
    <section className="section team">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.team.eyebrow}</span>
          <h2 className="section-title">{t.team.title}</h2>
          <p>{t.team.text}</p>
        </div>

        <div className="team__grid">
          {TEAM.map((member, i) => (
            <article className="team-card reveal" key={member.name} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="team-card__img">
                <img src={member.img} alt={member.name} loading="lazy" />
              </div>
              <h3>{member.name}</h3>
              <span>{t.team.roles[i]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
