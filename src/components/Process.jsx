import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      title: "Project Overview",
      description: "Clear goals and expected outcomes for each project",
      icon: "🎯"
    },
    {
      title: "Team Assignment",
      description: "Join specialized teams with defined roles",
      icon: "👥"
    },
    {
      title: "Project Guidelines",
      description: "Detailed instructions for successful completion",
      icon: "📋"
    },
    {
      title: "Target-Based Tasks",
      description: "Focused assignments with clear timelines",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">How We Work</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We run multiple ongoing and upcoming projects related to education and welfare. Before any project begins, you'll be provided with detailed instructions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-blue-200 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-blue-500 transform -translate-y-1/2"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Work Process Details */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-blue-100 text-gray-800">Our Work Approach</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-lg mt-1">✓</span>
                <p className="text-gray-700">Clear communication is maintained throughout the project</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-lg mt-1">✓</span>
                <p className="text-gray-700">Focused and goal-oriented workflow</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-lg mt-1">✓</span>
                <p className="text-gray-700">Each member receives specific instructions and goals</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-lg mt-1">✓</span>
                <p className="text-gray-700">Our workflow is organized with target-based assignments</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-blue-100 text-gray-800">Stipend Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="font-bold text-blue-600">1.</span>
                <div>
                  <h4 className="font-medium text-gray-800">Target-Based</h4>
                  <p className="text-gray-700">Stipends are performance-based, not monthly</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-blue-600">2.</span>
                <div>
                  <h4 className="font-medium text-gray-800">Transparent</h4>
                  <p className="text-gray-700">Details shared upfront before starting the project</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-blue-600">3.</span>
                <div>
                  <h4 className="font-medium text-gray-800">Performance-Based</h4>
                  <p className="text-gray-700">Provided only upon completion of assigned targets</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Probationary Period */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white border border-blue-100 p-8 rounded-xl max-w-3xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Probationary Period</h3>
            <p className="text-blue-600">Every new joiner goes through a 20-day probationary period</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">20-Day Period</h4>
              <p className="text-sm text-gray-600">Opportunity for evaluation and understanding</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏅</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Experience Certificate</h4>
              <p className="text-sm text-gray-600">You'll receive a certificate regardless of continuation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Learn & Contribute</h4>
              <p className="text-sm text-gray-600">Grow from the beginning by understanding our processes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
