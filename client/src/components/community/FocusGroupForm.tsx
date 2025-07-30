import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { DOMPurify } from "@/lib/dom-purify";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TealButton } from "@/components/ui/button-variants";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must be less than 100 characters." })
    .trim()
    .toLowerCase(),
  familyStructure: z
    .string()
    .min(1, { message: "Please select a family structure." }),
  reason: z
    .string()
    .min(10, {
      message: "Please tell us a bit more about why you'd like to join.",
    })
    .max(1000, {
      message:
        "Your message is too long. Please keep it under 1000 characters.",
    })
    .trim(),
  csrfToken: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const FocusGroupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  // Generate a CSRF token when the component mounts
  useEffect(() => {
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);

    // Store the token in sessionStorage for verification
    sessionStorage.setItem("focus_group_csrf_token", token);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      familyStructure: "",
      reason: "",
      csrfToken: "",
    },
  });

  // Update the form with the CSRF token when it changes
  useEffect(() => {
    if (csrfToken) {
      form.setValue("csrfToken", csrfToken);
    }
  }, [csrfToken, form]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Verify CSRF token
    const storedToken = sessionStorage.getItem("focus_group_csrf_token");
    if (data.csrfToken !== storedToken) {
      toast({
        title: "Security Error",
        description:
          "Form submission failed due to security validation. Please refresh the page and try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Sanitize input data
      const sanitizedData = {
        name: DOMPurify.sanitize(data.name),
        email: DOMPurify.sanitize(data.email),
        family_structure: DOMPurify.sanitize(data.familyStructure),
        reason: DOMPurify.sanitize(data.reason),
        csrfToken: data.csrfToken,
        // Add Web3Forms access key directly
        access_key: "91706b95-f8a1-4d6d-b44f-5b4b878f70db",
        from_name: "Connected Circles Podcast Focus Group Signup",
      };

      // Submit directly to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Sign-up received!",
          description:
            "Thank you for your interest in our focus groups. We'll be in touch soon.",
        });

        form.reset();

        // Generate a new CSRF token after successful submission
        const newToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setCsrfToken(newToken);
        sessionStorage.setItem("focus_group_csrf_token", newToken);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md p-8">
      <h3 className="font-['Playfair_Display'] font-bold text-2xl mb-4">
        Focus Group Sign-Up
      </h3>
      <p className="text-[#8A8A8A] mb-6">
        Join our focus groups to provide deeper insights and help shape the
        direction of Family Function. We're looking for diverse family
        perspectives.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-[#333333] font-semibold mb-2">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7EADA3]"
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
                <FormLabel className="block text-[#333333] font-semibold mb-2">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7EADA3]"
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
                <FormLabel className="block text-[#333333] font-semibold mb-2">
                  Family Structure
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7EADA3]">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="single-parent">Single Parent</SelectItem>
                    <SelectItem value="two-parent">
                      Two-Parent Household
                    </SelectItem>
                    <SelectItem value="blended">Blended Family</SelectItem>
                    <SelectItem value="multigenerational">
                      Multigenerational Household
                    </SelectItem>
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
                <FormLabel className="block text-[#333333] font-semibold mb-2">
                  Why You'd Like to Join
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a bit about your interest..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7EADA3]"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <TealButton type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Interest"}
          </TealButton>
        </form>
      </Form>
    </div>
  );
};

export default FocusGroupForm;
