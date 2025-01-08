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
  toast
} from "sonner"
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
  email: z.string(),
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      const existingUser = users.find((user: { email: string }) => 
        user.email.toLowerCase() === values.email.toLowerCase()
      );
  
      if (existingUser) {
        toast.error("Email already registered");
        return;
      }
  
      // Create new user object with additional fields
      const newUser = {
        id: Date.now(),
        email: values.email.toLowerCase(),
        
        password: values.password, 
        createdAt: new Date().toISOString()
      };
  
      // Add new user to the array
      const updatedUsers = [...users, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
  
      // Show success message
      toast.success("Registration successful!");
  
      // Optional: Reset form
      form.reset();
  
      // Redirect after successful registration
      await router.push("/user/firm-registration");
  
    } catch (error) {
      console.error("Form submission error:", error);
      
      // More specific error messages based on error type
      if (error instanceof SyntaxError) {
        toast.error("Invalid data format. Please try again.");
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        
        <FormField
          control={form.control}
          name="email"
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