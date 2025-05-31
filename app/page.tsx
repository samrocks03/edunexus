import React from 'react'
import CompanionCard from '@/components/dashboard/CompanionCard'
import CompanionsList from '@/components/dashboard/CompanionsList'
import CTA from '@/components/dashboard/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          companionId='133'
          name='Neura the Brainy Explorer'
          topic=' Neural Network of the Brain'
          subject='Science'
          duration='45'
          color='#E5D0FF'
        />

        <CompanionCard
          companionId='123'
          name='Countsy the Number Wizard'
          topic=' Derivatives & Integrals'
          subject='Maths'
          duration='30'
          color='#FFDA6E'
        />

        <CompanionCard
          companionId='456'
          name='Verba the Vocabulary Builder'
          topic='English Literature '
          subject='Language'
          duration='30'
          color='#BDE7FF'
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title={'Recently Completed Sessions'}
          companions={recentSessions}
          classNames={'w-2/3 max-lg:w-full'}
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page
