const PrivacyPolicy = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-dark-bg via-medium-purple/5 to-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rich-violet/10 to-medium-purple/10 blur-xl animate-pulse delay-1000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-30 blur-sm"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Your privacy is important to us. This policy explains how Connected
            Circles collects, uses, and protects your information.
          </p>
          <p className="text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Information We Collect
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We collect information you provide directly to us, such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Email addresses when you subscribe to our newsletter
                    </li>
                    <li>Contact information when you reach out to us</li>
                    <li>Topic suggestions and feedback you submit</li>
                    <li>Focus group signup information</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  How We Use Your Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Send you podcast updates and newsletters</li>
                    <li>Respond to your inquiries and feedback</li>
                    <li>Improve our content and services</li>
                    <li>Organize focus groups and community events</li>
                    <li>Analyze website usage and performance</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rich-violet mr-3"></div>
                  Information Sharing
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties except:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>
                      To trusted service providers who assist in operating our
                      website
                    </li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-medium-purple mr-3"></div>
                  Data Security
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Secure data transmission using encryption</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Secure storage of collected data</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Your Rights
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Unsubscribe from our communications at any time</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  Cookies and Tracking
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our website may use cookies and similar tracking
                    technologies to enhance your experience. These help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Improve website functionality</li>
                    <li>Provide personalized content</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser
                    preferences.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rich-violet mr-3"></div>
                  Third-Party Services
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We use third-party services to enhance our podcast and
                    website functionality:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Buzzsprout:</strong> For podcast hosting and
                      distribution
                    </li>
                    <li>
                      <strong>Web3Forms:</strong> For contact form processing
                    </li>
                    <li>
                      <strong>YouTube:</strong> For video content and community
                      features
                    </li>
                    <li>
                      <strong>Social Media Platforms:</strong> For community
                      engagement
                    </li>
                  </ul>
                  <p>
                    These services have their own privacy policies, which we
                    encourage you to review.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-medium-purple mr-3"></div>
                  Children's Privacy
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our services are not directed to children under 13. We do
                    not knowingly collect personal information from children
                    under 13. If you become aware that a child has provided us
                    with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Changes to This Policy
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update this privacy policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page and updating the "Last updated" date. We encourage you
                    to review this policy periodically.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  Contact Us
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about this privacy policy or our
                    data practices, please contact us:
                  </p>
                  <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/20">
                    <p>
                      <strong>Email:</strong> hello@connectedcircles.com
                    </p>
                    <p>
                      <strong>Subject Line:</strong> Privacy Policy Inquiry
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
