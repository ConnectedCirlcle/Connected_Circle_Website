import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OliveButton } from '@/components/ui/button-variants';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  familyStructure: z.string().min(1, { message: 'Please select a family structure.' }),
  reason: z.string().min(10, { message: "Please tell us a bit more about why you'd like to join." }),
});

type FormValues = z.infer<typeof formSchema>;

const FocusGroupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      familyStructure: '',
      reason: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/focus-group-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      toast({
        title: "Sign-up received!",
        description: "Thank you for your interest in our focus groups. We'll be in touch soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md p-8">
      <h3 className="font-['Playfair_Display'] font-bold text-2xl mb-4">Focus Group Sign-Up</h3>
      <p className="text-[#8A8A8A] mb-6">
        Join our focus groups to provide deeper insights and help shape the direction of Heart & Household. 
        We're looking for diverse family perspectives.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-[#333333] font-semibold mb-2">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your full name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2593C]" 
                    {...field} 
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
                <FormLabel className="block text-[#333333] font-semibold mb-2">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2593C]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="familyStructure"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-[#333333] font-semibold mb-2">Family Structure</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2593C]">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="single-parent">Single Parent</SelectItem>
                    <SelectItem value="two-parent">Two-Parent Household</SelectItem>
                    <SelectItem value="blended">Blended Family</SelectItem>
                    <SelectItem value="multigenerational">Multigenerational Household</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-[#333333] font-semibold mb-2">Why You'd Like to Join</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us a bit about your interest..." 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2593C]" 
                    rows={3}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <OliveButton 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Interest'}
          </OliveButton>
        </form>
      </Form>
    </div>
  );
};

export default FocusGroupForm;
