import React from 'react';

const ServicesPage = ({ setView }) => {
  const detailedServices = [
    {
      title: "Business Websites",
      subtitle: "Custom-crafted for growth",
      description:
        "Our core offering. We build high-performance websites specifically tailored for US service businesses. Whether you are a lawyer in Austin or a doctor in Miami, we ensure your site reflects your professionalism.",
      features: [
        "Custom UI/UX Design",
        "Content Management System (CMS)",
        "Responsive Layout",
        "Contact Form Integration",
      ],
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    },
    {
      title: "Landing Pages",
      subtitle: "Convert traffic into revenue",
      description:
        "Perfect for Google Ads and Social Media campaigns. We create focused, distraction-free landing pages that guide visitors toward a single action: contacting your business.",
      features: [
        "A/B Testing Ready",
        "Psychology-Backed Design",
        "Ultra-Fast Loading",
        "Analytics Integration",
      ],
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "SEO & Performance",
      subtitle: "Be seen by the right people",
      description:
        "A beautiful site is useless if it's not found. We implement technical SEO foundations that help you climb search rankings and stay ahead of the competition.",
      features: [
        "Keyword Strategy",
        "Speed Optimization",
        "Technical SEO Audit",
        "Google Search Console Setup",
      ],
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
  ];

  const processSteps = [
    { name: "Discovery", desc: "We learn about your business goals and target audience." },
    { name: "Strategy", desc: "We plan the sitemap and conversion paths for your site." },
    { name: "Design", desc: "We create a high-fidelity mockup for your approval." },
    { name: "Launch", desc: "We deploy your site with a 50-point quality checklist." },
  ];

  const handleCTA = () => {
    setView('home');
    setTimeout(() => {
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Premium Digital <span className="text-teal-600">Solutions</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From custom business websites to high-conversion landing pages, we
          provide the technical foundation your business needs to scale in the
          US market.
        </p>
      </div>

      {/* Services */}
      <div className="container mx-auto px-6 mb-32 space-y-24">
        {detailedServices.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-16 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {service.title}
              </h2>
              <p className="text-teal-600 font-semibold mb-6 uppercase tracking-wider text-sm">
                {service.subtitle}
              </p>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 aspect-video overflow-hidden group">
                <img
                  src={`https://picsum.photos/seed/${service.title}/800/500`}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We follow a rigorous methodology to ensure every project delivers results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-slate-800 absolute -top-10 left-0">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-bold mb-4 text-teal-400">
                  {step.name}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 pt-24 text-center">
        <div className="bg-teal-500 rounded-3xl p-12 md:p-20 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to start your digital journey?
          </h2>
          <p className="text-teal-50 text-xl mb-10 max-w-2xl mx-auto">
            Schedule a free consultation call today.
          </p>
          <button
            onClick={handleCTA}
            className="bg-white text-teal-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
