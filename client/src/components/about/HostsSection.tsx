import { hosts } from '@/data/hosts';

const HostsSection = () => {
  return (
    <section className="py-16 bg-[#F8F1E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">Meet Your Host</h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Get to know the voice and heart behind Heart & Household, bringing you authentic conversations about family life.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {hosts.map((host) => (
            <div key={host.id} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src={host.image} 
                  alt={`${host.name}, podcast host`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <h3 className="font-['Playfair_Display'] font-bold text-xl mb-2">{host.name}</h3>
                <p className="text-[#B2593C] mb-4">{host.role}</p>
                <p className="text-[#8A8A8A] mb-4">{host.bio}</p>
                <div className="flex space-x-3">
                  {host.socialLinks.instagram && (
                    <a href={host.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-[#B2593C]">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {host.socialLinks.twitter && (
                    <a href={host.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-[#B2593C]">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {host.socialLinks.linkedin && (
                    <a href={host.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-[#B2593C]">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
