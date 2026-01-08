import React from "react";

 const NICHES = [
  {
    label: "Dental Clinics",
    image: "https://images.pexels.com/photos/4269684/pexels-photo-4269684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
  {
    label: "Medical Practices",
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
  {
    label: "Real Estate Agencies",
    image: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
  {
    label: "Consultants & Coaches",
    image: "https://images.pexels.com/photos/4098215/pexels-photo-4098215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
  {
    label: "Law Firms",
    image: "https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
  {
    label: "Financial Advisors",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
  {
    label: "Beauty & Wellness",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
  {
    label: "Home Services",
    image: "https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
  },
];


const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-teal-600"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const NichesSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Industries We <span className="text-teal-600">Specialize</span> In
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We focus on selected service-based industries where websites play a
            direct role in lead generation and business growth.
          </p>
        </div>

        {/* Niche Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {NICHES.map((niche, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 bg-slate-200 overflow-hidden relative">
                <img
                  src={niche.image}
                  alt={niche.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300" />
              </div>

              {/* Label */}
              <div className="p-5 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </div>
                <span className="text-slate-700 font-semibold text-sm md:text-base">
                  {niche.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center">
          <p className="text-teal-600 font-medium text-lg">
            If your business serves customers locally, we have the expertise to
            build a website that works for you.
          </p>
        </div>
      </div>
    </section>
  );
};
export default NichesSection;
