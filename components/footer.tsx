import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          <a>
            <Image src="/icon/twitter.svg" alt="twitter" height={30} width={30} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image src="/icon/github.svg" alt="github" height={30} width={30} />
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
