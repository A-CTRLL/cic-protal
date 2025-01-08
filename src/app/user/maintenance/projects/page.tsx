'use client'
import React from 'react'
import { useEffect } from 'react'
import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import ContentCard from '@/components/content-card'
import {Label} from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { MdEditDocument } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";

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


//import UI components for the dialog
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from 'react-day-picker'





function Page() {

  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    const projectsData = JSON.parse(localStorage.getItem('projects') || '[]');
    setProjects(projectsData)
  }, [])


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
      
      <ContentCard>
      <Table className=''>
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
          {projects.map((project: any) => (
            <TableRow key={project?.projectCode}>
              <TableCell  className="font-medium">{project?.projectCode}</TableCell>
              <TableCell>{project?.projectName}</TableCell>
              <TableCell>{project?.levyAmount}</TableCell>
              <TableCell>{project?.status}</TableCell>
              <TableCell className='flex items-center'>
                <a href="#" className="text-blue-500 flex gap-1 items-center"><MdDownloadForOffline/> Download</a>
              </TableCell>
              <TableCell>
                <Dialog>
                 <DialogTrigger className='flex gap-1 items-center'>
                  <MdEditDocument/> Edit
                 </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Project</DialogTitle>
                      <DialogDescription>
                        <form>
                          <div className="grid gap-4 py-4">
                            <div className="flex flex-col gap-2">
                              <Label className="text-start">Project Code</Label>
                              <Input type="text" value={project?.projectCode} disabled className="col-span-3" />
                            </div>
                            <div className="flex flex-col gap-2">
                              <Label className="text-start">Project Name</Label>
                              <Input type="text" value={project?.projectName} className="col-span-3" />
                            </div>
                            <div className="flex flex-col gap-2">
                              <Label className="text-start">Levy Amount</Label>
                              <Input type="text" value={project?.levyAmount} className="col-span-3" />
                            </div>
                            
                          </div>
                          
                        </form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
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
