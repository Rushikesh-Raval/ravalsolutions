// import React from 'react';

// const Portfolio = () => {
//   const projects = [
//     {
//       title: 'Heritage Real Estate',
//       category: 'Real Estate',
//       image: 'https://picsum.photos/seed/realestate/600/400',
//       description: 'Lead gen site for a boutique agency in Austin, TX.',
//     },
//     {
//       title: 'Ascend Health & Wellness',
//       category: 'Medical/Service',
//       image: 'https://picsum.photos/seed/medical/600/400',
//       description: 'Clean, professional medical booking platform.',
//       link: 'https://drama-gravy-54041045.figma.site/',
//     },
//     {
//       title: 'TechNexus Startup',
//       category: 'SaaS/Tech',
//       image: 'https://picsum.photos/seed/startup/600/400',
//       description: 'Modern landing page for a SF-based fintech company.',
//     },
//   ];

//   return (
//     <div className="container mx-auto px-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-end mb-12">
//         <div className="max-w-2xl">
//           <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">
//             Portfolio
//           </h2>
//           <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             Latest Work For US Brands
//           </p>
//           <p className="text-slate-600 text-lg">
//             We build for scale and performance across various industries.
//           </p>
//         </div>

//         <a
//           href="#contact"
//           className="hidden md:inline-flex bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-all"
//         >
//           Start Your Project
//         </a>
//       </div>

//       {/* Projects */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {projects.map((project, idx) => {
//           const Wrapper = project.link ? 'a' : 'div';
//           return (
//             <Wrapper
//               key={idx}
//               href={project.link}
//               target={project.link ? '_blank' : undefined}
//               rel={project.link ? 'noopener noreferrer' : undefined} 
//               className="group block"
//             >
//               <div className="overflow-hidden rounded-2xl mb-6 shadow-md border border-slate-100">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               <div className="flex items-center space-x-2 mb-2">
//                 <span className="text-[10px] font-bold tracking-widest text-teal-600 uppercase bg-teal-50 px-2 py-0.5 rounded">
//                   {project.category}
//                 </span>
//               </div>

//               <h3 className="text-xl font-bold text-slate-900 mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-slate-500 leading-relaxed">
//                 {project.description}
//               </p>
//             </Wrapper>
//           );
//         })}
//       </div>

//       {/* CTA */}
//       <div className="mt-16 bg-slate-900 rounded-3xl p-8 lg:p-12 text-center text-white">
//         <h3 className="text-2xl font-bold mb-4">
//           Need a similar website for your business?
//         </h3>
//         <p className="text-slate-400 mb-8 max-w-xl mx-auto">
//           Contact us today and we’ll send a custom proposal within 24 hours.
//         </p>
//         <a
//           href="#contact"
//           className="inline-block bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/30"
//         >
//           Get My Free Proposal
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
