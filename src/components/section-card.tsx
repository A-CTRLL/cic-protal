import React from 'react'
import {Card, CardContent, CardTitle, CardDescription, CardFooter} from '@/components/ui/card'

function SectionCard({children}:{children: React.ReactNode}) {
  return (
   <Card>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardContent>
        {children}
    </CardContent>
    <CardFooter>Card Footer</CardFooter>
   </Card>
  )
}

export default SectionCard