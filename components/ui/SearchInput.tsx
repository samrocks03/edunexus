'use client'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { formUrlQuery, removeKeysFromUrlQuery } from '@/lib/utils'

const SearchInput = () => {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchQuery, setsearchQuery] = useState<string>('')

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({ params: searchParams.toString(), key: 'topic', value: searchQuery })
        router.push(newUrl, { scroll: false })
      } else if (pathName === '/companions') {
        const newUrl = removeKeysFromUrlQuery({ params: searchParams.toString(), keysToRemove: ['topic'] })
        router.push(newUrl, { scroll: false })
      }
    }, 400)

    return () => clearTimeout(handler)
  }, [searchQuery, pathName, router, searchParams])

  return (
    <div className='relative border border-black rounded-lg flex items-center gap-2 px-2 py-1 h-fit'>
      <Image src='/icons/search.svg' alt='search' width={15} height={15} />

      <input
        className='outline-none'
        placeholder='Search companions...'
        value={searchQuery}
        onChange={e => setsearchQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
