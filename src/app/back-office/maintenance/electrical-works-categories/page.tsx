import React from 'react'
import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import transactions from '@/data/transactionsData.json'
// Import UI components for the table
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import ContentCard  from '@/components/content-card'

// Invoice data

function Page() {
   

  return (
    <PageWrapper>
      <PageTitle title='Electrical Works Category' />
      <div className='flex items-center justify-between'>
        <div className="flex flex-col items-center gap-1">
          {/* <span className="text-lg font-medium text-gray-900">
            <strong>Current Balance: </strong> 0.00</span> */}
            <Button className='self-start'>Create New</Button>
        </div>
        {/* <button className="text-blue-500">download statement</button> */}
      </div>
      <div className="search-bar my-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="search-input w-full p-2 border border-gray-300 rounded-lg" 
        />
      </div>
      <ContentCard>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Grade</TableHead>
              <TableHead>Required Score</TableHead>
              <TableHead>Maximum Tender Value</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transcation) => (
              <TableRow key={transcation.projectCode}>
                <TableCell className="font-medium">{transcation.date}</TableCell>
                <TableCell>{transcation.projectCode}</TableCell>
                <TableCell>{transcation.reference}</TableCell>
          
                <TableCell>
                  <button className="text-blue-500">View</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ContentCard>
    </PageWrapper>
  )
}

export default Page







