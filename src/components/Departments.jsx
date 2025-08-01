import { motion } from 'framer-motion';

const departments = [
  { icon: "📱", name: "Social Media", description: "Manage and grow our social presence across platforms" },
  { icon: "🔬", name: "R&D", description: "Research and develop new initiatives and projects" },
  { icon: "💻", name: "Technical", description: "Handle technical projects and provide IT support" },
  { icon: "📢", name: "PR", description: "Manage public relations and communications strategy" },
  { icon: "🎨", name: "Design", description: "Create visual content, branding materials, and graphics" },
  { icon: "🖊", name: "Content", description: "Develop engaging content for all platforms and publications" },
  { icon: "📊", name: "Management", description: "Coordinate projects, lead teams, and ensure efficient operations" },
  { icon: "📈", name: "Marketing", description: "Develop strategies to promote our initiatives and broaden our reach" },
  { icon: "🎓", name: "Volunteering", description: "Coordinate and participate in on-ground volunteer activities" },
  { icon: "🎥", name: "Video Editing", description: "Craft compelling video content and bring ideas to life" },
  { icon: "✒️", name: "Graphic Design", description: "Design eye-catching visuals for digital and print" },
  { icon: "🛎", name: "Front Office", description: "Ensure smooth daily operations and be the first point of contact" }
];

const Departments = () => {
  return (
    <section className="py-20 bg-gray-50" id="departments">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Join Our Team</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Open Departments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Are you passionate about youth empowerment, social welfare, education, and skill development? This is your chance to make a real impact!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:bg-blue-600 hover:-translate-y-1 border border-gray-200"
            >
              <div className="text-4xl mb-4 text-blue-600 group-hover:text-white transition-colors duration-300">{dept.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">{dept.name}</h3>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-300">{dept.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our team to gain valuable experience, enhance your skills, and contribute to meaningful social causes. Our volunteering opportunities provide real-world experience and exposure to social service activities.
          </p>
          <a href="https://forms.gle/TqivSGspxzNXbMDXA" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-10 py-4 rounded-full hover:bg-amber-600 transition-colors font-bold shadow-lg shadow-amber-500/30 hover:shadow-xl"
            >
              Apply Now
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Departments;
