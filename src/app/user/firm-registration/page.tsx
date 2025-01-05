"use client"

import PageTitle from '@/components/page-title'
import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import { useState } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

const formSchema = z.object({
  fromDate: z.coerce.date(),
  toDate: z.coerce.date(),
  applicationType: z.string(),
  dob: z.coerce.date()
});

type FormFieldName = "fromDate" | "toDate" | "applicationType" | "dob";

interface DatePickerFieldProps {
  name: FormFieldName;
  label: string;
}

export default function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fromDate: new Date(),
      toDate: new Date(),
      applicationType: "",
      dob: new Date()
    },
  })

  function onSubmit(values: any) {
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

  const DatePickerField: React.FC<DatePickerFieldProps> = ({ name, label }) => {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
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
                  selected={field.value instanceof Date ? field.value : undefined}
                  onSelect={(date) => field.onChange(date || new Date())}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <PageWrapper>
      <PageTitle title='Construction Firm Registration Form'/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <DatePickerField name="fromDate" label="From" />
            </div>
            <div className="col-span-6">
              <DatePickerField name="toDate" label="To" />
            </div>
          </div>

          <FormField
            control={form.control}
            name="applicationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type Of Application</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type of application" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="renewal">Renewal</SelectItem>
                    <SelectItem value="update">Update</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <DatePickerField name="dob" label="Date of Birth" />

          {/* <Button type="submit">Submit</Button> */} 
        </form>
      </Form>
    </PageWrapper>
  )
}
