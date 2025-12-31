import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-12">
          Last Updated: May 20, 2024
        </p>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us when you
              fill out our contact form, subscribe to our newsletter, or
              communicate with us. This may include your name, email address,
              company name, and any other details you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              The information we collect is used to provide, maintain, and
              improve our services, respond to your inquiries, and send updates,
              security alerts, and support messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your information from loss,
              theft, misuse, and unauthorized access. We use SSL encryption and
              follow industry-standard security practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Third-Party Services
            </h2>
            <p>
              We do not sell or trade your personal information. Trusted third
              parties may assist us in operating our website or servicing you,
              provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy, contact us at:
              <br />
              <strong>hello@frontierdigital.agency</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
