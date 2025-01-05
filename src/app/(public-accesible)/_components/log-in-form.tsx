"use client"
import {
  useState
} from "react"

import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
// import {
//   PasswordInput
// } from "@/components/ui/password-input"
import Link from "next/link"


const formSchema = z.object({
  username: z.string(),
  password: z.string()
});

export default function LoginForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
    //   toast(
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   );
    } catch (error) {
      console.error("Form submission error", error);
    //   toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
               
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                <span>Password</span>
                <Link href="/forgot-password">Forgot Password?</Link>
              </FormLabel>
              <FormControl>
                {/* <PasswordInput placeholder="Placeholder" {...field} /> */}
                <Input type='password' {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-between">
            <Button type="submit">Login</Button>
            <Link href="/register">
                <Button >Register</Button>
            </Link>
        </div>
      </form>
    </Form>
  )
}