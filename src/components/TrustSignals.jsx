import React from 'react';

const TrustSignals = () => {
  const features = [
    {
      title: 'Mobile-First Design',
      desc: 'Optimized for the 60%+ of US traffic browsing on smartphones.',
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      title: 'SEO Ready',
      desc: 'Built-in structure to help your business rank on Google search.',
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      ),
    },
    {
      title: 'Ironclad Level Security',
      desc: 'SSL certificates and secure coding to protect your business data.',
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 3.89 2.335 7.235 5.687 8.65a11.94 11.94 0 005.626 0c3.352-1.415 5.687-4.759 5.687-8.65 0-1.29-.205-2.531-.587-3.694A11.959 11.959 0 0112 2.714z"
          />
        </svg>
      ),
    },
    {
      title: 'Lightning Speed',
      desc: 'Sub-2 second load times to reduce bounce rates and boost sales.',
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="text-teal-400 mb-4 p-3 bg-slate-800 rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
