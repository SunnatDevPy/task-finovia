import { useEffect, useState } from 'react'
import { NAV_HREFS } from '../data.js'
import { LANGS } from '../i18n/translations.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useUIVariant } from '../context/UIVariantContext.jsx'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const { variant, setVariant } = useUIVariant()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <div className="header__left">
          <a href="#top" className="logo">
            finovia<span>.</span>
          </a>

          <div className="ui-switch" role="group" aria-label="Design variant">
            <span className={`ui-switch__thumb ui-switch__thumb--${variant}`} />
            <button
              className={`ui-switch__btn ${variant === '1' ? 'is-active' : ''}`}
              onClick={() => setVariant('1')}
            >
              UI 1
            </button>
            <button
              className={`ui-switch__btn ${variant === '2' ? 'is-active' : ''}`}
              onClick={() => setVariant('2')}
            >
              UI 2
            </button>
            <button
              className={`ui-switch__btn ${variant === '3' ? 'is-active' : ''}`}
              onClick={() => setVariant('3')}
            >
              UI 3
            </button>
          </div>
        </div>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {t.nav.items.map((label, i) => (
            <a key={NAV_HREFS[i]} href={NAV_HREFS[i]} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            {t.nav.contact}
          </a>
        </nav>

        <div className="header__right">
          <div className="lang-switch" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l.code}
                className={`lang-switch__btn ${lang === l.code ? 'is-active' : ''}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary header__cta">
            {t.nav.contact}
          </a>

          <button
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
