import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function ManageProfileAvatar({avator}:any) {
  return (
    <div className='flex  items-center gap-2 '>
      <Avatar>
        <AvatarImage src={avator.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col gap-0'>
          <p className='text-sm'>{avator.email}</p>
          <p className='text-lg font-bold'>CCG Systems</p>
      </div>

    </div>
  )
}

export default ManageProfileAvatar