import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-10">
        Privacy Policy for Job Portal
      </h1>

      <section className="space-y-6 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            This Privacy Policy outlines how we collect, use, and protect your
            information when you visit our job portal website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Personal Information:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Resume/CV</li>
              </ul>
            </li>
            <li>
              <strong>Usage Data:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To improve our services through analysis</li>
            <li>To monitor service usage</li>
            <li>To detect and address technical issues</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Data Security</h2>
          <p className="text-gray-600">
            We take the security of your personal information seriously and
            implement appropriate technical and organizational measures to
            protect it.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Sharing Your Information</h2>
          <p className="text-gray-600">
            We do not sell or rent your personal information to third parties.
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Service providers who assist us in operating our website</li>
            <li>Law enforcement agencies if required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Your Rights</h2>
          <p className="text-gray-600">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Access your personal information</li>
            <li>Request correction of your personal information</li>
            <li>Request deletion of your personal information</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-600">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <span className="font-medium text-blue-600">support@jobportal.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
