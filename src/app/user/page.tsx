import React from 'react'
import PageWrapper from '@/components/page-wrapper'
import PageTitle from '@/components/page-title'
import CardContent from '@/components/content-card'
import { IoConstructSharp, IoDocumentText } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { PiCoinsFill } from "react-icons/pi";
import { Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import { MdBusinessCenter } from "react-icons/md";
import { GrFolderCycle } from "react-icons/gr";
import { MdMapsHomeWork } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import projects from '@/data/projects.json'


function DashboardTitle({title}:{title: string}) {
  return (
    <h2 className='text-2xl pt-8 pb-3 '>{title}</h2>
  )
}


function page() {
  return (
    <PageWrapper>
      <PageTitle title='Welcome, Bob'/>
      <DashboardTitle title='Overview'/>
      <section className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
          
          <Card>
              <span className='text-5xl font-bold text-center'>
                {
                  projects.filter(project => project.project_status === 'In Progress').length
                }
              </span>
              <div className='flex items-center gap-2'>
                 <IoConstructSharp className='text-3xl'/>
                  <h3 className='text-md leading-none'>Active Projects</h3>
              </div>
          </Card>
          <Card>
              <span className='text-5xl font-bold text-center'>04</span>
              <div className='flex items-center gap-2'>
                 <IoDocumentText className='text-3xl'/>
                  <h3 className='text-md leading-none'>Submitted Application</h3>
              </div>
          </Card>
          <Card>
              <span className='text-5xl font-bold text-center'>1M</span>
              <div className='flex items-center gap-2'>
                 <GiWallet className='text-3xl'/>
                  <h3 className='text-md leading-none'>Paid Levies</h3>
              </div>
          </Card>
          <Card>
              <span className='text-5xl font-bold text-center'>100k</span>
              <div className='flex items-center gap-2'>
                 <PiCoinsFill className='text-3xl'/>
                  <h3 className='text-md leading-none'>Unpaid Levies</h3>
              </div>
          </Card>
      </section>
      <DashboardTitle title='Tasks & Notifications'/>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <Card>
              <span className='text-xl font-bold text-center'>Tasks</span>
              
          </Card>
          <Card>
              <span className='text-xl font-bold text-center'>Notifications</span>
              
          </Card>
      </section>
      <DashboardTitle title='Company Overview'/>
      <section className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        
          <Card>  
              <div className='flex justify-between items-center gap-2 '>
              <div className='flex items-center gap-2'>
                 <MdBusinessCenter className='text-3xl'/>
                  <h3 className='text-sm leading-none '>Company <br/>Management</h3>
              </div>
              <Button className='self-end mt-4 '>View</Button>
              </div>
          </Card>
          <Card>  
              <div className='flex justify-between items-center gap-2 '>
              <div className='flex items-center gap-2'>
                 <GrFolderCycle className='text-3xl'/>
                  <h3 className='text-sm leading-none '>Company Renewal <br/>Application</h3>
              </div>
              <Button className='self-end mt-4' disabled>View</Button>
              </div>
          </Card>
          <Card>  
              <div className='flex justify-between items-center gap-2 '>
              <div className='flex items-center gap-2'>
                 <MdMapsHomeWork className='text-3xl'/>
                  <h3 className='text-sm leading-none '>Company Renewal <br/>Application</h3>
              </div>
              <Button className='self-end mt-4'>View</Button>
              </div>
          </Card>         
      </section>

      <DashboardTitle title='Project Overview'/>
      <Card>
           
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Start Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Contract Value excl. Levy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
            {
              projects.filter((project: any) => project.company_id === 1).map((project) => (
                <TableRow key={project.project_id} className='cursor-pointer'>
                  <TableCell className="font-medium">{project.proposed_start_date}</TableCell>
                  <TableCell>{project.project_title}</TableCell>
                  <TableCell>{project.project_status}</TableCell>
                  <TableCell className="text-right">{project.contract_value_excluding_levy}</TableCell>
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