import { AUTHOR } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLang()
  const menuHrefs = ['#about', '#services', '#work', '#blog', '#testimonials']
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="logo">
            finovia<span>.</span>
          </a>
          <p>{t.footer.brand}</p>
          <a href={AUTHOR.phoneHref} className="footer__author">
            <strong>{t.footer.by}</strong>
            <span>{AUTHOR.phone}</span>
          </a>
        </div>

        <div className="footer__col">
          <h4>{t.footer.menuTitle}</h4>
          <ul>
            {t.footer.menu.map((item, i) => (
              <li key={i}><a href={menuHrefs[i]}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.supportTitle}</h4>
          <ul>
            {t.footer.support.map((item, i) => (
              <li key={i}><a href="#contact">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
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

      <div className="container footer__bottom">
        <span>{t.footer.copyright}</span>
        <a href={AUTHOR.phoneHref} className="footer__bottom-link">
          {t.footer.by} · {AUTHOR.phone}
        </a>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  )
}
