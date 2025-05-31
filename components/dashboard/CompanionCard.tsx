import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ICompanionCard {
  companionId: string
  name: string
  topic: string
  subject: string
  duration: string
  color: string
}

const CompanionCard = ({ companionId, name, topic, subject, duration, color }: ICompanionCard) => {
  return (
    <article className={cn('companion-card')} style={{ backgroundColor: color }}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>

        <div className='companion-bookmark'>
          <Image src={'/icons/bookmark.svg'} alt='bookmark' width={12.5} height={15} />
        </div>
      </div>

      <div className='text-2xl font-bold'>{name}</div>
      <p className='text-sm'>{topic}</p>

      <div className='flex items-center gap-2'>
        <Image src='/icons/clock.svg' alt='duration' width={13.5} height={13.5} />
        <p className='text-sm'>{duration} mins duration</p>
      </div>

      <Link href={`/companions/${companionId}`}>
        <button className='btn-primary w-full justify-center'>Launch Lesson</button>
      </Link>
    </article>
  )
}

export default CompanionCard
