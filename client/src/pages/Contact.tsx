import ContactForm from "@/components/contact/ContactForm";
import ConnectSection from "@/components/contact/ConnectSection";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg via-medium-purple/5 to-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rich-violet/10 to-medium-purple/10 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-vibrant-green/5 to-electric-blue/5 blur-xl animate-pulse delay-2000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-green/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-30 blur-sm"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Connect
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We'd love to hear from you! Whether you have a story to share, a
            topic to suggest, or just want to connect with our community, reach
            out and let's start a meaningful conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ContactForm />
          <ConnectSection />
        </div>
      </div>
    </section>
  );
};

export default Contact;
