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
        <PageTitle title='Active Applications'/>
       
        <div className='grid grid-cols-2 gap-2'>
            <ApplicationCard/>
            <ApplicationCard/>
            <ApplicationCard/>
            <ApplicationCard/>
            <ApplicationCard/>
        </div>  
    </PageWrapper>
  )
}

export default page