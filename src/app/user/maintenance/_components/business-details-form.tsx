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
import {
  format
} from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  Calendar
} from "@/components/ui/calendar"
import {
  Calendar as CalendarIcon
} from "lucide-react"
import {MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger} from "@/components/ui/multi-select"
import {
  PhoneInput
} from "@/components/ui/phone-input";

const formSchema = z.object({
  name: z.string(),
  trading_style: z.string(),
  authorized_officer_name: z.string(),
  registration_number: z.string(),
  date_of_registration: z.coerce.date(),
  place_of_registration: z.string(),
  category_of_works: z.array(z.string()),
  physical_address: z.string(),
  postal_address: z.string(),
  contact_number: z.string(),
  email: z.string(),
  association_name: z.string().optional()
});

export default function BusinessDetailsForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "category_of_works": [],
      "date_of_registration": new Date()
    },
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
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
          name="trading_style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trading Style</FormLabel>
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
          name="authorized_officer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Authorized Office Name</FormLabel>
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
          name="registration_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration Number</FormLabel>
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
      name="date_of_registration"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date of Business Registration</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
       
          <FormMessage />
        </FormItem>
      )}
    />
        
        <FormField
          control={form.control}
          name="place_of_registration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Place of Registration of Company</FormLabel>
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
              name="category_of_works"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Of  Works</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                      className="max-w-xs"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select Categories of Works" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"General Mechanical"}>General Mechanical</MultiSelectorItem>
                        <MultiSelectorItem value={"General Electrical"}>General Electrical</MultiSelectorItem>
                        <MultiSelectorItem value={"General Civils"}>General Civils</MultiSelectorItem>
                        <MultiSelectorItem value={"General Buildings"}>General Buildings</MultiSelectorItem>
                      </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="physical_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Physical  Address </FormLabel>
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
          name="postal_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postal Address</FormLabel>
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
            name="contact_number"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Contact Number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder=""
                    {...field}
                    defaultCountry="SZ"
                  />
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
                
                type="email"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="association_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Association Name</FormLabel>
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
          name="authorized_officer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Authorized Officer Name</FormLabel>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}