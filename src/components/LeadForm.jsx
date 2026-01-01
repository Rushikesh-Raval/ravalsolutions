import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const LeadForm = () => {
  const [state, handleSubmit] = useForm("mgovoqqe");

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Stop Losing Clients to <br className="hidden md:block" />
            Poor Website Design.
          </h2>

          <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-xl">
            Ready to grow your business? Fill out the form for a 100% free website audit.
            No obligation — just expert advice.
          </p>

          <div className="space-y-8 max-w-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-bold text-lg">Call Us Directly</h4>
                <p className="text-slate-400 text-sm">Mon–Fri, 9am–6pm EST</p>
                <p className="text-teal-400 font-semibold mt-1"> +91 9326580094</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Support</h4>
                <p className="text-slate-400 text-sm">Avg response: 2 hours</p>
                <p className="text-teal-400 font-semibold mt-1">
                  info@caspiandigitals.online
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100">

            {state.succeeded ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                  Message Received!
                </h3>
                <p className="text-slate-600">
                  We’ll reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    required
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                  />

                  <input
                    required
                    type="phone"
                    name="phone"
                    placeholder="Contact Number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                  />
                </div>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <input
                  required
                  name="business"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 resize-none"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-teal-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-600 transition shadow-lg disabled:opacity-60"
                >
                  Get Your Free Website Audit
                </button>

                <p className="text-xs text-center text-slate-400">
                  No spam. Ever.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadForm;
