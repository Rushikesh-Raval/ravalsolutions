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
            Caspian Digitals believes in helping its customers as far as possible
            and has therefore adopted a transparent and fair cancellation and
            refund policy for its digital services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          {/* 1 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">1.</span> Nature of Services
            </h2>
            <p className="text-slate-600 text-lg">
              Caspian Digitals provides custom-made digital services including
              website development, UI/UX design, SEO, consulting, and related
              solutions. As all services are tailored to individual client
              requirements, they are treated as made-to-order services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">2.</span> Cancellation Policy
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>
                Cancellation requests will be considered only if submitted
                before the commencement of work on the project.
              </li>
              <li>
                Once the project has been initiated or resources have been
                allocated, cancellation requests may not be entertained.
              </li>
              <li>
                Requests must be made in writing through official communication
                channels.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">3.</span> Refund Policy
            </h2>
            <p className="text-slate-600 text-lg mb-4">
              Due to the custom nature of digital services:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>
                Payments made for initiated or completed work are
                non-refundable.
              </li>
              <li>
                Refunds, if applicable, are evaluated on a case-by-case basis.
              </li>
              <li>
                No refunds will be issued for delays caused by lack of client
                communication, feedback, or required materials.
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">4.</span> Quality Concerns
            </h2>
            <p className="text-slate-600 text-lg">
              If a client believes that the delivered service does not meet the
              agreed specifications, they must notify our support team within a
              reasonable timeframe. The concern will be reviewed internally,
              and appropriate corrective action will be taken if valid.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">5.</span> Non-Refundable Items
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
              <li>Advance or onboarding fees</li>
              <li>Discovery and strategy work</li>
              <li>Completed milestones or delivered assets</li>
              <li>Third-party tools, licenses, hosting, or plugins</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">6.</span> Refund Timeline
            </h2>
            <p className="text-slate-600 text-lg">
              If a refund is approved, it will be processed within 7–14 business
              days using the original payment method. Processing time may vary
              depending on the payment provider.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-teal-500 mr-3">7.</span> Policy Updates
            </h2>
            <p className="text-slate-600 text-lg">
              Caspian Digitals reserves the right to update this policy at any
              time. The latest version will apply to all new and ongoing
              engagements.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 md:py-32 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Have questions about our policy?
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Contact our support team for clarification before starting your
          project.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={goToContact}
            className="px-10 py-5 bg-teal-500 text-white font-bold rounded-xl"
          >
            Contact Support
          </button>
          <button
            onClick={goHome}
            className="px-10 py-5 border border-slate-700 text-slate-300 rounded-xl"
          >
            Back to Home
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default CancellationAndRefund;
