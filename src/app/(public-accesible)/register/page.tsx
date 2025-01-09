import AppLogo from '@/components/app-logo'

import React from 'react'
import AuthCard from '../_components/auth-card'
import RegisterForm from '../_components/register-form'



function page() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
        <AuthCard>
          <h1 className='font-bold text-md text-center my-4'>Forgot Password</h1>
          <RegisterForm/>
        </AuthCard>
    </div>
  )
}

export default page