import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center'>
      <div className='flex items-center gap-2'>
        <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center'>
          <span className='text-white font-bold text-xl'>B</span>
        </div>
        <span className='text-2xl font-bold text-midnight_text'>Bloome</span>
      </div>
    </Link>
  )
}

export default Logo
