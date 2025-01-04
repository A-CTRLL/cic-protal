import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import FilterActiveApplication from './_components/filter-active-application'

function page() {
  return (
    <PageWrapper>
        <PageTitle title='Active Applications'/>
        <FilterActiveApplication/>  
    </PageWrapper>
  )
}

export default page