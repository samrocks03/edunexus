'use client'
import { useEffect, useState } from 'react'
import { formUrlQuery, removeKeysFromUrlQuery } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { subjects } from '@/constants'

const SubjectFilter = () => {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filterQuery, setfilterQuery] = useState<string>('')

  useEffect(() => {
    const handler = setTimeout(() => {
      if (filterQuery === 'all') {
        const newUrl = removeKeysFromUrlQuery({ params: searchParams.toString(), keysToRemove: ['subject'] })
        router.push(newUrl, { scroll: false })
      } else {
        const newUrl = formUrlQuery({ params: searchParams.toString(), key: 'subject', value: filterQuery })
        router.push(newUrl, { scroll: false })
      }
    }, 400)

    return () => clearTimeout(handler)
  }, [filterQuery, pathName, router, searchParams])

  return (
    <div>
      <Select value={filterQuery} onValueChange={val => setfilterQuery(val)}>
        <SelectTrigger className='border border-black w-fit font-semibold placeholder:font-normal rounded-lg'>
          <SelectValue placeholder='Subject' />
        </SelectTrigger>

        <SelectContent>
          {subjects.map(subject => (
            <SelectItem key={subject} value={subject}>
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SubjectFilter
