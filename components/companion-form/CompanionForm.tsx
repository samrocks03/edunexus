'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/components/companion-form/schema'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";


const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      topic: '',
      duration: 15,
      style: '',
      voice: ''
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter the companion name' className='input' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="input capitalize">
                          <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>

                      <SelectContent>
                          {subjects.map((subject) => (
                              <SelectItem value={subject} key={subject} className={'capitalize'}>{subject}</SelectItem>
                          ))}
                          {/*<SelectItem value="light">Light</SelectItem>*/}
                          {/*<SelectItem value="dark">Dark</SelectItem>*/}
                          {/*<SelectItem value="system">System</SelectItem>*/}
                      </SelectContent>
                  </Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='topic'
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with ?</FormLabel>
              <FormControl>
                <Textarea placeholder='Ex. Derivatives & Integrals' className='input' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
              control={form.control}
              name='voice'
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Voice</FormLabel>
                      <FormControl>
                          <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger className="input capitalize">
                                  <SelectValue placeholder="Select the voice" />
                              </SelectTrigger>

                              <SelectContent>
                                  <SelectItem value={'male'} className={'capitalize'}>Male</SelectItem>
                                  <SelectItem value={'female'} className={'capitalize'}>Female</SelectItem>
                              </SelectContent>
                          </Select>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
          />

          <FormField
              control={form.control}
              name='style'
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Style</FormLabel>
                      <FormControl>
                          <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger className="input capitalize">
                                  <SelectValue placeholder="Select the style" />
                              </SelectTrigger>

                              <SelectContent>
                                  <SelectItem value={'formal'} className={'capitalize'}>Formal</SelectItem>
                                  <SelectItem value={'casual'} className={'capitalize'}>Casual</SelectItem>
                              </SelectContent>
                          </Select>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
          />


          <FormField
          control={form.control}
          name='duration'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input type={'number'} placeholder='15 ' className='input' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className={'btn-primary w-full cursor-pointer'}>Build your companion</Button>
      </form>
    </Form>
  )
}
export default CompanionForm
