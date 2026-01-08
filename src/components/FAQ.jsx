import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How much does a new website cost?",
      answer:
        "Every business is different, and so is every website we build.We work entirely on custom requirements, not fixed templates or one-size-fits-all packages.Projects typically start from $699, with final pricing determined by:Scope of work, Features & functionality, Design complexity, Timeline & integrations"
    },
    {
      question: "How long will it take to build my site?",
      answer:
        "Most business websites take 2–4 weeks from the initial discovery call to launch.We prioritize efficient delivery without compromising the quality of work, performance, or reliability. For time-sensitive projects, we also offer a priority build option that allows delivery in as little as one week, subject to scope and availability — without cutting corners or sacrificing quality."
    },
    {
      question: "Are you really based in the United States?",
      answer:
        "Our head office is located in Pune, Maharashtra, India — one of the major IT hubs in the country. We work with businesses globally to build and manage their digital presence in a smooth, hassle-free way. To ensure seamless collaboration, we are available during US business hours for communication, support, and ongoing discussions."
    },
    {
      question: "Will I be able to update my own website?",
      answer:
        "Absolutely. If you prefer, we can build your website on user-friendly platforms (including headless setups) and provide a dedicated 1-hour training session. This ensures you can confidently update text, images, and blog content on your own — without relying on technical support."
    },
    {
      question: "Do you offer website maintenance?",
      answer:
       "Yes, we offer monthly website care plans starting at $49/month, designed to keep your website secure, up-to-date, and running smoothly. Our care plans include site monitoring when needed so that website stays live and accessible, regular security checks to identify and prevent potential issues, ongoing maintenance to keep everything functioning properly, content updates and basic website management handled for you, and technical support for day-to-day website needs."
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
