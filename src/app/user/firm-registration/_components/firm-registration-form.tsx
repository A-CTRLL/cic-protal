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
import LocationSelector from "@/components/ui/location-input"
import {
  CloudUpload,
  Paperclip
} from "lucide-react"
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem
} from "@/components/ui/file-upload"
// import {
//   MultiSelector,
//   MultiSelectorContent,
//   MultiSelectorInput,
//   MultiSelectorItem,
//   MultiSelectorList,
//   MultiSelectorTrigger
// } from "@/components/ui/multi-select"

const formSchema = z.object({
  typeOfApplication: z.string(),
  applicationDate: z.coerce.date().optional(),
  categoryOfWorks: z.unknown(),
  businessName: z.string(),
  tradingStyle: z.string().optional(),
  typeOfBusiness: z.string().optional(),
  customBusinessType: z.string().optional(),
  dateOfCompanyRegistration: z.coerce.date().optional(),
  placeOfRegistration: z.coerce.date().optional(),
  registrationNumber: z.string(),
  physicalInAddressinEswati: z.string().optional(),
  headOfOfficeAddress: z.string().optional(),
  postalAddress: z.number().optional(),
  businessNameTelNo: z.string().optional(),
  businessRepresentativeName: z.string().optional(),
  businessRepresentativePosition: z.string().optional(),
  businessRepresentativeNameCellNo: z.number().optional(),
  nameOfDirector: z.string().optional(),
  nationality: z.tuple([z.string(), z.string().optional()]),
  idPass: z.string(),
  countryOfRegistration: z.string().optional(),
  cellphoneNo: z.string().optional(),
  finacialStatementsYearOneTurnOver: z.string(),
  finacialStatementsYearTwo: z.string(),
  finacialStatementsYearThreeTurnOver: z.string(),
  finacialStatementsYearThree: z.string(),
  financialValueOfSurety: z.number().optional(),
  financialInstitutions: z.number(),
  financialSponsor: z.string().optional(),
  bankName: z.string(),
  branchCode: z.string().optional(),
  accountHolderName: z.string(),
  accountNumber: z.string(),
  accountType: z.string(),
  projectLocation: z.string(),
  completionDate: z.coerce.date(),
  contractSum: z.number(),
  clientName: z.string(),
  clientTel: z.string(),
  typeOfInvolvement: z.string().optional(),
  letterOfAward: z.string(),
  certicateOfCompletion: z.string(),
  finalPaymentCertificate: z.string(),
  jointVentureAgreement: z.string().optional(),
  subContractAgreement: z.string().optional()
});

export default function FirmRegistrationForm() {

  const [countryName, setCountryName] = useState < string > ('')
  const [stateName, setStateName] = useState < string > ('')

  const [files, setFiles] = useState < File[] | null > (null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      
      "applicationDate": new Date(),
      "dateOfCompanyRegistration": new Date(),
      "placeOfRegistration": new Date(),
      "completionDate": new Date()
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        
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
      name="applicationDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Application Date</FormLabel>
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
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="categoryOfWorks"
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
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="categoryOfWorks"
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
          name="categoryOfWorks"
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
          
          <div className="col-span-6">
            <FormField
          control={form.control}
          name="categoryOfWorks"
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
        
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
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
          name="tradingStyle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trading Style</FormLabel>
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
          name="typeOfBusiness"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Business</FormLabel>
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
          name="customBusinessType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please Specify</FormLabel>
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
      name="dateOfCompanyRegistration"
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
      name="placeOfRegistration"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Place of Registration of Company</FormLabel>
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
          name="registrationNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Registration Number</FormLabel>
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
        
        <FormField
          control={form.control}
          name="headOfOfficeAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Head of Office Physical Address</FormLabel>
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
          name="postalAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postal Address</FormLabel>
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
          name="businessNameTelNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone No</FormLabel>
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
          name="businessRepresentativeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Representative Name</FormLabel>
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
          name="businessRepresentativePosition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Representative Position</FormLabel>
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
          name="businessRepresentativeNameCellNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Representative Cell No</FormLabel>
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
          name="nameOfDirector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Director</FormLabel>
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
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                  <LocationSelector
                    onCountryChange={(country: any) => {
                      setCountryName(country?.name || '')
                      form.setValue(field.name, [country?.name || '', stateName || ''])
                    }}
                    onStateChange={(state: any) => {
                      setStateName(state?.name || '')
                      form.setValue(field.name, [form.getValues(field.name)[0] || '', state?.name || ''])
                    }}
                  />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="idPass"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID/Passport</FormLabel>
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
          name="countryOfRegistration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country Of Registration</FormLabel>
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
          name="cellphoneNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cellphone No</FormLabel>
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
        
        {/* <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>% Shares</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="number"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        /> */}
        
        <FormField
          control={form.control}
          name="finacialStatementsYearOneTurnOver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Turnover - Financial Year 1 end Total Turnover</FormLabel>
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
              name="finacialStatementsYearOneTurnOver"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Financial Statements - Year 1 end Total Turnover</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="finacialStatementsYearOneTurnOver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Turnover - Financial Year 2 end Total Turnover</FormLabel>
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
              name="finacialStatementsYearTwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Financial Statements - Year 2 end Total Turnover</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="finacialStatementsYearThreeTurnOver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Turnover - Financial Year 3 end Total Turnover</FormLabel>
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
              name="finacialStatementsYearThree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Financial Statements - Year 3 end Total Turnover</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="financialValueOfSurety"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Financial value of surety if any</FormLabel>
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
        
           {/* <FormField
              control={form.control}
              name="financialInstitutions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Indicate the name of the financial Institution(s)</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                      className="max-w-xs"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select languages" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
                        <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                        <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
                      </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            /> */}
        
        {/* <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available Capital (E)</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="number"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        /> */}
        
            <FormField
              control={form.control}
              name="financialSponsor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proof of Financial Sponsorship</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  <FormDescription>NB: Application will be deemed non-complaint if financial statements are not  compiled by a qualified accounting office or auditing firm,</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="bankName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Name</FormLabel>
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
          name="branchCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Branch Code</FormLabel>
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
          name="accountHolderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Holder Name</FormLabel>
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
          name="accountNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Number</FormLabel>
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
          name="accountType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Type</FormLabel>
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
          name="projectLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
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
      name="completionDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Completion Date</FormLabel>
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
          name="contractSum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract Sum</FormLabel>
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
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Name</FormLabel>
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
          name="clientTel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Telephone No</FormLabel>
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
          name="typeOfInvolvement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of involvement (e.g main contractor, sub-contractor) and total percentage value of shares of the contract if applicable</FormLabel>
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
              name="letterOfAward"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach copies of Letter of Award</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
            <FormField
              control={form.control}
              name="certicateOfCompletion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach copies of Certificates of Completion</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
            <FormField
              control={form.control}
              name="finalPaymentCertificate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach copies of Final Payment Certificates</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
            <FormField
              control={form.control}
              name="jointVentureAgreement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach copies of Joint Venture Agreement (If Applicable)</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
        
            <FormField
              control={form.control}
              name="subContractAgreement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attach a Sub Contract Agreement (if applicable)</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
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