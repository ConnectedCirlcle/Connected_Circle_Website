import { useState, useEffect } from "react";
import { DOMPurify } from "@/lib/dom-purify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
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
import { PrimaryButton } from "@/components/ui/button-variants";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  // Generate a CSRF token when the component mounts
  useEffect(() => {
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);

    // Store the token in sessionStorage for verification
    sessionStorage.setItem("contact_csrf_token", token);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Verify CSRF token
    const storedToken = sessionStorage.getItem("contact_csrf_token");
    if (csrfToken !== storedToken) {
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
        subject: DOMPurify.sanitize(data.subject),
        message: DOMPurify.sanitize(data.message),
        // Add Web3Forms access key directly
        access_key: "91706b95-f8a1-4d6d-b44f-5b4b878f70db",
        from_name: "Connected Circles Podcast Contact Form",
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
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });

        form.reset();

        // Generate a new CSRF token after successful submission
        const newToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setCsrfToken(newToken);
        sessionStorage.setItem("contact_csrf_token", newToken);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Circular accent */}
      <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>

      <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl">
        <div className="relative mb-8">
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet opacity-70"></div>
          <span className="text-vibrant-green font-semibold text-lg">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Start a
            <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
              {" "}
              Conversation
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Have a story to share, topic to suggest, or want to be a guest? We'd
            love to hear from you and explore how we can grow together.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-white font-semibold mb-2">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      className="w-full p-4 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm transition-all duration-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-white font-semibold mb-2">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="w-full p-4 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm transition-all duration-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-white font-semibold mb-2">
                    What's on your mind?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full p-4 bg-white/10 border border-electric-blue/30 rounded-lg text-white focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm transition-all duration-300">
                        <SelectValue placeholder="Choose a topic" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-dark-bg border-electric-blue/30">
                      <SelectItem
                        value="topic-suggestion"
                        className="text-white hover:bg-electric-blue/20"
                      >
                        Episode Topic Suggestion
                      </SelectItem>
                      <SelectItem
                        value="guest-pitch"
                        className="text-white hover:bg-electric-blue/20"
                      >
                        Guest Appearance Pitch
                      </SelectItem>
                      <SelectItem
                        value="share-story"
                        className="text-white hover:bg-electric-blue/20"
                      >
                        Share Your Growth Story
                      </SelectItem>
                      <SelectItem
                        value="community"
                        className="text-white hover:bg-electric-blue/20"
                      >
                        Community & Connection
                      </SelectItem>
                      <SelectItem
                        value="general"
                        className="text-white hover:bg-electric-blue/20"
                      >
                        General Inquiry
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-white font-semibold mb-2">
                    Your Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your thoughts, ideas, or story with us..."
                      className="w-full p-4 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm transition-all duration-300 resize-none"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Hidden input for CSRF token */}
            <input type="hidden" name="csrf_token" value={csrfToken} />

            <PrimaryButton
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </div>
              )}
            </PrimaryButton>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
