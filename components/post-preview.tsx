import DateFormatter from './date-formatter'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div className="bg-white px-4 py-2 rounded">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-gray-500">{excerpt}</p>
          <div className="text-sm mt-3">
            <DateFormatter dateString={date} />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostPreview
