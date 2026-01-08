import React, { useState, useEffect } from "react";


const PolicyPage = () => {
  const [activeSection, setActiveSection] = useState("privacy-policy");

  // Handle intersection observer for sticky navigation highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    const sectionIds = [
      "privacy-policy",
      "data-collection",
      "third-parties",
      "terms-of-service",
      "intellectual-property",
      "liability",
      "compliance",
    ];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // --- Internal Helper Components ---

  const SectionHeader = ({ title, id }) => (
    <h2
      id={id}
      className="text-3xl font-extrabold text-slate-900 mt-16 mb-8 tracking-tight border-b border-slate-100 pb-4 scroll-mt-24"
    >
      {title}
    </h2>
  );

  const SubHeader = ({ title }) => (
    <h3 className="text-xl font-bold text-slate-800 mt-10 mb-5 leading-tight">
      {title}
    </h3>
  );

  const Paragraph = ({ children }) => (
    <p className="text-slate-600 leading-relaxed mb-6 text-lg">{children}</p>
  );

  const CheckList = ({ items }) => (
    <ul className="space-y-4 mb-8 ml-2 list-none text-slate-600 text-lg">
      {items.map((item, index) => {
        const parts = item.split(":");
        return (
          <li key={index} className="flex items-start">
            <span className="text-teal-600 mr-3 mt-1.5 shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              {parts.length > 1 ? (
                <>
                  <strong className="text-slate-900 font-semibold">
                    {parts[0]}:
                  </strong>
                  <span className="ml-1">{parts.slice(1).join(":")}</span>
                </>
              ) : (
                item
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );

  const NavItem = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={"block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border-l-2 text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-900"}
      // ------------------
      //  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border-l-2 ${
      //   activeSection === id
      //     ? "bg-teal-50 text-teal-700 border-teal-600 translate-x-1"
      //     : "text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-900"
      // }`}
      // -------------------
    >
      {label}
    </a>
  );

  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* 1. Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Transparency & Trust
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
              Policies & <span className="text-teal-600">Legal</span>{" "}
              Information
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              Caspian Digitals operates with full transparency. Our legal documents
              ensure a secure, professional, and predictable partnership for all
              our clients.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4">
                Documentation
              </h4>
              <NavItem id="privacy-policy" label="Privacy Policy" />
              <NavItem id="data-collection" label="Data Collection" />
              <NavItem id="third-parties" label="Third-Party Tools" />
              <NavItem id="terms-of-service" label="Terms of Service" />
              <NavItem
                id="intellectual-property"
                label="Intellectual Property"
              />
              <NavItem id="liability" label="Liability & Claims" />
              <NavItem id="compliance" label="Compliance Standards" />

              {/* <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-teal-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                    Support
                  </p>
                  <p className="text-white text-sm font-medium leading-relaxed mb-6">
                    Need a custom NDA or Master Services Agreement?
                  </p>
                  <button className="w-full py-4 bg-teal-600 text-white text-xs font-bold rounded-xl hover:bg-teal-500 transition-colors shadow-lg shadow-teal-600/20">
                    Contact Legal Team
                  </button>
                </div>
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
              </div> */}
            </div>
          </aside>

          {/* Main Content Column */}
          <main className="lg:w-3/4 max-w-3xl">
            {/* PRIVACY POLICY */}
            <section id="privacy-policy">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
                Updated June 2024
              </div>
              <SectionHeader title="Privacy Policy" id="privacy-policy" />
              <Paragraph>
                Your privacy is of paramount importance to us. This Privacy
                Policy outlines how Caspian Digitals ("we", "us", or "our") collects,
                uses, and protects your personal information when you interact
                with our website and services. We comply with global best practices for
                privacy management.
              </Paragraph>
              <Paragraph>
                We believe in data minimalism. We only collect the information
                absolutely necessary to deliver high-quality web development
                services and maintain a professional relationship with our
                clients.
              </Paragraph>
            </section>

            <section id="data-collection">
              <SubHeader title="Information We Collect" />
              <Paragraph>
                We collect information that allows us to provide a high-end
                service experience. This is primarily obtained through direct
                communication or automated technical logs.
              </Paragraph>
              <CheckList
                items={[
                  "Contact Information: Name, business email, and company details provided via inquiry forms.",
                  "Technical Data: IP addresses, browser types, and device information used for performance monitoring.",
                  "Project Data: Requirements, brand assets, and technical documentation shared during the project lifecycle.",
                  "Invoicing Data: Billing addresses and contact information for financial processing.",
                ]}
              />
            </section>

            <section id="third-parties">
              <SubHeader title="Third-Party Tools" />
              <Paragraph>
                To deliver enterprise-grade results, we utilize trusted
                third-party providers. 
              </Paragraph>
              <CheckList
                items={[
                  "Cloud Infrastructure: Vercel, AWS, or Google Cloud for secure deployment.",
                  "Analytics: Google Analytics for monitoring traffic patterns (anonymized).",
                  "Project Management: Slack, Notion, and Jira for collaboration data.",
                  "Finance: Paypal, Razorpay, Stripe for secure, PCI-compliant payment processing.",
                ]}
              />
            </section>

            {/* TERMS OF SERVICE */}
            <section id="terms-of-service">
              <SectionHeader title="Terms of Service" id="terms-of-service" />
              <Paragraph>
                By engaging Caspian Digitals for your web development needs, you agree
                to the following terms. These terms are designed to protect both
                our agency and our clients, ensuring a clear understanding of
                responsibilities and deliverables.
              </Paragraph>

              <SubHeader title="Scope & Deliverables" />
              <Paragraph>
                All services are strictly defined in a mutually signed Statement
                of Work (SOW). Any additions to the scope after project kickoff
                will be handled through a formal Change Order process. We commit
                to delivering high-performance, bug-free code that meets the
                agreed specifications.
              </Paragraph>
            </section>

            <section id="intellectual-property">
              <SubHeader title="Intellectual Property" />
              <Paragraph>
                IP ownership is transferred to the client upon receipt of final
                payment for the project.
              </Paragraph>
              <CheckList
                items={[
                  "Client Ownership: You own all custom source code, designs, and visual assets created for your specific project.",
                  "Agency Retentions: We retain ownership of our pre-existing proprietary tools, frameworks, and generic code modules.",
                  "Promotion: Unless prohibited by an NDA, the client grants us a non-exclusive license to showcase the work in our agency portfolio if needed.",
                ]}
              />
            </section>

            <section id="liability">
              <SubHeader title="Limitation of Liability" />
              <Paragraph>
                Caspian Digitals warrants that work will conform to specifications for
                30 days post-launch. After this period, maintenance is the
                responsibility of the client unless a support agreement is in
                place.
              </Paragraph>
              <Paragraph>
                Our total liability for any claim arising out of our services is
                limited to the total amount paid by the client for the specific
                project phase in question.
              </Paragraph>
            </section>

            <section id="compliance">
              <SectionHeader title="Compliance & Security" id="compliance" />
              <div className="bg-teal-50 border border-teal-100 rounded-3xl p-10 mb-16 shadow-inner">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-teal-600 rounded-2xl shadow-xl shadow-teal-600/30 shrink-0">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                      Security Standards
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Our internal processes are designed to be compliant with
                      GDPR, CCPA, and industry security standards. We implement
                      SSL encryption, multi-factor authentication, and regular
                      code audits to ensure your project data remains secure at
                      all times.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA Card */}
            {/* <section className="mt-24 mb-20 text-center">
              <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                    Clarify your concerns.
                  </h2>
                  <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                    Legal clarity is the foundation of a successful digital
                    partnership. Contact our team today if you have specific
                    questions regarding our data policies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-12 py-5 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-2xl transition-all shadow-xl shadow-teal-500/20 transform hover:-translate-y-1 active:scale-95">
                      Contact Legal Support
                    </button>
                    <button className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all backdrop-blur-sm">
                      Read FAQ
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
              </div>
              {/* <p className="mt-12 text-slate-400 text-sm font-medium">
                &copy; {new Date().getFullYear()} Caspian Digitals Brand Of Raval Solutions. All
                rights reserved.
              </p> */}
            {/* </section>  */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
