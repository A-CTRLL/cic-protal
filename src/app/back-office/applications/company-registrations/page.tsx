import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Card} from "@/components/ui/card"
import applications from '@/data/applications.json'
import Link from 'next/link'



function page() {
  return (
    <PageWrapper>
        <PageTitle title='Company Registration Applications'/>
        <Card>
        <Table>
        <TableCaption>A list of all the companies.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Date</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            applications.map((application: any) => (
              
                 <TableRow key={application.application_id}>
                  <TableCell className="font-medium">{application.created_at}</TableCell>
                  
                  <TableCell>{application.company_name}</TableCell>
    
                  <TableCell className='text-right'><Link href={`/back-office/application/${application.company_id}`}>View</Link></TableCell>
                </TableRow>
              
            ))
          }
        </TableBody>
      </Table>
      </Card>

        
    </PageWrapper>
  )
}

export default page