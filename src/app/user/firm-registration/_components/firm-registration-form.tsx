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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
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
import {
  Checkbox
} from "@/components/ui/checkbox"
import {
  Input
} from "@/components/ui/input"
import {
  CloudUpload,
  Paperclip
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const formSchema = z.object({
  typeOfApplication: z.string(),
  dateOfApplication: z.coerce.date(),
  generalBuildings: z.boolean().default(true).optional(),
  generalElectrical: z.boolean().default(true).optional(),
  generalMechanical: z.unknown(),
  generalCivils: z.boolean().default(true).optional(),
  businessName: z.string(),
  tradingStyle: z.string(),
  typeOfBusiness: z.string(),
  specifyBusiness: z.string(),
  companyRegistrationDate: z.coerce.date(),
  physicalInAddressinEswati: z.string(),
  finacialStatementsYearOneTurnOver: z.string(),
  finacialStatementsYearOne: z.string(),
  finacialStatementsYearTwoTurnOver: z.string(),
  finacialStatementsYearTwo: z.string()
});

export default function MyForm() {

  const [files, setFiles] = useState < File[] | null > (null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "dateOfApplication": new Date(),
      "companyRegistrationDate": new Date()
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
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Tabs defaultValue="sectionA" className="w-full">
      <TabsList>
        <TabsTrigger value="sectionA">Section A</TabsTrigger>
        <TabsTrigger value="sectionB">Section B</TabsTrigger>
        <TabsTrigger value="sectionC">Section C</TabsTrigger>
        <TabsTrigger value="sectionD">Section D</TabsTrigger>
      </TabsList>
      <TabsContent value="sectionA">
        <FormField
          control={form.control}
          name="typeOfApplication"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Application</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
        
      <FormField
      control={form.control}
      name="dateOfApplication"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date of Application</FormLabel>
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
        </TabsContent>

        <TabsContent value="sectionB">
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="generalBuildings"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>General Buildings</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="generalElectrical"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>General Electrical</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="generalMechanical"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                //   checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>General Mechanical</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="generalCivils"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>General Civils</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
        </div>
        </TabsContent>
        
        <TabsContent value='sectionC'>
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Names</FormLabel>
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
          name="tradingStyle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trading Style</FormLabel>
              <FormControl>
                <Input 
                placeholder="shadcn"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="typeOfBusiness"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type Of Business</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="specifyBusiness"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please Specify</FormLabel>
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
      name="companyRegistrationDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date of Registration of Company</FormLabel>
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
          name="physicalInAddressinEswati"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Physical  Address in Eswatini</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

       </TabsContent >
        
        <TabsContent value='sectionD'>
        <FormField
          control={form.control}
          name="finacialStatementsYearOneTurnOver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Turnover - Financial Year 1 end Total Turnover</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
            <FormField
              control={form.control}
              name="finacialStatementsYearOne"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Financial Statements - Year 1 end Total Turnover</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="finacialStatementsYearTwoTurnOver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Turnover - Financial Year 2 end Total Turnover</FormLabel>
              <FormControl>
                <Input 
                placeholder="shadcn"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
            <FormField
              control={form.control}
              name="finacialStatementsYearTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Annual Turnover - Financial Year 2 end Total Turnover</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormDescription>Select a file to upload.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            </TabsContent>
        
        </Tabs>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}