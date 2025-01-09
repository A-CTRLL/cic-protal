import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import ProjectRegistrationForm from './_components/project-registration-form'
import ContentCard from '@/components/content-card'


function page() {
  return (
    <PageWrapper>
        <PageTitle title='Construction Projects & Levy Registration form'/>
        <ContentCard>
           <ProjectRegistrationForm/>
        </ContentCard>
    </PageWrapper>
  )
}

export default page