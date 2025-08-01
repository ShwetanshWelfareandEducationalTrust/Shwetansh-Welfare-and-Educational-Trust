import { motion } from 'framer-motion';

const benefitsList = [
  { icon: "📃", title: "Experience Letter", description: "Receive official documentation of your volunteering experience" },
  { icon: "📜", title: "Authorized Certificate", description: "Get certified recognition for your contributions" },
  { icon: "🚀", title: "Real Projects & Events", description: "Work on meaningful projects with real social impact" },
  { icon: "🌍", title: "National-Level Exposure", description: "Gain experience working with nationwide initiatives" },
  { icon: "💼", title: "Boost Your Resume", description: "Add valuable social sector experience to your profile" },
  { icon: "🎯", title: "Leadership Growth", description: "Develop essential leadership and management skills" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.5
    }
  }
};

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-100" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Why Join Us?</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of Joining</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of something meaningful while building your future
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 border-t-4 border-blue-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Senior Manager Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 bg-white p-8 sm:p-10 rounded-xl shadow-lg max-w-4xl mx-auto border border-gray-200"
        >
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Senior Manager Position</h3>
            <p className="text-amber-500 font-semibold text-lg mt-1">A Premier Leadership Opportunity</p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-blue-600 font-bold text-lg mt-1">1.</div>
              <p className="flex-1">Assume the role of Senior Manager, guiding the core operations and strategy of S.W.E.T.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-blue-600 font-bold text-lg mt-1">2.</div>
              <p className="flex-1">Lead and mentor all project departments, ensuring collaborative success and measurable impact.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-blue-600 font-bold text-lg mt-1">3.</div>
              <p className="flex-1">Act as the primary liaison, representing the organization's mission to partners and stakeholders.</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-amber-400">
            <p className="font-semibold text-gray-800">Career Trajectory:</p>
            <p className="text-gray-600">Remarkable performance in this role can lead to a promotion to Regional Manager, expanding your leadership scope.</p>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="py-6 px-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white inline-block shadow-2xl shadow-blue-500/20">
              <p className="text-xl font-bold mb-2">
                Plus: Performance-Based Stipend up to ₹70,000<sup>*</sup>
              </p>
              <p className="text-sm text-blue-200">*Terms and conditions apply</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;