"use client"

import React from 'react'
import PageWrapper from '@/components/page-wrapper'
import PageTitle from '@/components/page-title'
import {
  useState,useEffect
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Link from 'next/link'


import {Card} from '@/components/ui/card'
import ProjectLevyForm from '../_components/project-levy-form'

function page() {
  const [formType,setFormType] = useState('CICF_1')


  useEffect(() => {
      
  },[formType])

  return (
    <PageWrapper>
        <PageTitle title='New Application'/>
        <Select onValueChange={setFormType} value={formType}>
        <SelectTrigger className="">
            <SelectValue placeholder="Select Application Type" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="CICF_1" >CICF 1- Construction Firm Registration</SelectItem>
            <SelectItem value="CICF_8">CICF 8- Construction Projects & Levy Assesment form</SelectItem>   
            <SelectItem value="CICF_9">CICF 9- SOME form</SelectItem>        
        </SelectContent>
        </Select>
       <Card className='mt-4'>

        {
            formType==='' 
            && 
            <div>
               Select Application you would like to submit
            </div>
        }
        {
            formType==='CICF_1'
            &&
            <div className='flex flex-col justify-center items-center'>
                <FormHeader title='CONSTRUCTION FIRMS REGISTRATION- CICF 1'/>
                <h1 className='text-center text-green-600 text-xl uppercase'> You have meet criteria to apply for this application </h1>
                <Button className='mt-4 self-center'>Submit Application for Review</Button>
            </div>
        }
        {
            formType==='CICF_8' && 
            <div className='flex flex-col justify-center items-center'>
                <FormHeader title='CONSTRUCTION PROJECTS AND LEVY ASSESSMENT REGISTRATION- CICF 8'/>
                <ProjectLevyForm/>

                 This is being developed
            </div>
         }
         {
            formType==='CICF_9' && 
            <div className='flex flex-col justify-center items-center'>
                <FormHeader title='CONSTRUCTION PROJECTS AND LEVY ASSESSMENT REGISTRATION- CICF 8'/>
                <h1 className='text-center text-red-600 text-xl uppercase'> Your Company has Outstanding info & Does not meet criteria to apply for this application. You are missing the following: Project Manager, and Contractors
                     </h1>
                <Link href={'/user/maintanance/project-resource-pool'}>
                    <Button className='mt-4'>
                        UPDATE DETAILS
                    </Button>
                </Link>
            </div>
         }
        </Card>
    </PageWrapper>
  )
}

export default page




function FormHeader({title}:{title:string}) {
  return (
    <div className="h-16 w-full mb-4 drop-shadow-lg text-xl  uppercase flex items-center justify-center text-white bg-black rounded-lg">
        {title}
    </div>
  )
}

