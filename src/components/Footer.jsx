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
            <li>918 Wolter, Lampung</li>
            <li>example@mail.com</li>
            <li>+1 234 567 890</li>
            <li>07.00 AM - 23.00 PM</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>{t.footer.copyright}</span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  )
}
