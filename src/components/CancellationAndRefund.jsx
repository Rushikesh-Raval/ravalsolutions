import React from "react";

/**
 * CancellationAndRefund Component
 *
 * Visually matches the premium 'ServicesPage' theme using a Slate and Teal palette.
 * Follows a structure of Hero Section -> Content Sections -> CTA.
 * Includes detailed policy text as provided by the user.
 */
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
            This Cancellation & Refund Policy outlines the terms under which
            cancellations and refunds are handled for our web development and
            digital services. By engaging our services, you agree to the terms
            described below.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl space-y-16 md:space-y-24">
          {/* 1. Nature of Services */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-4">1.</span> Nature of Services
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              All services provided are custom and made-to-order, including but
              not limited to website development, UI/UX design, SEO, consulting,
              and related digital solutions. Due to the personalized nature of
              the work, special conditions apply to cancellations and refunds.
            </p>
          </div>

          {/* 2. Cancellation Policy */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="text-teal-500 mr-4">2.</span> Cancellation Policy
            </h2>
            <div className="space-y-8 pl-4 border-l-2 border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  a. Cancellation Before Project Start
                </h3>
                <p className="text-slate-600 text-lg">
                  Clients may request cancellation before work has commenced. If
                  a project is cancelled at this stage, only payments excluding
                  the advance deposit may be eligible for refund.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  b. Cancellation After Project Start
                </h3>
                <p className="text-slate-600 text-lg mb-2">
                  Once work has started, cancellations are permitted; however:
                </p>
                <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
                  <li>
                    Completed work up to the cancellation date will be billed
                    and non-refundable.
                  </li>
                  <li>
                    Any remaining unpaid milestones may be cancelled without
                    further obligation.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  c. Cancellation After Project Completion
                </h3>
                <p className="text-slate-600 text-lg">
                  Cancellations are not permitted after final delivery of the
                  project or milestone. No refunds will be issued once the
                  project or a milestone has been completed and delivered.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Deposit Policy */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-4">3.</span> Deposit Policy
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              All projects require an advance deposit before work begins. The
              advance deposit is non-refundable under all circumstances, as it
              secures project scheduling and initial resource allocation.
            </p>
          </div>

          {/* 4. Milestone-Based Payments & Refunds */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-4">4.</span> Milestone-Based
              Payments & Refunds
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Projects are divided into clearly defined milestones. Payments
              made for completed milestones are non-refundable.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-slate-700 font-semibold mb-2">
                If a cancellation occurs mid-milestone:
              </p>
              <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
                <li>Work completed up to that point will be evaluated.</li>
                <li>
                  Any refund, if applicable, will be limited to the unused
                  portion of that milestone only.
                </li>
              </ul>
            </div>
          </div>

          {/* 5. Non-Refundable Situations */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="text-teal-500 mr-4">5.</span> Non-Refundable
              Situations
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Refunds will not be provided in the following cases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Work has already been completed or delivered.",
                "Delays caused by the client, including lack of feedback or required materials.",
                "Change of mind after project commencement.",
                "Dissatisfaction based on subjective preferences when agreed requirements have been met.",
                "Third-party costs already incurred (e.g., licenses, tools, hosting, paid plugins).",
                "Violation of agreed terms or misuse of delivered work.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start p-4 rounded-lg bg-white border border-slate-100 shadow-sm"
                >
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-4 mt-2.5 flex-shrink-0"></span>
                  <span className="text-slate-600">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Refund Request Process */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-4">6.</span> Refund Request
              Process
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                All refund or cancellation requests must be submitted in writing
                via official communication channels.
              </p>
              <p>
                Requests should include the project name, reason for
                cancellation, and relevant payment details.
              </p>
              <p>
                Each request will be reviewed on a case-by-case basis in
                accordance with this policy.
              </p>
            </div>
          </div>

          {/* 7. Refund Processing Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-4">7.</span> Refund Processing
              Timeline
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Approved refunds will be processed within 7–14 business days.
              </p>
              <p>
                Refunds will be issued using the original payment method
                whenever possible.
              </p>
              <p>
                Processing times may vary depending on the payment provider or
                financial institution.
              </p>
            </div>
          </div>

          {/* 8. Chargebacks & Disputes */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-4">8.</span> Chargebacks &
              Disputes
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Clients are encouraged to contact us directly before initiating
              any chargeback or payment dispute. Unauthorized chargebacks may
              result in suspension of services and recovery actions for
              completed work.
            </p>
          </div>

          {/* 9. Policy Updates */}
          <div className="pb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-4">9.</span> Policy Updates
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This policy may be updated periodically. Continued use of our
              services after updates constitutes acceptance of the revised
              terms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Have questions about our policy?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Our team is committed to transparency. If you need clarification on
            any of the terms outlined above, please contact our support team for
            clarification before initiating a project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={goToContact}
              className="w-full sm:w-auto px-10 py-5 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-teal-500/20 active:scale-95"
            >
              Contact Support Team
            </button>
            <button
              onClick={goHome}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold text-lg rounded-xl transition-all duration-300"
            >
              Back to Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationAndRefund;
