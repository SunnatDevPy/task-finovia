import { BLOG_IMAGES } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Blog() {
  const { t } = useLang()
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="work__head reveal">
          <div>
            <span className="eyebrow">{t.blog.eyebrow}</span>
            <h2 className="section-title">{t.blog.title}</h2>
          </div>
          <a href="#contact" className="btn btn-outline">
            {t.blog.visit} <span className="arrow">↗</span>
          </a>
        </div>

        <div className="blog__grid">
          {t.blog.items.map((post, i) => (
            <article className="blog-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="blog-card__img">
                <img src={BLOG_IMAGES[i]} alt={post.title} loading="lazy" />
                <span className="blog-card__tag">{post.tag}</span>
              </div>
              <h3>{post.title}</h3>
              <a href="#contact" className="blog-card__link">
                {t.blog.learnMore} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
