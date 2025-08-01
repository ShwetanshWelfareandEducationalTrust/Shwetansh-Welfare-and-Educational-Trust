import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Webinars = () => {
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
                Webinars by SWET
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-amber-300 opacity-90 italic mb-6"
            >
                "Knowledge That Empowers, Connections That Matter"
            </motion.p>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-blue-100 opacity-80 max-w-3xl mx-auto"
            >
                Join our high-impact virtual events focused on delivering practical knowledge, career insights, and industry exposure in an engaging format.
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <main>
          {/* What Makes SWET Webinars Unique */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                 <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Our Approach</span>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What Makes SWET Webinars Unique?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  SWET webinars are short-format, high-impact virtual events focused on delivering practical knowledge, career insights, and industry exposure in a highly engaging format. These are not just lectures — they're conversations, interactive sessions, and knowledge-exchange experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Expert-Led", text: "Sessions conducted by industry professionals and thought leaders" },
                      { title: "Interactive Format", text: "Engaging discussions rather than one-way presentations" },
                      { title: "Practical Insights", text: "Real-world applications and actionable takeaways" },
                      { title: "Cutting-Edge Topics", text: "Focus on emerging trends and future-ready skills" }
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
                      src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Virtual Webinar Session" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0284c7/ffffff?text=Webinar'; }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Topics Covered */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Topics Covered in SWET Webinars</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our webinars cover a wide range of relevant and cutting-edge topics.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: "💡", title: "Innovation & Startups" },
                  { icon: "🤖", title: "AI & Machine Learning" },
                  { icon: "🌱", title: "Sustainability & Smart Living" },
                  { icon: "🌐", title: "Digital Careers & Freelancing" },
                  { icon: "🧠", title: "Mental Wellness for Youth" },
                  { icon: "👩‍💻", title: "Women in Tech & STEM" },
                  { icon: "📝", title: "Resume & Interview Prep" },
                  { icon: "🚀", title: "Personal Branding" }
                ].map((topic, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                    <div className="text-4xl mb-3">{topic.icon}</div>
                    <h3 className="text-md font-semibold text-gray-800">{topic.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section id="register-section" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center text-white shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Register & Connect With Us!</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Ready to join? Secure your spot for upcoming webinars. Don't miss out on valuable insights and networking opportunities!
                </p>
                <a href="/#contact" className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-amber-600 transition-colors">
                    Contact for Details
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

export default Webinars;
