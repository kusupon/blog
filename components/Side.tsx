import { Content } from 'newt-client-js'
import { Tag } from '../types/tag'
import styles from '../styles/Side.module.css'
import Link from 'next/link'
import { Author } from '../types/author'
import { Archive } from '../types/article'

export function Side({
  popularTags,
  authors,
  archives,
}: {
  popularTags: (Content & Tag & { total: number })[]
  authors: (Content & Author & { total: number })[]
  archives: Archive[]
}) {
  return (
    <aside className={styles.Side}>
      <div className={styles.Side_Row}>
        <h3 className={styles.Side_Heading}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#333333"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z" />
            <circle cx="6.5" cy="6.5" r="1.5" />
          </svg>
          Popular Tags
        </h3>
        <ul className={styles.PopularTags}>
          {popularTags.map((tag) => (
            <li key={tag._id}>
              <Link href={`/tag/${tag.slug}`}>
                <a>
                  {tag.name}({tag.total})
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.Side_Row}>
        <h3 className={styles.Side_Heading}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#333333"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
          </svg>
          Archives
        </h3>
        <ul className={styles.Archives}>
          {archives.map((archive) => (
            <li key={archive.year}>
              <Link href={`/archive/${archive.year}`}>
                <a>
                  {archive.year}({archive.count})
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
