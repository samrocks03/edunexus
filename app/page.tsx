import React from 'react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'

const Page = () => {
  return (
    <>
      <div className='flex space-x-4'>
        <h1 className={'text-2xl underline animate-[fade-in_0.3s_ease-in-out]'}>Welcome to EduNexus</h1>
        <Button className={'btn-primary '}>Let&#39;s get started</Button>
      </div>
    </>
  )
}

export default Page
