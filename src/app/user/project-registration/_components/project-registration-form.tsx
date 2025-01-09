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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {PhoneInput} from "@/components/ui/phone-input"
import {
  Checkbox
} from "@/components/ui/checkbox"
import {

  Textarea
} from "@/components/ui/textarea"
import LocationSelector from "@/components/ui/location-input"
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

const formSchema = z.object({
  title: z.string(),
  designation: z.string(),
  FirstName: z.string(),
  surname: z.string(),
  PhoneNo: z.string(),
  telNo: z.string(),
  name: z.string(),
  IdNo: z.string().min(1).max(13),
  PassportNo: z.number().min(1).max(13),
  PostalAddress: z.string(),
  PhysicalAddress: z.string(),
  TelephoneNo: z.string(),
  EmailAddress: z.string(),
  CentralGovernment: z.boolean().default(true).optional(),
  LocalGovernment: z.boolean().default(true).optional(),
  ParastatalAgency: z.boolean().default(true).optional(),
  Ngo: z.boolean().default(true).optional(),
  private: z.boolean().default(true).optional(),
  other: z.boolean().default(true).optional(),
  GeneralBuildings: z.boolean().default(true).optional(),
  GeneralElectrical: z.boolean().default(true).optional(),
  GeneralMechanical: z.boolean().default(true).optional(),
  GeneralCivils: z.boolean().default(true).optional(),
  BuildingsSpecialistWroks: z.boolean().default(true).optional(),
  CivilsSpecialistWorks: z.boolean().default(true).optional(),
  MechanicalSpecialistWorks: z.boolean().default(true).optional(),
  ProjectManager: z.string().optional(),
  NameOfConsultancyFirm: z.string().optional(),
  Country: z.tuple([z.string(), z.string().optional()]).optional(),
  ContactDetails: z.string().optional(),
  CicRegistrationNo: z.string().optional(),
  Architect: z.string().optional(),
  ConsultancyFirm: z.string().optional(),
  NameOfSubContractor: z.string().optional(),
  country: z.tuple([z.string(), z.string().optional()]),
  ScopeOfWork: z.string().optional(),
  name_3212952283: z.string(),
  NameofSupplier: z.string().optional(),
  name_2629970594: z.string().optional(),
  ProjectType: z.string().optional(),
  BidReference: z.string().optional(),
  ProjectLocation: z.string().optional(),
  Town: z.string().optional(),
  Region: z.string().optional(),
  GpsCoOrdinates: z.string().optional(),
  DateOfAward: z.coerce.date().optional(),
  BriefDescriptionOfProject: z.string().optional(),
  ProposedCommencementDate: z.string().optional(),
  ProposedCompletionDate: z.string().optional(),
  PaymentOption: z.string().optional()
});

export default function MyForm() {

  const [countryName, setCountryName] = useState < string > ('')
  const [stateName, setStateName] = useState < string > ('')

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "DateOfAward": new Date()
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
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
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Designation</FormLabel>
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
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
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
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
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
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="PhoneNo"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Phone No.</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder=""
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="telNo"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Tel No.</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder=""
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
        </div>
        
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
          name="IdNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID No.(if Swazi Individual)</FormLabel>
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
          name="PassportNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport No.(if non-Swazi Individual)</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="number"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="PostalAddress"
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
          name="PhysicalAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Physical Address</FormLabel>
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
          name="TelephoneNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone No.</FormLabel>
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
          name="EmailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
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
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="CentralGovernment"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Central Government</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="LocalGovernment"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Local Government</FormLabel>
                
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
          name="ParastatalAgency"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Parastatal/Government Agency</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="Ngo"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>NGO/Social Organization/Church</FormLabel>
                
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
          name="private"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Private</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="other"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Other</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-4">
            <FormField
          control={form.control}
          name="GeneralBuildings"
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
          
          <div className="col-span-4">
            <FormField
          control={form.control}
          name="GeneralElectrical"
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
          
          <div className="col-span-4">
            <FormField
          control={form.control}
          name="GeneralMechanical"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
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
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-4">
            <FormField
          control={form.control}
          name="GeneralCivils"
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
          
          <div className="col-span-4">
            <FormField
          control={form.control}
          name="BuildingsSpecialistWroks"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Buildings Specialist Works</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-4">
            <FormField
          control={form.control}
          name="CivilsSpecialistWorks"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Civils Specialist Works</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
          </div>
          
        </div>
        <FormField
          control={form.control}
          name="MechanicalSpecialistWorks"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Mechanical Specialist Works</FormLabel>
                
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="ProjectManager"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Project Manager"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="NameOfConsultancyFirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Consultancy Firm</FormLabel>
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
          </div>
          
          <div className="col-span-6">
            
           <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Country</FormLabel>
                  <FormControl>
                  <LocationSelector
                    onCountryChange={(country) => {
                      setCountryName(country?.name || '')
                      form.setValue(field.name, [country?.name || '', stateName || ''])
                    }}
                    onStateChange={(state) => {
                      setStateName(state?.name || '')
                      form.setValue(field.name, [form.getValues(field.name)[0] || '', state?.name || ''])
                    }}
                  />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="ContactDetails"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Contact Details</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder=""
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="CicRegistrationNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CIC Registration No.</FormLabel>
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
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="Architect"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Architect"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="NameOfConsultancyFirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Consultancy Firm</FormLabel>
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
          </div>
          
          <div className="col-span-6">
            
           <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Country</FormLabel>
                  <FormControl>
                  <LocationSelector
                    onCountryChange={(country) => {
                      setCountryName(country?.name || '')
                      form.setValue(field.name, [country?.name || '', stateName || ''])
                    }}
                    onStateChange={(state) => {
                      setStateName(state?.name || '')
                      form.setValue(field.name, [form.getValues(field.name)[0] || '', state?.name || ''])
                    }}
                  />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="ContactDetails"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Contact Details</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder=""
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="CicRegistrationNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CIC Registration No.</FormLabel>
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
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="NameOfSubContractor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Sub-Contractor</FormLabel>
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
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
           <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Country</FormLabel>
                  <FormControl>
                  <LocationSelector
                    onCountryChange={(country) => {
                      setCountryName(country?.name || '')
                      form.setValue(field.name, [country?.name || '', stateName || ''])
                    }}
                    onStateChange={(state) => {
                      setStateName(state?.name || '')
                      form.setValue(field.name, [form.getValues(field.name)[0] || '', state?.name || ''])
                    }}
                  />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="ScopeOfWork"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scope of Work</FormLabel>
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
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="name_3212952283"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Placeholder"
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="CicRegistrationNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CIC Registration No.</FormLabel>
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
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-4">
            
        <FormField
          control={form.control}
          name="NameofSupplier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Supplier</FormLabel>
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
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
           <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Country</FormLabel>
                  <FormControl>
                  <LocationSelector
                    onCountryChange={(country) => {
                      setCountryName(country?.name || '')
                      form.setValue(field.name, [country?.name || '', stateName || ''])
                    }}
                    onStateChange={(state) => {
                      setStateName(state?.name || '')
                      form.setValue(field.name, [form.getValues(field.name)[0] || '', state?.name || ''])
                    }}
                  />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="ScopeOfWork"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scope of Work</FormLabel>
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
          </div>
          
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="name_2629970594"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Placeholder"
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="CicRegistrationNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CIC Registration No.</FormLabel>
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
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="ProjectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>
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
          name="BidReference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bid Reference</FormLabel>
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
          name="ProjectLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Location</FormLabel>
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
          name="Town"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Town/Inkhundla</FormLabel>
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
          name="Region"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Region</FormLabel>
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
          name="GpsCoOrdinates"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GPS Co-Ordinates</FormLabel>
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
      name="DateOfAward"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date of Award</FormLabel>
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
          name="BriefDescriptionOfProject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Description of Project</FormLabel>
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
          name="ProposedCommencementDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proposed Commencement Date</FormLabel>
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
          name="ProposedCompletionDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proposed Completion Date</FormLabel>
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
          name="PaymentOption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Option</FormLabel>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}