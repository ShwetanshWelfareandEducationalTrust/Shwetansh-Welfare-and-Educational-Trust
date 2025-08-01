import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const JoinUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };


  // Benefits Data
  const benefitsList = [
    { icon: "📃", title: "Experience Letter", description: "Receive official documentation of your volunteering experience with SWET that validates your contributions and skills gained" },
    { icon: "📜", title: "Authorized Certificate", description: "Get certified recognition for your contributions that enhances your academic and professional portfolio" },
    { icon: "🚀", title: "Real Projects & Events", description: "Work on meaningful projects with real social impact across education, welfare, and community development" },
    { icon: "🌍", title: "National-Level Exposure", description: "Gain experience working with nationwide initiatives that address pressing social issues" },
    { icon: "💼", title: "Boost Your Resume", description: "Add valuable social sector experience to your profile that stands out to academic institutions and employers" },
    { icon: "🎯", title: "Leadership Growth", description: "Develop essential leadership and management skills through project ownership and team collaboration" },
    { icon: "🔄", title: "Flexible Work Schedule", description: "Contribute based on your availability with options for part-time and remote volunteering" },
    { icon: "🤝", title: "Mentorship Opportunities", description: "Learn from experienced professionals and develop a strong professional network" }
  ];

  // Departments Data
  const departments = [
    { icon: "�", name: "Social Media", description: "Manage and grow our social presence across platforms, create engaging content, and build our online community" },
    { icon: "🔬", name: "R&D", description: "Research and develop new initiatives, analyze social issues, and design innovative solution frameworks" },
    { icon: "💻", name: "Technical", description: "Handle technical projects, provide IT support, develop applications, and maintain digital infrastructure" },
    { icon: "📢", name: "PR", description: "Manage public relations, develop communications strategy, and build partnerships with organizations" },
    { icon: "🎨", name: "Design", description: "Create visual content, branding materials, and graphics for digital and print communications" },
    { icon: "🖊", name: "Content", description: "Develop engaging content for all platforms, publications, and educational materials" },
    { icon: "📊", name: "Management", description: "Coordinate projects, lead teams, and ensure efficient operations across all initiatives" },
    { icon: "📈", name: "Marketing", description: "Develop strategies to promote initiatives, broaden reach, and maximize community impact" },
    { icon: "🎓", name: "Volunteering", description: "Coordinate and participate in on-ground volunteer activities, outreach programs, and community events" },
    { icon: "🎥", name: "Video Editing", description: "Craft compelling video content, create educational materials, and document our impact through visual storytelling" },
    { icon: "✒️", name: "Graphic Design", description: "Design eye-catching visuals, layouts, and brand assets for digital platforms, social media, and print materials" },
    { icon: "🛎", name: "Front Office", description: "Ensure smooth daily operations, be the first point of contact for visitors, and coordinate administrative tasks" }
  ];

  // Process steps
  const steps = [
    { title: "Application", description: "Complete our online application form with your details and area of interest", icon: "📝" },
    { title: "Initial Screening", description: "Brief assessment of your skills and alignment with our mission", icon: "🔍" },
    { title: "Onboarding", description: "Orientation to our mission, values, and working procedures", icon: "🚪" },
    { title: "20-Day Probation", description: "Initial period of engagement with defined tasks and feedback", icon: "⏱️" }
  ];

  // FAQ Data
  const faqs = [
    { question: "What kind of projects does SWET work on?", answer: "We work on education initiatives, welfare programs, skill development, and social issues like unemployment and inequality. Our projects range from community awareness campaigns to educational workshops and welfare distribution programs." },
    { question: "How much time commitment is required?", answer: "The time commitment varies by role and project. We have flexible options to accommodate different schedules, typically ranging from 5-15 hours per week. We understand that volunteers have other commitments and work with you to find a suitable schedule." },
    { question: "Is there any fee to join as a volunteer?", answer: "Yes, there is a registration fee of Rs. 210 to join as a volunteer. This fee supports our administrative costs and resources needed to make a meaningful impact. This fee is non-refundable as mentioned in our refund policy." },
    { question: "Can I join from anywhere in India?", answer: "Yes, many of our positions are remote-friendly, allowing participation from anywhere in India. We leverage digital tools for collaboration, making it possible for volunteers across the country to contribute meaningfully." },
    { question: "What qualifications do I need to volunteer?", answer: "While specific roles may require certain skills, our main requirements are commitment, enthusiasm, and alignment with our mission. We welcome volunteers from diverse backgrounds and provide necessary training for your role." },
    { question: "How is the stipend determined?", answer: "Stipends are target-based, not monthly. The amount depends on your role, performance, and project outcomes. Clear details are shared upfront before starting any project to ensure transparency." },
    { question: "Will I receive a certificate after volunteering?", answer: "Yes, all volunteers receive an official experience certificate after completing their term, regardless of whether they continue with us. The certificate details your role, duration, and key contributions." }
  ];

  // Container variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white pt-32 md:pt-40 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 opacity-80"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Join Our Mission
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-amber-300 opacity-90 italic mb-6"
              >
                "Be the Change You Want to See in the World"
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-blue-100 opacity-80 max-w-3xl mx-auto"
              >
                Become part of Shwetansh Welfare and Educational Trust to make a meaningful impact while developing valuable skills and experiences for your future.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <a 
                  href="https://forms.gle/TqivSGspxzNXbMDXA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-amber-600 transition-colors"
                >
                  Apply Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Our Impact</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Make a Difference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a community of changemakers working to create positive social change across India
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-5xl mx-auto">
              <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-sm md:text-base text-gray-700">Volunteers Nationwide</p>
              </div>
              <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-sm md:text-base text-gray-700">Active Projects</p>
              </div>
              <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-sm md:text-base text-gray-700">Lives Impacted</p>
              </div>
              <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-sm md:text-base text-gray-700">Indian States Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50" id="benefits">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Why Join Us?</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Joining</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be part of something meaningful while building your future
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {benefitsList.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border-t-4 border-blue-600 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-16 bg-white" id="departments">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Join Our Team</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Open Departments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate about social change? Find your place with us and make a real impact!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all group hover:bg-blue-600 hover:-translate-y-1 border border-gray-200"
                >
                  <div className="text-4xl mb-4 text-blue-600 group-hover:text-white transition-colors duration-300">{dept.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">{dept.name}</h3>
                  <p className="text-gray-600 text-sm group-hover:text-blue-100 transition-colors duration-300">{dept.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50" id="process">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">How We Work</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From application to becoming a valued team member, here's what to expect.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md z-10 relative border border-gray-200">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-blue-200 transform -translate-y-1/2">
                      <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-blue-500 transform -translate-y-1/2"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white" id="faq">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">FAQs</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Common Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about joining our team.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-6">
                     <button 
                        onClick={() => toggleFaq(index)}
                        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <span className={`ml-2 text-2xl text-blue-600 font-light transform transition-transform duration-300 ${activeFaq === index ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                    {activeFaq === index && (
                       <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="text-gray-600"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of changemakers today and be part of something bigger than yourself.
            </p>
            <a 
              href="https://forms.gle/TqivSGspxzNXbMDXA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-amber-600 transition-colors inline-block"
            >
              Start Your Journey
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default JoinUs;
