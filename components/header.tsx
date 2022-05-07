import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex items-center justify-center border-b-2 h-16">
      <Link href="/">
        <a className="text-2xl font-bold">ken-dev-blog</a>
      </Link>
    </div>
  )
}

export default Header
