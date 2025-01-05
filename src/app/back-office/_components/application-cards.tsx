import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
  

function ApplicationCard() {
  return (
        <Card>
            <div className='flex justify-between items-center pr-5'>
            <div>
            <CardHeader>
                <CardTitle>Company Name</CardTitle>
                <CardDescription>Type of Application: Full Time</CardDescription>
                </CardHeader>
                {/* <CardContent>
                    <p>Card Content</p>
                </CardContent> */}
                <CardFooter>
                    <p>Date of Application: 2025/01/05</p>
                </CardFooter>
            </div>
            <Button>View</Button>
            </div>
        </Card>

  )
}

export default ApplicationCard