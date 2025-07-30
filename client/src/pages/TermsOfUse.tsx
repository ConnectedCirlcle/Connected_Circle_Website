const TermsOfUse = () => {
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
              Terms of
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Use
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Please read these terms carefully before using Connected Circles
            website and services.
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
                  Acceptance of Terms
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By accessing and using the Connected Circles website,
                    podcast, and related services, you accept and agree to be
                    bound by the terms and provision of this agreement. If you
                    do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  Use License
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Permission is granted to temporarily download one copy of
                    Connected Circles materials for personal, non-commercial
                    transitory viewing only. This is the grant of a license, not
                    a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>
                      Use the materials for any commercial purpose or for any
                      public display
                    </li>
                    <li>
                      Attempt to reverse engineer any software contained on the
                      website
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations from
                      the materials
                    </li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate
                    any of these restrictions and may be terminated by Connected
                    Circles at any time.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rich-violet mr-3"></div>
                  User Content and Conduct
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    When you submit content to us (through forms, comments, or
                    other means), you agree that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your content is accurate and not misleading</li>
                    <li>
                      Your content does not violate any laws or regulations
                    </li>
                    <li>
                      Your content does not infringe on the rights of others
                    </li>
                    <li>
                      Your content is not offensive, threatening, or harassing
                    </li>
                    <li>
                      You grant us the right to use your content for podcast and
                      website purposes
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-medium-purple mr-3"></div>
                  Intellectual Property
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    The Connected Circles podcast, website content, logos, and
                    all related materials are protected by copyright and other
                    intellectual property laws. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Podcast episodes and audio content</li>
                    <li>Website design and functionality</li>
                    <li>Connected Circles branding and logos</li>
                    <li>Written content and transcripts</li>
                    <li>Images and multimedia content</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Disclaimer
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    The materials on Connected Circles website and podcast are
                    provided on an 'as is' basis. Connected Circles makes no
                    warranties, expressed or implied, and hereby disclaims and
                    negates all other warranties including without limitation,
                    implied warranties or conditions of merchantability, fitness
                    for a particular purpose, or non-infringement of
                    intellectual property or other violation of rights.
                  </p>
                  <p>
                    Further, Connected Circles does not warrant or make any
                    representations concerning the accuracy, likely results, or
                    reliability of the use of the materials on its website or
                    otherwise relating to such materials or on any sites linked
                    to this site.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  Limitations
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    In no event shall Connected Circles or its suppliers be
                    liable for any damages (including, without limitation,
                    damages for loss of data or profit, or due to business
                    interruption) arising out of the use or inability to use the
                    materials on Connected Circles website, even if Connected
                    Circles or a Connected Circles authorized representative has
                    been notified orally or in writing of the possibility of
                    such damage. Because some jurisdictions do not allow
                    limitations on implied warranties, or limitations of
                    liability for consequential or incidental damages, these
                    limitations may not apply to you.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rich-violet mr-3"></div>
                  Privacy and Data Collection
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Your privacy is important to us. Our collection and use of
                    personal information is governed by our Privacy Policy. By
                    using our services, you consent to the collection and use of
                    information as outlined in our Privacy Policy.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-medium-purple mr-3"></div>
                  Community Guidelines
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Connected Circles fosters a supportive community focused on
                    personal growth and meaningful connections. We expect all
                    community members to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Treat others with respect and kindness</li>
                    <li>Engage in constructive and meaningful discussions</li>
                    <li>Respect different perspectives and experiences</li>
                    <li>Avoid spam, self-promotion, or off-topic content</li>
                    <li>Report inappropriate behavior or content</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Third-Party Links
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our website may contain links to third-party websites or
                    services. We are not responsible for the content, privacy
                    policies, or practices of these external sites. We encourage
                    you to review the terms and privacy policies of any
                    third-party sites you visit.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  Termination
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We reserve the right to terminate or suspend access to our
                    services immediately, without prior notice or liability, for
                    any reason whatsoever, including without limitation if you
                    breach the Terms of Use.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rich-violet mr-3"></div>
                  Changes to Terms
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Connected Circles may revise these terms of use at any time
                    without notice. By using this website and our services, you
                    are agreeing to be bound by the then current version of
                    these terms of use.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-medium-purple mr-3"></div>
                  Governing Law
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    These terms and conditions are governed by and construed in
                    accordance with the laws of the jurisdiction in which
                    Connected Circles operates, and you irrevocably submit to
                    the exclusive jurisdiction of the courts in that state or
                    location.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Contact Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about these Terms of Use, please
                    contact us:
                  </p>
                  <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/20">
                    <p>
                      <strong>Email:</strong> hello@connectedcircles.com
                    </p>
                    <p>
                      <strong>Subject Line:</strong> Terms of Use Inquiry
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

export default TermsOfUse;
