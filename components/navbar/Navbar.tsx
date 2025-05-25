import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.png'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image src={logo} alt='Edu-Nexus Logo' width={46} height={44} />
        </div>
      </Link>

      <NavItems />
    </nav>
  )
}

export default Navbar
