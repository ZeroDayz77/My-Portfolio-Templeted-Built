import React from 'react';

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Production Zero</p>
        <p className="text-sm text-gray-500 mb-8">Last Updated: January 15, 2026</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
            <p>
              Welcome to Production Zero. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we handle information in our applications, including Tempo and our MP3 Player.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p className="mb-2">Our apps may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Usage data and app analytics</li>
              <li>Device information (device type, operating system)</li>
              <li>Files you choose to interact with (audio files for the MP3 player)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
            <p className="mb-2">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain our applications</li>
              <li>Improve user experience and app functionality</li>
              <li>Analyze usage patterns to enhance our services</li>
              <li>Troubleshoot technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Storage and Security</h2>
            <p>
              Your data is stored locally on your device whenever possible. We implement appropriate security measures 
              to protect your information from unauthorized access, alteration, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
            <p>
              Our apps may use third-party services for analytics or other functionality. These services have their 
              own privacy policies and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of data collection where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Age Restrictions</h2>
            <p>
              Our apps are intended for users aged 13 and older. By using our apps, you confirm that you meet 
              this age requirement. We do not knowingly collect personal information from children under 13. 
              If we discover that a child under 13 has provided us with personal information, we will delete 
              such information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
            <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting 
            the new privacy policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our practices, please contact us at:
            </p>
            <p className="mt-2 font-medium">darnellgarcia26@gmail.com</p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {currentYear} Production Zero. All rights reserved.
        </div>
      </div>
    </div>
  );
}
