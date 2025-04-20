import ContactForm from '@/components/contact/ContactForm';
import ConnectSection from '@/components/contact/ConnectSection';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ConnectSection />
        </div>
      </div>
    </section>
  );
};

export default Contact;
