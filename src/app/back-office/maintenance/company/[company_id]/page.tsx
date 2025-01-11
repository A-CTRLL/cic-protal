'use client'
import React from 'react'
import { useParams } from 'next/navigation'

function page() {

  const {company_id} = useParams()
  return (
    <div>page: {company_id}</div>
  )
}

export default page