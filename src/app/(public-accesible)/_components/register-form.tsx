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
import { Switch } from "@/components/ui/switch"

const cicEmailRegex = /^[a-zA-Z0-9._%+-]+@cic\.co\.sz$/;


const formSchema = z.object({
  email: z.string(),
  name:z.string(),
  is_company_representative:z.boolean(),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
}).superRefine((data, ctx) => {

  // Company representatives must use company email
  if (data.is_company_representative && !cicEmailRegex.test(data.email)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Company representatives must use a @cic.co.sz email address",
      path: ["email"],
    });
  }
  
  // Company email holders must register as representatives
  if (cicEmailRegex.test(data.email) && !data.is_company_representative) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Company email detected. Please register as a company representative instead.",
      path: ["email"],
    });
  }
});

export default function RegisterForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      is_company_representative: false
    }

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
        name: values.name,
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
      if(values.is_company_representative){
        router.push('/back-office')
      }else(
        router.push('/user')
      );
  
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
        
        
        {/* <FormField
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
        /> */}

        <FormField
              control={form.control}
              name="is_company_representative"
              render={({ field }) => (
                <FormItem className="flex flex-row mt-2 items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>Are you a CIC staff representative?</FormLabel>
                    <FormDescription className="text-xs">Please note you will need email provided by CIC to register as CIC user.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
        
        
        <Button className="mt-4 w-full" type="submit">Register Account</Button>
      </form>
    </Form>
  )
}