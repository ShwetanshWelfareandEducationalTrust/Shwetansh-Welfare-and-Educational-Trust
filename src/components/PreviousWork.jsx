import { motion } from 'framer-motion';

const PreviousWork = () => {
  const previousProjects = [
    {
      title: "Education and Learning Events",
      description: "Organized interactive educational workshops for underprivileged children in Bhopal, featuring group reading sessions and distribution of notebooks, storybooks, and educational materials.",
      image: "/swet_work_4.jpg",
      category: "Education"
    },
    {
      title: "COVID-19 Food Relief Efforts",
      description: "During the COVID-19 pandemic, the SWET Team provided food to people in hospitals who faced food shortages. For 2-3 years, when most services were closed, our volunteers ensured meals reached those in need.",
      image: "/swet_work_5.jpg",
      category: "Relief"
    },
    {
      title: "Community Outreach & Engagement",
      description: "Involvement of local women volunteers and mothers on site helped foster trust and inclusivity. Adult participants were engaged in distributing supplies and supporting children.",
      image: "/swet_work_3.jpg",
      category: "Community"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" id="previous-work">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[5%] top-[15%] w-64 h-64 rounded-full bg-blue-200"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-[10%] bottom-[20%] w-80 h-80 rounded-full bg-blue-300"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Our Impact</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Previous Work & Impact Highlights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our initiatives making a difference in communities across India.
          </p>
        </div>
        
        {/* Previous Work - Card Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {previousProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group h-full flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/0284c7/ffffff?text=${project.category}`; }}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our work spans across education, welfare, and community development, touching thousands of lives. These initiatives represent our commitment to creating positive change.
          </p>
          
          <a href="/join-us" className="inline-flex items-center text-blue-600 font-semibold group">
            <span>Be part of our future initiatives</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousWork;
