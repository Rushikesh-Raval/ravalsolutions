import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How much does a new website cost?",
      answer:
        "Every project is unique, but our custom business websites typically range from $2,500 to $7,500 depending on complexity. We also offer landing pages starting at $1,200 for targeted marketing campaigns."
    },
    {
      question: "How long will it take to build my site?",
      answer:
        "Most business websites take between 2 to 4 weeks from the initial discovery call to launch. We prioritize efficient delivery without sacrificing quality or performance."
    },
    {
      question: "Are you really based in the United States?",
      answer:
        "Yes! Our core strategy and development team is located across the US. This ensures we are always available during your business hours and understand the local US market nuances."
    },
    {
      question: "Will I be able to update my own website?",
      answer:
        "Absolutely. We build most of our sites on user-friendly platforms (like Headless CMS or WordPress) and provide a 1-hour training session so you can easily update text, photos, and blog posts."
    },
    {
      question: "Do you offer website maintenance?",
      answer:
        "Yes, we have monthly care plans starting at $99/mo that include high-speed hosting, security monitoring, regular backups, and technical support."
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">
          FAQ
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-900">
          Questions? We Have Answers.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
              onClick={() =>
                setOpenIndex(openIndex === idx ? null : idx)
              }
            >
              <span className="text-lg font-bold text-slate-900">
                {faq.question}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === idx ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
