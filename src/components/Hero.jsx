import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-bl-[100px] hidden lg:block"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span>Now Accepting New Clients in the US</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
            Websites That Turn{' '}
            <span className="text-teal-600">Clicks Into Clients.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Professional web development for US small businesses and startups.
            We build fast, secure, and high-conversion websites that grow your
            bottom line.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/20 text-center"
            >
              Get a Free Consultation
            </a>
            <a
              href="#portfolio"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all text-center"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-10 flex items-center space-x-6 text-sm text-slate-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              Fast Delivery
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              US-Based Support
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://picsum.photos/seed/webagency/800/600"
              alt="Professional Website Mockup"
              className="rounded-lg w-full h-auto grayscale-[0.2]"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-bold text-slate-400">PERFORMANCE</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">99/100</div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                Lighthouse Score
              </p>
            </div>
          </div>

          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
