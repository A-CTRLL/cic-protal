import AppLogo from '@/components/app-logo'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import LoginForm from './_components/log-in-form'
import AuthCard from './_components/auth-card'



function page() {
  return (
    <div className='h-screen flex items-center justify-center bg-cover bg-[url(https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]' >
        <AuthCard>
          <h1 className='font-bold text-md text-center my-4'>Login</h1>
          <LoginForm/>
        </AuthCard>
    </div>
  )
}

export default page