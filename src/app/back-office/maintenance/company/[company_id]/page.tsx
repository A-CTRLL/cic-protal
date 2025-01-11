'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import PageWrapper from '@/components/page-wrapper' 
import PageTitle from '@/components/page-title'
import companies from '@/data/companies.json'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"




function page() {

  const {company_id} = useParams()

  const company=companies.find((company: any) => company.company_id == company_id)

  return (
    <PageWrapper>
        <div className='flex items-center justify-between'>
          <PageTitle title={`${company?.name}`}/>
          <Badge variant="outline">{`${company?.business_type}`}</Badge>
        </div>

        <Card>
          <h1>
            <strong>Address: </strong>{company?.head_office_address}
          </h1>
          <h1>
            <strong>Email: </strong>{company?.email}
          </h1>
          <h1>
            <strong>Contact Number: </strong>{company?.contact_number}
          </h1>
        </Card>

        <div className='flex gap-2 my-4'>
          <GradingCompany/>
          <Button>Suspend</Button>
        </div>
        <Card>
           
        </Card>
    </PageWrapper>
  )
}

export default page



function GradingCompany() {
  return (
        <Dialog>
        <DialogTrigger>
          <Button>Grade Company</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

  )
}