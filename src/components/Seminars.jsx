import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Seminars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="bg-blue-800 text-white pt-32 md:pt-40 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 opacity-80"></div>
          <div className="container mx-auto px-4 relative text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
            >
                Seminars by SWET
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-amber-300 opacity-90 italic mb-6"
            >
                "Enriching Minds, Empowering Futures"
            </motion.p>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-blue-100 opacity-80 max-w-3xl mx-auto"
            >
                Join our comprehensive seminar programs designed to bridge the gap between theoretical knowledge and practical application.
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <main>
          {/* About SWET Seminars */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">About</span>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Seminars</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  SWET Seminars are designed to enhance learning experiences and prepare participants for future challenges in their respective fields.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Spark Interest", text: "Generate enthusiasm for emerging technologies" },
                      { title: "Practical Knowledge", text: "Equip students with real-world skills" },
                      { title: "Career Awareness", text: "Build awareness about various career paths" },
                      { title: "Expert Interaction", text: "Connect learners with industry professionals" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                      >
                        <div className="text-blue-700 font-bold mb-1">{item.title}</div>
                        <div className="text-gray-700 text-sm">{item.text}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Seminar Session" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0284c7/ffffff?text=Seminar'; }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Seminar Modes */}
         <section className="py-16 bg-gray-50">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-gray-800 mb-4">Seminar Modes</h2>
             <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
               Our seminars are conducted offline, offering two enriching formats led by experienced professionals.
             </p>
        
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                 <h3 className="text-2xl font-semibold mb-4 text-blue-700">Taken by Industry Experts</h3>
                 <ul className="text-left list-disc pl-6 space-y-2 text-gray-700">
                   <li>Live sessions with real-world insights</li>
                   <li>Case studies from working professionals</li>
                   <li>Career-oriented discussions and tips</li>
                   <li>Hands-on practical exposure</li>
                 </ul>
               </div>
        
               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                 <h3 className="text-2xl font-semibold mb-4 text-blue-700">Taken by SWET Team Experts</h3>
                 <ul className="text-left list-disc pl-6 space-y-2 text-gray-700">
                   <li>Concept-oriented academic sessions</li>
                   <li>Skill-based topic deep dives</li>
                   <li>Preparation for future opportunities</li>
                   <li>Offline participation with certification</li>
                 </ul>
               </div>
             </div>
           </div>
         </section>

          {/* Why Attend */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Attend a SWET Seminar?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Gain valuable knowledge and skills to enhance your future.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "💡", title: "Gain Industry Insights", description: "Learn about emerging technologies and trends from experts" },
                  { icon: "👨‍🏫", title: "Learn from Leaders", description: "Interact with professionals who are leading in their fields" },
                  { icon: "🗣️", title: "Enhance Soft Skills", description: "Develop communication and presentation abilities" },
                  { icon: "📜", title: "Receive Certification", description: "Add valuable credentials to your academic profile" },
                  { icon: "🛣️", title: "Explore Career Paths", description: "Discover new professional opportunities and directions" },
                  { icon: "🤝", title: "Build Connections", description: "Network with like-minded peers and potential mentors" }
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center text-white shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Our Seminars?</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join our upcoming seminars to enhance your knowledge, skills, and future prospects. Contact us for details about upcoming events.
                </p>
                 <a href="/#contact" className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-amber-600 transition-colors">
                    Contact Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Seminars;
