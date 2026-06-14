import { AUTHOR } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useUIVariant } from '../context/UIVariantContext.jsx'
import { rv } from '../utils/reveal.js'

export default function Footer() {
  const { t } = useLang()
  const { variant } = useUIVariant()
  const menuHrefs = ['#about', '#services', '#work', '#blog', '#testimonials']

  return (
    <footer className={`footer footer--ui${variant}`}>
      <div className="footer__top">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__brand" {...rv('up')}>
              <a href="#top" className="logo">
                finovia<span>.</span>
              </a>
              <p>{t.footer.brand}</p>
            </div>

            <div className="footer__col" {...rv('up', 0.08)}>
              <h4>{t.footer.menuTitle}</h4>
              <ul>
                {t.footer.menu.map((item, i) => (
                  <li key={i}><a href={menuHrefs[i]}>{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__col" {...rv('up', 0.14)}>
              <h4>{t.footer.supportTitle}</h4>
              <ul>
                {t.footer.support.map((item, i) => (
                  <li key={i}><a href="#contact">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__col footer__col--touch" {...rv('up', 0.2)}>
              <h4>{t.footer.touchTitle}</h4>
              <ul>
                <li>Toshkent, O‘zbekiston</li>
                <li>
                  <a href={`mailto:hello@${AUTHOR.name.toLowerCase()}.dev`}>hello@finovia.com</a>
                </li>
                <li>
                  <a href={AUTHOR.phoneHref}>{AUTHOR.phone}</a>
                </li>
                <li>09:00 — 22:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>{t.footer.copyright}</span>
          <a href={AUTHOR.phoneHref} className="footer__bottom-link">
            {t.footer.by} · {AUTHOR.phone}
          </a>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  )
}
