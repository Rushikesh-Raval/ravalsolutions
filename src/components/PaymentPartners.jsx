import React from 'react';

const PaymentPartners = () => {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Compact Header */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
            Trusted By Global Payment Leaders
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We work with industry-standard payment technologies trusted worldwide.
          </p>
        </div>

        {/* Ultra-Compact Logo Container */}
        <div className="flex flex-row items-center justify-center gap-10 md:gap-16">
          {/* PayPal Logo */}
          <div className="group transition-transform duration-300 cursor-default hover:scale-105">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6 md:h-7 w-auto object-contain"
            />
          </div>

          {/* Razorpay Logo */}
          <div className="group transition-transform duration-300 cursor-default hover:scale-105">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
              alt="Razorpay"
              className="h-6 md:h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Minimal Bottom Accent */}
        <div className="mt-8 flex items-center justify-center opacity-50">
          <div className="h-px w-6 bg-slate-300"></div>
          <span className="px-3 text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold">
            Top Grade Security
          </span>
          <div className="h-px w-6 bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPartners;
