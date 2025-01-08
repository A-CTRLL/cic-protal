import AppLogo from '@/components/app-logo'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import ForgotPassword from './_components/forgot-password'
import AuthCard from '../_components/auth-card'



function page() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
        <AuthCard>
          <h1>Forgot Password</h1>
          <ForgotPassword/>
        </AuthCard>
    </div>
  )
}

export default page