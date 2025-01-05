import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import FirmRegistrationForm from './_components/firm-registration-form'

function page() {
  return (
    <PageWrapper>
      <PageTitle title='Construction Firm Registration Form'/>
      <FirmRegistrationForm/>
    </PageWrapper>
  )
}

export default page