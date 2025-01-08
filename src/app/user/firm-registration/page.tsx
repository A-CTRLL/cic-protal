import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import FirmRegistrationForm from './_components/firm-registration-form'
import ContentCard from '@/components/content-card'

function page() {
  return (
    <PageWrapper>
      <PageTitle title='Construction Firm Registration Form'/>
      <ContentCard>
        <FirmRegistrationForm/>
      </ContentCard>
    </PageWrapper>
  )
}

export default page