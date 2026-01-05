import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSignals from "./components/TrustSignals";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ClientPortal from "./components/ClientPortal";
import PolicyPage from "./components/PolicyPage";
import ServicesPage from "./components/ServicesPage";
import CancellationRefundPage from "./components/CancellationAndRefund";

const App = () => {
  const [view, setView] = useState("home");

  const navigateTo = (newView) => {
    setView(newView);
    window.history.pushState(
      { view: newView },
      "",
      newView === "home" ? "/" : `/${newView}`
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (path) {
      setView(path);
    } else {
      setView("home");
    }

    const handlePopState = (event) => {
      if (event.state?.view) {
        setView(event.state.view);
      } else {
        setView("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Header setView={navigateTo} currentView={view} />

      <main>
        {view === "home" ? (
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
        ) : view === "services" ? (
          <ServicesPage setView={navigateTo} />
        ) : view === "portal" ? (
          <ClientPortal />
        ) : view === "cancellation and refunds" ? (
          <CancellationRefundPage />
        ) : (
          <PolicyPage />
        )}
      </main>

      <Footer setView={navigateTo} />
    </div>
  );
};

export default App;
