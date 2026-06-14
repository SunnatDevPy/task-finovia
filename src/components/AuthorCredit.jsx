import { AUTHOR } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function AuthorCredit() {
  const { t } = useLang()
  return (
    <a href={AUTHOR.phoneHref} className="author-credit" aria-label={`${t.footer.by} ${AUTHOR.phone}`}>
      <span className="author-credit__by">{t.footer.by}</span>
      <span className="author-credit__phone">{AUTHOR.phone}</span>
    </a>
  )
}
