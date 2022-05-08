import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://twitter.com/kentaro_s90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icon/twitter.svg" alt="twitter" height={30} width={30} />
        </a>
        <a
          href="https://github.com/kentaro84207"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icon/github.svg" alt="github" height={30} width={30} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
