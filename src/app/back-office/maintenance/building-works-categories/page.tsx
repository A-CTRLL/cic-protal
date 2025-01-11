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
import  companies from '@/data/companies.json'
import Link from 'next/link'



function page() {
  return (
    <PageWrapper>
        <PageTitle title='Building Works Categories'/>
        <Card>
        <Table>
        <TableCaption>A list of all the companies.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Date</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Grade</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            companies.map((company: any) => (
              
                 <TableRow>
                  <TableCell className="font-medium">{company.created_at}</TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.status}</TableCell>
                  <TableCell className="text-right">{company.current_grade}</TableCell>
                  <TableCell className='text-right'><Link href={`/back-office/maintenance/company/${company.company_id}`}>View</Link></TableCell>
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