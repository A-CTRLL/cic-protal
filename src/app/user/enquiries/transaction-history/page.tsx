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

// Invoice data

function Page() {
   






  return (
    <PageWrapper>
      <PageTitle title='Transaction History' />
      <div className='flex items-center justify-between'>
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-medium text-gray-900">
            <strong>Current Balance: </strong> 0.00</span>
            <Button className='self-start'>Make Payment</Button>
        </div>
        <button className="text-blue-500">download statement</button>
      </div>
      <div className="search-bar my-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="search-input w-full p-2 border border-gray-300 rounded-lg" 
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead>Project Code</TableHead>
            <TableHead>Refrence</TableHead>
            <TableHead>Levy Amount</TableHead>
            <TableHead>Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transcation) => (
            <TableRow key={transcation.projectCode}>
              <TableCell className="font-medium">{transcation.date}</TableCell>
              <TableCell>{transcation.projectCode}</TableCell>
              <TableCell>{transcation.reference}</TableCell>
              <TableCell>{transcation.levyAmount}</TableCell>
              <TableCell>
                <button className="text-blue-500">{transcation.invoice}</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageWrapper>
  )
}

export default Page







