import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const PraxisEdu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const partners = [
    "Mekalsuta College, Dindori"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="bg-brand-600 text-white pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 h-[400px]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Praxis Edu</h1>
                <p className="text-xl opacity-90 italic mb-6">
                  "The Bridge from Theoretical Knowledge to Practical Implementation"
                </p>
                <p className="text-lg opacity-80 max-w-3xl mx-auto">
                  Transforming academic potential into professional mastery through hands-on learning, 
                  real-world projects, and skill-based certification.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Praxis Edu */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">About Us</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Praxis Edu?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A flagship initiative by Shwetansh Welfare & Educational Trust (SWET) designed to transform the educational landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
                    <h3 className="text-xl font-bold text-brand-600 mb-3">🎯 Our Purpose</h3>
                    <p className="text-gray-700">
                      In a world driven by innovation, a degree is only the beginning. The word "Praxis" 
                      signifies the act of engaging, applying, and realizing ideas.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
                    <h3 className="text-xl font-bold text-brand-600 mb-3">🔗 The Missing Link</h3>
                    <p className="text-gray-700">
                      We serve as the vital link between classroom concepts and industry requirements. 
                      While traditional education provides the "Why," Praxis Edu equips students with the "How."
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
                    <h3 className="text-xl font-bold text-brand-600 mb-3">💪 Our Mission</h3>
                    <p className="text-gray-700">
                      Empower the youth by turning academic potential into professional mastery through 
                      hands-on learning, real-world projects, and skill-based certification.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-brand-50 rounded-xl transform rotate-3"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                      alt="Students Learning Together"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">From Theory to Practice</h3>
                      <p className="text-white/90">Bridging the gap between academic learning and industry-standard execution</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Our Programs</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Offerings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are currently curating a high-impact curriculum designed to meet the demands of the modern professional world
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 rounded-xl p-8 md:p-12 text-white text-center shadow-xl"
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
                <p className="text-lg mb-6 opacity-90">
                  Our upcoming programs will focus on bridging the gap between academic learning 
                  and industry-standard execution.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                  <p className="text-white/90 mb-4 font-medium">
                    Stay tuned! We are preparing to launch our first phase of:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl mb-2">📚</div>
                      <p className="font-semibold">Specialized Workshops</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl mb-2">🎓</div>
                      <p className="font-semibold">Industry Certifications</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* What to Expect */}
              <motion.div
                variants={itemVariants}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-4">🛠️</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Hands-On Learning</h4>
                  <p className="text-gray-600 text-sm">Practical projects that mirror real-world challenges</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Mentorship</h4>
                  <p className="text-gray-600 text-sm">Learn from industry professionals and experienced educators</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Recognized Certifications</h4>
                  <p className="text-gray-600 text-sm">Credentials that add value to your professional profile</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Institutional Partnerships */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Partnerships</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Institutional Partnerships</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Collaboration is at the heart of what we do. By partnering with forward-thinking educational 
                institutions, we bring practical excellence directly to the student community.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-xl p-8 shadow-md mb-8"
              >
                <h3 className="text-2xl font-bold text-brand-700 mb-6 text-center">Our Partner Institutions</h3>
                <div className="space-y-4">
                  {partners.map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4"
                    >
                      <div className="bg-brand-500 p-3 rounded-full text-white text-xl flex-shrink-0">
                        🎓
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{partner}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-brand-500 p-6 rounded-lg text-center text-white"
                  >
                    <p className="text-lg font-semibold mb-2">Many more prestigious partnerships coming soon...</p>
                    <p className="text-sm opacity-90">We're continuously expanding our network to reach more students</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Partner With Us?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-brand-500 font-bold">✓</div>
                    <p className="text-gray-700">Industry-aligned curriculum and training</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-brand-500 font-bold">✓</div>
                    <p className="text-gray-700">Enhanced employability for your students</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-brand-500 font-bold">✓</div>
                    <p className="text-gray-700">Access to expert mentors and trainers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-brand-500 font-bold">✓</div>
                    <p className="text-gray-700">Practical skill development programs</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-16 bg-brand-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Involved</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Whether you are a student looking to upskill or an institution seeking to empower 
                  your learners, Praxis Edu is your gateway to practical excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/#footer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-brand-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Contact Us for Inquiries
                    </motion.button>
                  </a>
                  
                  <a href="/join-us">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-600 transition-all"
                    >
                      Join the SWET Community
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PraxisEdu;
