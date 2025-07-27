import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center'>
      <Image
        src='/images/logo/logo-text-hijau-transparent-header.png'
        alt='Bloome Education Logo'
        width={150}
        height={40}
        className='h-14 w-auto'
        priority
      />
    </Link>
  )
}

export default Logo
