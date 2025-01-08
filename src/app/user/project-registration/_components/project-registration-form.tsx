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
  Textarea
} from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import SuccessAlert from "@/components/success-alert"

const formSchema = z.object({
  projectName: z.string(),
  projectDescription: z.string(),
  status: z.string(),
  levyAmount: z.string()
});

export default function ProjectRegistrationForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  //get value for submission date 
  const presentDate=new Date();
  const timeStamp = presentDate.toISOString().split('T')[0];

  //generate project code
  function projectCodeGenerator(){
    const projectCode = `PRJ${Math.floor(Math.random() * 1000)}`;
    return projectCode;
  }

  //get current user id
  // const userId: any ;

  const [projectData, setProjectData] = useState({
    id: '',
    submissionDate: timeStamp,
    submittedBy: 'userId',
    applicationApprovedBy:'' ,
    projectCode: projectCodeGenerator(),
   

  });

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log({...values,...projectData});
      if(!localStorage.getItem('projects')){
        localStorage.setItem('projects', JSON.stringify([{...values,...projectData}]));
      }else{
        const projects = JSON.parse(localStorage.getItem('projects')!);
        localStorage.setItem('projects', JSON.stringify([...projects,{...values,...projectData}]));
        console.log('Projects exists',projects);
     
      }

      // localStorage.setItem('projects', JSON.stringify({...values,...projectData}));

      toast(
        <SuccessAlert title="Success" description="Project Submitted"/>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
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
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Placeholder"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Ongoing" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ongoing">On Going</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="levyAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Levy Amount</FormLabel>
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
        <Button className="mt-4" type="submit">Register Project</Button>
      </form>
    </Form>
  )
}