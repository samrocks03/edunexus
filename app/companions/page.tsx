import { fetchCompanions } from '@/lib/actions/companion.actions'
import CompanionCard from '@/components/dashboard/CompanionCard'
import { getSubjectColor } from '@/lib/utils'
import SearchInput from '@/components/ui/SearchInput'
import SubjectFilter from '@/components/ui/SubjectFilter'

export default async function Companions({ searchParams }: SearchParams) {
  const filters = await searchParams

  const subject = filters.subject ? filters.subject : ''
  const topic = filters.topic ? filters.topic : ''

  const companions = await fetchCompanions({ subject, topic })

  return (
    <main>
      <section className={'flex justify-between gap-4 max-sm:flex-col'}>
        <h1>Companion Library</h1>
        <div className={'flex gap-4'}>
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      <section className={'companions-grid'}>
        {companions.map(comp => {
          console.log('comp: ', comp)
          console.log('comp: ', getSubjectColor(comp.subject))

          return <CompanionCard key={comp.id} {...comp} color={getSubjectColor(comp.subject)} />
        })}
      </section>
    </main>
  )
}
