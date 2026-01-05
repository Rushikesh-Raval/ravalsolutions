import React from "react";

const PolicyPage = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-6 uppercase tracking-wide">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Privacy Policy & <span className="text-teal-600">Terms</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Transparency and trust are core to how Caspian Digitals works with
            clients across the US and globally.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-3xl mt-20 space-y-16">

        {/* Privacy Policy */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">
            Privacy Policy
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Caspian Digitals respects your privacy. We collect only the
            information necessary to deliver professional web development and
            digital services. We do not sell or rent personal data to third
            parties.
          </p>
          <ul className="space-y-4 text-slate-600 text-lg">
            <li>• Contact details provided via forms</li>
            <li>• Business information for project communication</li>
            <li>• Technical data for website performance and security</li>
          </ul>
        </section>

        {/* Data Usage */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">
            How We Use Your Data
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Your data is used strictly for communication, project execution,
            billing, and improving our services. All data is handled securely
            using industry best practices.
          </p>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">
            Terms of Service
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            By using our website or engaging Caspian Digitals for services, you
            agree to our terms. All projects are governed by a written proposal
            or agreement defining scope, timelines, and payment terms.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Caspian Digitals is not liable for indirect damages, revenue loss, or
            third-party service issues beyond the scope of the agreed project.
          </p>
        </section>

        {/* Compliance */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">
            Compliance
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We follow global best practices and comply with GDPR, CCPA, and
            applicable data protection laws. Client confidentiality is treated
            with enterprise-level care.
          </p>
        </section>

        {/* CTA */}
        <section className="pt-10">
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Questions about our policies?
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              Reach out to our team for legal or privacy-related clarifications.
            </p>
            <button className="bg-teal-500 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-teal-400 transition">
              Contact Us
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PolicyPage;
