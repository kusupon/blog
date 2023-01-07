import Link from 'next/link'
import styles from '../styles/ArticleCard.module.css'
import { formatDate } from '../lib/date'
import { Content } from 'newt-client-js'
import { Article } from '../types/article'
import { useMemo } from 'react'

export function ArticleCard({ article }: { article: Content & Article }) {
  const authorName = useMemo(() => {
    return article.author?.fullName || 'NO NAME'
  }, [article])

  return (
    <Link href={`/article/${article.slug}`}>
      <a className={styles.Article}>
        <div className={styles.Article_Eyecatch}>
          {article.coverImage ? (
            <img src={article.coverImage.src} alt="" />
          ) : (
            <div className={styles.Article_EyecatchEmpty}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="#CCCCCC"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
              </svg>
            </div>
          )}
        </div>
        <div className={styles.Article_Data}>
          <h3 className={styles.Article_Title}>{article.title}</h3>
          <ul className={styles.Article_Tags}>
            {article.tags.map((tag) => (
              <li key={tag._id}>#{tag.name}</li>
            ))}
          </ul>
          <div className={styles.Article_Author}>
            <div className={styles.Article_AuthorData}>
              <time dateTime={formatDate(article._sys.createdAt)}>
                {formatDate(article._sys.createdAt)}
              </time>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
