import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { OliveButton } from '@/components/ui/button-variants';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
      
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our newsletter at " + email
      });
      
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error subscribing",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-[#B2593C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-6">Stay Connected</h2>
          <p className="text-white text-opacity-90 mb-8">
            Subscribe to our newsletter for episode updates, family resources, and exclusive content delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 rounded-full focus:outline-none text-[#333333]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <OliveButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </OliveButton>
          </form>
          
          <p className="text-white text-opacity-70 text-sm mt-4">We respect your privacy and will never share your information.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
