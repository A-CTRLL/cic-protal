'use client'

import { useParams } from 'next/navigation'
import PageWrapper from '@/components/page-wrapper'
import PageTitle from '@/components/page-title'
import {Button} from '@/components/ui/button'
import applications from '@/data/applications.json'
import companies from '@/data/companies.json'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {
  useState
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Card} from '@/components/ui/card'

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
import {
  Textarea
} from "@/components/ui/textarea"

const formSchema = z.object({
  financial_year: z.string(),
  status: z.string(),
  comment: z.string()
});

function ApplicationReviewForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <FormField
          control={form.control}
          name="financial_year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Financial Year</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Financial Year 1">Financial Year 1</SelectItem>
                  <SelectItem value="Financial Year 2">Financial Year 2</SelectItem>
                  <SelectItem value="Financial Year 3">Financial Year 3</SelectItem>
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Action</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Approved">Approve</SelectItem>
                  <SelectItem value="Rejected">Reject</SelectItem>
                
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
  

export default function page(){ 

    const {application_id} = useParams()
    const application=applications.find((application: any) => application.application_id == application_id)
    const company=companies.find((company: any) => company.company_id == application?.company_id)
    
    return(
       <PageWrapper>
           <div className='flex justify-between items-center '>
                <PageTitle title={`Application: ${company?.name}`}/> 
                <div>
                    
                    <Dialog>
                    <DialogTrigger>
                       <Button>Action</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Reject or Approve</DialogTitle>
                        <DialogDescription>
                            <ApplicationReviewForm/>
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                    </Dialog>

                </div>
           </div>
           <Card>
                <Tabs defaultValue="section_a" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="section_a">SECTION A</TabsTrigger>
                        <TabsTrigger value="section_b">SECTION B</TabsTrigger>
                        <TabsTrigger value="section_c">SECTION C</TabsTrigger>
                    </TabsList>
                    <TabsContent value="section_a">
                        <ApplicationField field="Type of Application" value={application?.application_type}/>
                        <ApplicationField field='Application Date' value={application?.submitted_date}/>
                    </TabsContent>
                    <TabsContent value="section_b">All the data of the section b form</TabsContent>
                    <TabsContent value="section_c">All the data of the section c form</TabsContent>
                </Tabs>
           </Card>
       </PageWrapper>
    )
}

function ApplicationField({field, value}:{field: string, value: string | undefined}){
    return(
        <div className='flex flex-col my-2 leading-none'>
            <h3 className='text-lg font-semibold'>{field}</h3>
            <p className='text-sm'>{value}</p>
        </div>
    )
}