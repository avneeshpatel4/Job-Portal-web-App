import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#6A38C2] mb-8">
          Terms and Conditions
        </h1>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <span className="font-medium">Job Portal</span>. These
            Terms and Conditions govern your use of our website located at{" "}
            <span className="text-blue-600">www.jobportal.com</span>. By
            accessing or using our website, you agree to comply with these
            terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            2. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By using our website, you confirm that you accept these Terms and
            Conditions and agree to comply with them. If you do not agree with
            any part of these terms, you must not use our website.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            3. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any
            time. Any changes will be effective immediately upon posting on this
            page. Your continued use of the website after any changes
            constitutes your acceptance of the new Terms and Conditions.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            4. User Responsibilities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to use the website only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else's use and enjoyment of the website.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            5. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content, trademarks, and other intellectual property on the
            website are owned by or licensed to{" "}
            <span className="font-medium">Job Portal</span>. You may not
            reproduce, distribute, or create derivative works from any content
            without our express written permission.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by law,{" "}
            <span className="font-medium">Job Portal</span> shall not be liable
            for any direct, indirect, incidental, special, consequential, or
            punitive damages arising from your use of the website.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            7. Governing Law
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of{" "}
            <span className="font-medium">India</span>. Any disputes arising in
            connection with these terms shall be subject to the exclusive
            jurisdiction of the courts of{" "}
            <span className="font-medium">Noida, Uttar Pradesh</span>.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            8. Contact Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms and Conditions, please
            contact us at{" "}
            <span className="text-blue-600 underline cursor-pointer">
              support@jobportal.com
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
