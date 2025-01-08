"use client"
import {
  useState
} from "react"
// import {
//   toast
// } from "sonner"
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
//   Input type='password'
// } from "@/components/ui/password-input"
import { useAtom,atom } from 'jotai'
import { useRouter } from "next/navigation"

const formSchema = z.object({
  username: z.string(),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // path of error
});

export default function RegisterForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  const router=useRouter()

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      const users=localStorage.getItem('users')
      console.log('USers:',users)
      router.push("/user/firm-registration");
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type=""
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        <Button className="mt-4" type="submit">Submit</Button>
      </form>
    </Form>
  )
}