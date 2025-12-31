import React, { useState, useEffect } from 'react';

const Header = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', type: 'view', value: 'services' },
    { name: 'Portfolio', type: 'anchor', value: '#portfolio' },
    { name: 'Why Us', type: 'anchor', value: '#why-us' },
    { name: 'FAQ', type: 'anchor', value: '#faq' },
  ];

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false);

    if (link.type === 'view') {
      setView(link.value);
    } else {
      if (currentView !== 'home') {
        setView('home');
        setTimeout(() => {
          const target = document.querySelector(link.value);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        const target = document.querySelector(link.value);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => {
            setView('home');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-xl font-bold text-slate-900">
            Raval<span className="text-teal-600">Solutions</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`text-sm font-medium transition-colors ${
                currentView === link.value
                  ? 'text-teal-600'
                  : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() =>
              handleNavClick({
                name: 'Contact',
                type: 'anchor',
                value: '#contact',
              })
            }
            className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 shadow-md"
          >
            Get a Free Audit
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className="text-lg font-semibold text-slate-900 text-left"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() =>
              handleNavClick({
                name: 'Contact',
                type: 'anchor',
                value: '#contact',
              })
            }
            className="bg-teal-500 text-white py-4 rounded-xl font-bold"
          >
            Get a Free Audit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
