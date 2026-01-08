import React from 'react';

const Services = ({ setView }) => {
  const services = [
    {
      title: 'Business Websites',
      description:
        'Complete website builds for service businesses, doctors, lawyers, and real estate professionals.',
      tag: 'Most Popular',
    },
    {
      title: 'High-Conversion Landing Pages',
      description:
        'Single-page sites specifically designed to capture leads for paid marketing campaigns.',
      tag: 'Fast Turnaround',
    },
    {
      title: 'Website Redesign',
      description:
        'Modernize your outdated site to improve user experience and bring it up to 2026 standards.',
      tag: 'ROI Focused',
    },
    {
      title: 'SEO & Performance',
      description:
        'Technical optimization to make your site faster and more visible on Google and Bing.',
      tag: 'Growth',
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Simple and effective online stores built to help small retailers sell nationwide.',
      tag: 'Sales',
    },
    {
      title: 'Maintenance & Support',
      description:
        'Ongoing updates, hosting, and security so you never have to worry about your site again.',
      tag: 'Reliable',
    },
  ];

  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">
          Our Expertise
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Results-Driven Solutions For Your Business
        </p>
        <p className="text-lg text-slate-600">
          We don’t just build sites that look good. We build sites that work as
          hard as you do.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded uppercase tracking-wider group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                {service.tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {service.title}
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>

            {/* <button
              onClick={() => setView('services')}
              className="text-teal-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform"
            >
              Learn more
              <svg
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
