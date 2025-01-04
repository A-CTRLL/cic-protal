import React from 'react'

function PageTitle({title}:{title: string}) {
  return (
    <h1 className='text-4xl py-4 font-bold text-center'>{title}</h1>
  )
}

export default PageTitle