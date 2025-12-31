import React from 'react';

const Footer = ({ setView }) => {
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setView('home');
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* CTA */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to grow your business?
            </h3>
            <p className="text-slate-400 text-lg">
              Join 50+ US business owners who transformed their online presence with Frontier Digital.
            </p>
          </div>
          <button
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-teal-500/20"
          >
            Get a Free Website Audit
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <span className="text-2xl font-bold">
                Raval<span className="text-teal-500">Solutions</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm">
              We build high-performance, conversion-focused websites for US businesses.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-8 text-lg">Services</h4>
            <ul className="space-y-4">
              {['Business Websites', 'Landing Pages', 'SEO Audit', 'Maintenance'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => setView('services')}
                    className="text-slate-400 hover:text-teal-500"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-8 text-lg">Agency</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#why-us" onClick={(e) => handleAnchorClick(e, '#why-us')}>Why Choose Us</a></li>
              <li><a href="#portfolio" onClick={(e) => handleAnchorClick(e, '#portfolio')}>Portfolio</a></li>
              <li><a href="#faq" onClick={(e) => handleAnchorClick(e, '#faq')}>FAQ</a></li>
              <li><button onClick={() => setView('privacy')}>Privacy Policy</button></li>
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-4">
            <h4 className="font-bold mb-8 text-lg">Our Location</h4>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-white font-semibold">Main Office</p>
              <p className="text-slate-400 text-sm mt-1">
                101, Nilgiri Apartments,<br />
              Near Nalstop Metro Station, Pune, India.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-bold text-teal-500 uppercase">
                  US Business Hours
                </span>
                <button
                  onClick={() => setView('portal')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Client Portal →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 Raval Solutions.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <button onClick={() => setView('privacy')}>Privacy Policy</button>
            <button onClick={() => setView('privacy')}>Terms</button>
            <span className="bg-slate-900 px-3 py-1 rounded-full">
              ● Server Status: 99.9%
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
