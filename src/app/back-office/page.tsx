import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import ApplicationCard from './_components/application-cards'
import FilterActiveApplication from '../user/_components/filter-active-application'


function page() {
  return (
    <PageWrapper>
        <PageTitle title='Active Applications'/>
        <FilterActiveApplication/>
        <div className='grid grid-cols-2 gap-2'>
            <ApplicationCard/>
            <ApplicationCard/>
            <ApplicationCard/>
            <ApplicationCard/>
            <ApplicationCard/>
        </div>  
    </PageWrapper>
  )
}

export default page