import React from 'react';

const ClientPortal = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-3xl">F</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Client Portal</h2>
            <p className="text-slate-500 mt-2">
              Manage your active projects and support tickets
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Client Email
              </label>
              <input
                type="email"
                placeholder="email@company.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-teal-600 hover:text-teal-700"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg transform active:scale-[0.98]">
              Login to Dashboard
            </button>

          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Access is restricted to current clients. Need help? <br />
              <a
                href="mailto:support@frontierdigital.agency"
                className="text-teal-600 font-bold hover:underline"
              >
                Contact your project manager
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
