"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
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
import {useRouter} from "next/navigation"


const formSchema = z.object({
  email: z.string(),
  password: z.string()
});

export default function LoginForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  const router=useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Validate form data
      const validatedData = formSchema.parse(values);
      
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user with matching email
      const user = users.find((user: { email: string }) => 
        user.email.toLowerCase() === validatedData.email.toLowerCase()
      );
  
      // Check if user exists and password matches
      if (!user) {
        toast.error("No account found with this email");
        return;
      }
  
      if (user.password !== validatedData.password) {
        toast.error("Invalid password");
        return;
      }
  
      // Store user session (don't include password in session)
      const session = {
        id: user.id,
        email: user.email,
        username: user.username,
        lastLogin: new Date().toISOString()
      };
      
      localStorage.setItem('session', JSON.stringify(session));
  
      // Show success message
      toast.success("Login successful!");
  
      // Reset form
      form.reset();
  
      // Update last login time in users collection
      const updatedUsers = users.map((u: { id: number }) => 
        u.id === user.id 
          ? { ...u, lastLogin: new Date().toISOString() }
          : u
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
  
      // Redirect to dashboard based on user type
      if(user.is_company_representative){
        router.push("/back-office");
      }else{
        router.push("/user");
      }
  
    } catch (error) {
      console.error("Login error:", error);
      
      if (error instanceof z.ZodError) {
        toast.error("Please check your input and try again");
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-2">
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
               
                
                type="email"
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
        
        <div className="grid grid-cols-1 gap-2 mt-2">
            <Button type="submit">Login</Button>
            <Button type="button">
              <Link href="/register">
                  Register
              </Link>
            </Button>
        </div>
      </form>
    </Form>
  )
}