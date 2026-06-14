import { TEAM } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { rv } from '../utils/reveal.js'

export default function Team() {
  const { t } = useLang()
  const dirs = ['up', 'left', 'right', 'scale']
  return (
    <section className="section team">
      <div className="container">
        <div className="section-head" {...rv('right')}>
          <span className="eyebrow">{t.team.eyebrow}</span>
          <h2 className="section-title">{t.team.title}</h2>
          <p>{t.team.text}</p>
        </div>

        <div className="team__grid">
          {TEAM.map((member, i) => (
            <article
              className="team-card"
              key={member.name}
              {...rv(dirs[i], i * 0.09)}
            >
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
