import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Olympiads = () => {
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
              Shwetansh National Olympiads
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-amber-300 opacity-90 italic mb-6"
            >
              "Challenging Minds, Inspiring Excellence"
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-blue-100 opacity-80 max-w-3xl mx-auto"
            >
              Join our prestigious national-level competitions designed to challenge and nurture young talent across various academic disciplines.
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <main>
          {/* About SWET Olympiads */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">About</span>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our National Olympiads</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  SWET National Olympiads are competitive exams designed to identify and nurture talent while encouraging critical thinking and problem-solving abilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Discover Talent", text: "Identify hidden potential in students" },
                      { title: "Build Confidence", text: "Help students believe in their abilities" },
                      { title: "Academic Growth", text: "Enhance knowledge beyond school curriculum" },
                      { title: "Future Preparation", text: "Develop skills for academic challenges ahead" }
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
                      src="https://images.unsplash.com/photo-1655337690727-5224680c8c07?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Students participating in olympiad"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Olympiad'; }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Olympiad Subjects */}
          <section id="olympiad-subjects" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Olympiad Subjects</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Challenging competitions across key academic disciplines.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Science Olympiad */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Science Olympiad</h3>
                  <p className="text-gray-600 mb-4">Explore scientific concepts, theories, and their practical applications.</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span><span>Physics, Chemistry, and Biology integration</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span><span>Scientific reasoning and experimentation</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span><span>Contemporary scientific developments</span></li>
                  </ul>
                </div>
                
                {/* Workshops */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500">
                  <div className="text-4xl mb-4">🛠️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshops</h3>
                  <p className="text-gray-600 mb-4">Empower students through interactive and practical learning experiences.</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span><span>Hands-on sessions in coding, AI, and robotics</span></li>
                    <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span><span>Soft skills and personality development</span></li>
                    <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span><span>Career guidance and entrepreneurship</span></li>
                  </ul>
                </div>

                {/* English Olympiad */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">English Olympiad</h3>
                  <p className="text-gray-600 mb-4">Enhance language proficiency, grammar, and comprehension skills.</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span><span>Reading comprehension and vocabulary</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span><span>Grammar and language structure</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">•</span><span>Creative writing and composition</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section id="contact-section" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center text-white shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Challenge Yourself?</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of students across India in participating in our National Olympiads and take the first step toward academic excellence and recognition.
                </p>
                <a href="https://forms.gle/TqivSGspxzNXbMDXA" target="_blank" rel="noopener noreferrer">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-amber-600 transition-colors"
                  >
                    Register for Olympiad
                  </motion.button>
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

export default Olympiads;
