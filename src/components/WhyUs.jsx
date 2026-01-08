import React from "react";

const WhyUs = () => {
  const points = [
    {
      title: "Conversion-First Philosophy",
      desc: "Beautiful design is secondary to business results. We structure every site to guide visitors toward your CTA.",
    },
    {
      title: "End-to-End Management",
      desc: "From strategy and design to deployment and ongoing updates, we handle everything so you can stay focused on your business.",
    },
    {
      title: "Clear Communication",
      desc: "One point of contact, regular updates, and no technical jargon—so you always know what’s happening with your website.",
    },
    {
      title: "Affordable US Pricing",
      desc: "Premium quality without the Manhattan agency price tag. We offer transparent pricing tailored for SMBs.",
    },
    {
      title: "Fast Turnaround",
      desc: "We don't believe in 6-month projects. Most of our websites go live within 2–4 weeks.",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Why Successful US Businesses <br className="hidden md:block" />{" "}
            <span className="text-teal-600">Caspian Digitals</span>
            
          </h2>

          <div className="space-y-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex space-x-4">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {point.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="text-3xl font-bold text-teal-600 mb-1">100%</div>
              <p className="text-sm text-slate-500 font-medium">Skilled Team</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg text-white">
              <div className="text-3xl font-bold text-teal-400 mb-1">2x</div>
              <p className="text-sm text-slate-300 font-medium">
                Conversion Rate Avg
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="text-3xl font-bold text-teal-600 mb-1">24h</div>
              <p className="text-sm text-slate-500 font-medium">
                Response Guarantee
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl shadow-lg border border-teal-100">
              <div className="text-3xl font-bold text-teal-600 mb-1">5.0</div>
              <p className="text-sm text-slate-500 font-medium">
                Client Satisfaction Approach
              </p>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
