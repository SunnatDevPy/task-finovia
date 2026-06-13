import { BLOG_IMAGES } from '../data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useUIVariant } from '../context/UIVariantContext.jsx'

export default function Blog() {
  const { t } = useLang()
  const { variant } = useUIVariant()
  const isUi2 = variant === '2'

  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="work__head reveal">
          <div>
            <span className="eyebrow">
              {isUi2 && <span className="eyebrow__hash">#</span>}
              {t.blog.eyebrow}
            </span>
            <h2 className="section-title">{t.blog.title}</h2>
          </div>
          <a href="#contact" className={`btn ${isUi2 ? 'btn-primary' : 'btn-outline'}`}>
            {t.blog.visit} <span className="arrow">{isUi2 ? '→' : '↗'}</span>
          </a>
        </div>

        <div className="blog__grid">
          {t.blog.items.map((post, i) => (
            <article className="blog-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="blog-card__img">
                <img src={BLOG_IMAGES[i]} alt={post.title} loading="lazy" />
                {!isUi2 && <span className="blog-card__tag">{post.tag}</span>}
              </div>
              <div className="blog-card__body">
                {isUi2 && (
                  <span className="blog-card__tag">
                    <span className="blog-card__tag-icon">#</span>
                    {post.tag}
                  </span>
                )}
                <h3>{post.title}</h3>
                <a href="#contact" className="blog-card__link">
                  {isUi2 ? `> ${t.blog.learnMore}` : `${t.blog.learnMore} →`}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
