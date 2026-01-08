import React from 'react';
import {
  Palette,
  RefreshCcw,
  Zap,
  Search,
  ShieldCheck,
  Server,
  ArrowRight,
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
    <div className="mb-4 p-3 bg-teal-50 rounded-xl text-teal-600 ring-1 ring-teal-100/50">
      {icon}
    </div>
    <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight">
      {title}
    </h3>
    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const FullManagementSection = () => {
  const features = [
    {
      icon: <Palette size={22} />,
      title: 'Design & Development',
      description:
        'Custom UI/UX tailored to your brand identity, built on a robust and scalable code foundation.',
    },
    {
      icon: <RefreshCcw size={22} />,
      title: 'Updates & Maintenance',
      description:
        'We handle regular software updates, dependency management, and content refreshes automatically.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Speed & Performance',
      description:
        'Continuous optimization to ensure fast load times and a smooth user experience.',
    },
    {
      icon: <Search size={22} />,
      title: 'SEO Foundations',
      description:
        'Technical SEO best practices to help search engines understand and rank your content.',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Security & Backups',
      description:
        'Enterprise-grade security monitoring, SSL management, and daily off-site backups.',
    },
    {
      icon: <Server size={22} />,
      title: 'Hosting & Deployment',
      description:
        'Fully managed cloud hosting with high uptime and zero configuration needed.',
    },
  ];

  return (
    <section className="md:py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-16 right-16 w-72 h-72 bg-teal-50 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-16 w-64 h-64 bg-slate-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            We Handle <span className="text-teal-600">Everything</span> — So You
            Don’t Have To
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Stop juggling freelancers and technical headaches. We act as your
            end-to-end digital partner, managing everything behind the scenes so
            you can focus on running your business.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Trust line + CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-medium text-teal-600 mb-6">
            One team. One point of contact. Zero technical stress.
          </p>

          <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-7 rounded-full transition-all duration-200 shadow-md">
            Talk to us — we’ll take care of the rest
            <ArrowRight size={16} className="text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FullManagementSection;
