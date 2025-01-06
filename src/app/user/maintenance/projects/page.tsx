import React from 'react'
import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'

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

// Invoice data
const projects = [
  {
    projectCode: "PRJ001",
    projectName: "Building A",
    levyAmount: "$250.00",
    status: "Completed",
    certificate: "download",
    action: "edit",
  },
  {
    projectCode: "PRJ002",
    projectName: "Bridge Construction",
    levyAmount: "$150.00",
    status: "Ongoing",
    certificate: "download",
    action: "edit",
  },
  {
    projectCode: "PRJ003",
    projectName: "Road Expansion",
    levyAmount: "$350.00",
    status: "Pending",
    certificate: "download",
    action: "edit",
  },
]

function Page() {
  return (
    <PageWrapper>
      <PageTitle title='Projects' />
      <div className="search-bar mb-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="search-input w-full p-2 border border-gray-300 rounded-lg" 
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Project Code</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Levy Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Certificate</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.projectCode}>
              <TableCell className="font-medium">{project.projectCode}</TableCell>
              <TableCell>{project.projectName}</TableCell>
              <TableCell>{project.levyAmount}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                <a href="#" className="text-blue-500">{project.certificate}</a>
              </TableCell>
              <TableCell>
                <button className="text-blue-500">{project.action}</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageWrapper>
  )
}

export default Page
