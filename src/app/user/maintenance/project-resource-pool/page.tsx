import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import BusinessDetailsForm from '../_components/business-details-form'
import ContentCard from '@/components/content-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from '@/components/ui/button'
import AddDirectorForm from '../_components/add-director-form'
import { ScrollArea } from "@/components/ui/scroll-area"

// import SupportingDocumentsForm from './_components/_forms/supporting-documents-form'
// import TrackignRecordsForm from './_components/_forms/tracking-records-form'




function page() {
  return (
    <PageWrapper>
      <div className='flex justify-between items-center'>
         <PageTitle title='Project Resource Pool'/>
         <Button>Submit Application</Button>
      </div>
      <ContentCard>
      <Tabs defaultValue="business_details" className="w-full">
        <TabsList>
          <TabsTrigger value="business_details">CONTRACTORS</TabsTrigger>
          <TabsTrigger value="shareholders_directors">SUPPLIERS</TabsTrigger>
          <TabsTrigger value="financial_capability">CONSULTANCY FIRMS</TabsTrigger>
          <TabsTrigger value="supporting_docs">SUBCONTRACTORS</TabsTrigger>
          <TabsTrigger value="track_records">TRACK RECORD</TabsTrigger>
          {/* <TabsTrigger value="password">Financial Capability</TabsTrigger> */}
        </TabsList>
        <TabsContent value="business_details">
          <BusinessDetailsForm/>
        </TabsContent>
        <TabsContent value="shareholders_directors">
           
           
        </TabsContent>
        <TabsContent value="financial_capability">
        <div className='flex justify-between'>
              <form>
                <Input type='text'/>
              </form>
              <Dialog>
                <DialogTrigger>
                  <Button>Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit financial_capability</DialogTitle>
                    <DialogDescription>
                     Financial
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
           </div>
        </TabsContent>
        <TabsContent value="supporting_docs">
        {/* <SupportingDocumentsForm/> */}
        </TabsContent>
      
        <TabsContent value="track_records">
        {/* <TrackignRecordsForm/> */}
        </TabsContent>
      </Tabs>
      
      </ContentCard>
    </PageWrapper>
  )
}

export default page



function ShareholdersDirectors(){
  return(
    <div className='flex justify-between'>
              <form>
                <Input type='text'/>
              </form>
              <Dialog>
                <DialogTrigger>
                  <Button>Add Director</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Director</DialogTitle>
                    <DialogDescription>
                     <ScrollArea className="h-72">
                     <AddDirectorForm/>
                     </ScrollArea>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
           </div>
  )
}