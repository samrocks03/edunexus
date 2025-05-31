'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItemsObject = [
  {
    label: 'Home',
    href: '/'
  },

  {
    label: 'Companions',
    href: '/companions'
  },

  {
    label: 'My Journey',
    href: '/my-journey'
  },

  // {
  //   label: 'Sign In',
  //   href: '/sign-in'
  // }
]

const NavItems = () => {
  const pathName = usePathname()

  return (
    <nav className='flex items-center gap-4'>
      {navItemsObject.map(({ label, href }) => (
        <Link
          href={href}
          aria-label={label}
          key={label}
          className={cn(pathName === href && 'text-primary font-semibold ')}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
