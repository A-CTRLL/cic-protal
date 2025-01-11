import React from 'react'
import {Card} from '@/components/ui/card'

function ContentCard({children}:{children: React.ReactNode}) {
  return (
    <Card className='drop-shadow-md flex flex-col items-start p-4'>
        {children}
    </Card>
  )
}

export default ContentCard