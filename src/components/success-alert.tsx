import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FaRegCheckCircle } from "react-icons/fa";

function SuccessAlert({title, description}: {title: string, description: string}) {
  return (
    <Alert className='bg-green-200 flex gap-1 items-center'>
      <span className='text-green-600'><FaRegCheckCircle/></span>
      <div className='flex flex-col gap-0'>
        <AlertTitle className='text-md'>{title}</AlertTitle>
        <AlertDescription className='text-sm'>{description}</AlertDescription>
      </div>
    </Alert>
  )
}

export default SuccessAlert