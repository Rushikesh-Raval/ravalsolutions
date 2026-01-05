import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ClientPortal from './components/ClientPortal';
// import PrivacyPolicy from './components/PrivacyPolicy';
import PolicyPage from './components/PolicyPage';
import ServicesPage from './components/ServicesPage';

const App = () => {
  const [view, setView] = useState('home');

  const navigateTo = (newView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Header setView={navigateTo} currentView={view} />

      <main>
        {view === 'home' ? (
          <>
            <section id="hero">
              <Hero />
            </section>

            <TrustSignals />

            <section id="services" className="py-20">
              <Services setView={navigateTo} />
            </section>

            <section id="why-us" className="bg-slate-50 py-20">
              <WhyUs />
            </section>

            <section id="portfolio" className="py-20">
              <Portfolio />
            </section>

            <section id="contact" className="bg-slate-900 py-20 text-white">
              <LeadForm />
            </section>

            <section id="faq" className="py-20">
              <FAQ />
            </section>
          </>
        ) : view === 'services' ? (
          <ServicesPage setView={navigateTo} />
        ) : view === 'portal' ? (
          <ClientPortal />
        ) : (
          <PolicyPage />
        )}
      </main>

      <Footer setView={navigateTo} />
    </div>
  );
};

export default App;
