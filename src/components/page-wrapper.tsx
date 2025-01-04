import React from 'react'

function PageWrapper({children}:{children: React.ReactNode}) {
  return (
    <div className='p-4 w-full flex flex-col'>
        {children}
    </div>
  )
}

export default PageWrapper