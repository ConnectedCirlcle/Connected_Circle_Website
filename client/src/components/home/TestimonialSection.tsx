import { testimonials } from '@/data/testimonials';

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-[#F8F1E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">What Our Listeners Say</h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">Join our growing community of families nurturing healthier relationships and stronger homes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md quote-card">
              <p className="italic font-['Playfair_Display'] text-lg mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.author.image} 
                  alt={`Testimonial from ${testimonial.author.name}`} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.author.name}</h4>
                  <p className="text-[#8A8A8A] text-sm">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
