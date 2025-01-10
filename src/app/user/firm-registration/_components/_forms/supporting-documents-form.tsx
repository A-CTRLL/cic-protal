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

export default function SupportingDocumentsForm() {

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
        
        
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
