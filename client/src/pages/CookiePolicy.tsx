const CookiePolicy = () => {
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
              Cookie
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Learn about how Connected Circles uses cookies and similar
            technologies to enhance your browsing experience.
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
                  What Are Cookies?
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Cookies are small text files that are stored on your
                    computer or mobile device when you visit a website. They
                    help websites remember information about your visit, which
                    can make your next visit easier and the site more useful to
                    you.
                  </p>
                  <p>
                    Connected Circles uses cookies and similar technologies to
                    enhance your experience on our website and to help us
                    understand how our site is being used.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  Types of Cookies We Use
                </h2>
                <div className="text-gray-300 space-y-6">
                  <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/20">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Essential Cookies
                    </h3>
                    <p>
                      These cookies are necessary for the website to function
                      properly. They enable basic functions like page
                      navigation, form submissions, and security features. The
                      website cannot function properly without these cookies.
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Session management</li>
                      <li>Security and authentication</li>
                      <li>Form submission protection (CSRF tokens)</li>
                    </ul>
                  </div>

                  <div className="bg-vibrant-green/10 rounded-lg p-4 border border-vibrant-green/20">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Functional Cookies
                    </h3>
                    <p>
                      These cookies enable enhanced functionality and
                      personalization. They may be set by us or by third-party
                      providers whose services we have added to our pages.
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Remembering your preferences</li>
                      <li>Language and region settings</li>
                      <li>Accessibility features</li>
                    </ul>
                  </div>

                  <div className="bg-rich-violet/10 rounded-lg p-4 border border-rich-violet/20">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Analytics Cookies
                    </h3>
                    <p>
                      These cookies help us understand how visitors interact
                      with our website by collecting and reporting information
                      anonymously. This helps us improve our website and
                      content.
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Page views and traffic sources</li>
                      <li>User behavior patterns</li>
                      <li>Performance monitoring</li>
                    </ul>
                  </div>

                  <div className="bg-medium-purple/10 rounded-lg p-4 border border-medium-purple/20">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Marketing Cookies
                    </h3>
                    <p>
                      These cookies track visitors across websites to display
                      relevant and engaging advertisements. They may be used to
                      build a profile of your interests and show you relevant
                      ads on other sites.
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Social media integration</li>
                      <li>Targeted advertising</li>
                      <li>Cross-site tracking prevention</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rich-violet mr-3"></div>
                  Third-Party Cookies
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Some cookies on our site are set by third-party services
                    that appear on our pages. We use the following third-party
                    services that may set cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>YouTube:</strong> For embedded video content and
                      community features
                    </li>
                    <li>
                      <strong>Social Media Platforms:</strong> For social
                      sharing and integration
                    </li>
                    <li>
                      <strong>Analytics Services:</strong> To understand website
                      usage and performance
                    </li>
                    <li>
                      <strong>Content Delivery Networks:</strong> To improve
                      website loading speed
                    </li>
                  </ul>
                  <p>
                    These third-party services have their own cookie policies,
                    which we encourage you to review.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-medium-purple mr-3"></div>
                  How We Use Cookies
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Connected Circles uses cookies for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Website Functionality:</strong> To ensure our
                      website works properly and securely
                    </li>
                    <li>
                      <strong>User Experience:</strong> To remember your
                      preferences and improve your browsing experience
                    </li>
                    <li>
                      <strong>Analytics:</strong> To understand how visitors use
                      our website and identify areas for improvement
                    </li>
                    <li>
                      <strong>Security:</strong> To protect against fraud and
                      ensure secure form submissions
                    </li>
                    <li>
                      <strong>Content Personalization:</strong> To show you
                      relevant content based on your interests
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Managing Your Cookie Preferences
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>You have several options for managing cookies:</p>

                  <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/20">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Browser Settings
                    </h3>
                    <p>
                      Most web browsers allow you to control cookies through
                      their settings preferences. You can:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Set up notifications when cookies are being sent</li>
                    </ul>
                  </div>

                  <div className="bg-vibrant-green/10 rounded-lg p-4 border border-vibrant-green/20">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Browser-Specific Instructions
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Chrome:</strong> Settings → Privacy and Security
                        → Cookies and other site data
                      </li>
                      <li>
                        <strong>Firefox:</strong> Options → Privacy & Security →
                        Cookies and Site Data
                      </li>
                      <li>
                        <strong>Safari:</strong> Preferences → Privacy → Manage
                        Website Data
                      </li>
                      <li>
                        <strong>Edge:</strong> Settings → Cookies and site
                        permissions → Cookies and site data
                      </li>
                    </ul>
                  </div>

                  <p className="text-yellow-400 bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/20">
                    <strong>Note:</strong> Disabling certain cookies may affect
                    the functionality of our website and limit your ability to
                    use some features.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-vibrant-green mr-3"></div>
                  Cookie Retention
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Different types of cookies are stored for different periods:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Session Cookies:</strong> Deleted when you close
                      your browser
                    </li>
                    <li>
                      <strong>Persistent Cookies:</strong> Remain on your device
                      for a set period or until manually deleted
                    </li>
                    <li>
                      <strong>Essential Cookies:</strong> Typically last for the
                      duration of your session
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Usually expire after
                      1-2 years
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rich-violet mr-3"></div>
                  Your Rights
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Know what cookies are being set on your device</li>
                    <li>Choose whether to accept or decline cookies</li>
                    <li>Delete cookies from your device at any time</li>
                    <li>Opt out of targeted advertising cookies</li>
                    <li>Request information about the cookies we use</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-medium-purple mr-3"></div>
                  Updates to This Policy
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We will notify you of any
                    material changes by posting the updated policy on our
                    website and updating the "Last updated" date.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-electric-blue mr-3"></div>
                  Contact Us
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about our use of cookies or this
                    Cookie Policy, please contact us:
                  </p>
                  <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/20">
                    <p>
                      <strong>Email:</strong> hello@connectedcircles.com
                    </p>
                    <p>
                      <strong>Subject Line:</strong> Cookie Policy Inquiry
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

export default CookiePolicy;
