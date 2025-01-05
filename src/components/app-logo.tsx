import React from 'react'
import Image from 'next/image'

function AppLogo() {
  return (
    <div className='text-4xl font-bold uppercase text-black dark:text-white flex items-center justify-center gap-1'>
       <Image src="https://www.cic.co.sz/logo/cic.jpg" alt="Next.js Logo" width={150} height={150} />
    </div>
  )
}

export default AppLogo