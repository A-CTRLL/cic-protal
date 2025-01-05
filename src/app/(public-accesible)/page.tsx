import AppLogo from '@/components/app-logo'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import LoginForm from './_components/log-in-form'
import AuthCard from './_components/auth-card'

function page() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
        <AuthCard>
          <LoginForm/>
        </AuthCard>
    </div>
  )
}

export default page