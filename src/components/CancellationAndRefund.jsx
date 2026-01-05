import React from "react";

const CancellationAndRefund = ({ setView }) => {
  const goToContact = () => {
    setView("home");
    setTimeout(() => {
      const target = document.getElementById("contact");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goHome = () => {
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-slate-900 font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Cancellation & <span className="text-teal-600">Refund Policy</span>
          </h1>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            This Cancellation and Refund Policy outlines the terms under which
            services may be canceled and payments may be refunded. By engaging
            our web development services, you agree to the terms described below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          {/* 1 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">1.</span> Project Cancellation by Client
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>Clients may request cancellation at any time via written email notice.</li>
              <li>Cancellation takes effect on the date the request is received.</li>
              <li>Work completed up to the cancellation date is non-refundable.</li>
              <li>Any unpaid balance for completed work may still be due.</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">2.</span> Project Cancellation by Agency
            </h2>
            <p className="text-slate-600 text-lg mb-4">
              We may cancel or suspend a project if:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>Required information or approvals are not provided in time</li>
              <li>The client becomes unresponsive for an extended period</li>
              <li>Payment obligations are not met</li>
              <li>The project scope changes significantly without agreement</li>
            </ul>
            <p className="text-slate-600 text-lg mt-4">
              In such cases, work completed up to the cancellation date will be billed.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">3.</span> Refund Eligibility and Conditions
            </h2>
            <p className="text-slate-600 text-lg mb-4">
              Refunds are evaluated on a case-by-case basis depending on:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>The project stage at cancellation</li>
              <li>The amount of work completed</li>
              <li>Costs incurred on the client’s behalf</li>
            </ul>
            <p className="text-slate-600 text-lg mt-4">
              Refunds are not guaranteed and may be partial.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">4.</span> Non-Refundable Fees
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>Upfront deposits</li>
              <li>Discovery, planning, or strategy fees</li>
              <li>Initial setup or onboarding fees</li>
              <li>Delivered or approved services</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">5.</span> Milestone-Based Payments
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>Each milestone covers work for that phase</li>
              <li>Completed milestones are non-refundable</li>
              <li>Unstarted milestones may be partially refundable at discretion</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">6.</span> Refund Timeline and Method
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>Approved refunds are processed within 7–14 business days</li>
              <li>Refunds use the original payment method where possible</li>
              <li>Processing time depends on the payment provider</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">7.</span> No-Refund Circumstances
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>Client-initiated scope changes</li>
              <li>Client delays or lack of feedback</li>
              <li>Third-party tools, licenses, hosting, or integrations</li>
              <li>Projects abandoned or paused without notice</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">8.</span> Dispute Resolution and Governing Law
            </h2>
            <p className="text-slate-600 text-lg mb-4">
              Disputes should first be resolved through good-faith communication.
            </p>
            <p className="text-slate-600 text-lg">
              If unresolved, disputes will be governed by United States law and the
              applicable state of business registration.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">9.</span> Policy Updates
            </h2>
            <p className="text-slate-600 text-lg">
              This policy may be updated periodically. The latest version applies to
              all new engagements.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Have questions about our policy?
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Contact our support team for clarification before starting your project.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={goToContact} className="px-10 py-5 bg-teal-500 text-white font-bold rounded-xl">
            Contact Support
          </button>
          <button onClick={goHome} className="px-10 py-5 border border-slate-700 text-slate-300 rounded-xl">
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default CancellationAndRefund;
