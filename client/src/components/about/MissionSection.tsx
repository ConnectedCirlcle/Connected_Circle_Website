const MissionSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#B2593C] font-semibold">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mt-2 mb-6">The Heart Behind Our Podcast</h2>
            <p className="text-[#8A8A8A] mb-6">
              Heart & Household is dedicated to nurturing the emotional, practical, and relational well-being of families. 
              Through honest conversations, expert insights, and real-life stories, we explore the everyday dynamics of 
              parenting, partnerships, money management, and health—both physical and mental.
            </p>
            <p className="text-[#8A8A8A] mb-6">
              Our mission is to support, empower, and connect listeners as they navigate the beautiful, messy, 
              and meaningful journey of building a strong, healthy household from the inside out.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {/* Core Value - Emotional Support */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-[#B2593C] bg-opacity-10 text-[#B2593C] p-3 rounded-full">
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Emotional Support</h3>
                  <p className="text-[#8A8A8A] text-sm">Fostering emotional awareness and healthy expression within families</p>
                </div>
              </div>
              
              {/* Core Value - Practical Wisdom */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-[#B2593C] bg-opacity-10 text-[#B2593C] p-3 rounded-full">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Practical Wisdom</h3>
                  <p className="text-[#8A8A8A] text-sm">Real-world advice for everyday family challenges</p>
                </div>
              </div>
              
              {/* Core Value - Open Dialogue */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-[#B2593C] bg-opacity-10 text-[#B2593C] p-3 rounded-full">
                    <i className="fas fa-comments"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Open Dialogue</h3>
                  <p className="text-[#8A8A8A] text-sm">Creating space for honest conversations about family life</p>
                </div>
              </div>
              
              {/* Core Value - Community Building */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-[#B2593C] bg-opacity-10 text-[#B2593C] p-3 rounded-full">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Building</h3>
                  <p className="text-[#8A8A8A] text-sm">Connecting families through shared experiences</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Host smiling while recording podcast" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64 md:h-80 mt-12">
              <img 
                src="https://images.unsplash.com/photo-1594022788673-38f8af038da0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Host interviewing a guest" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
