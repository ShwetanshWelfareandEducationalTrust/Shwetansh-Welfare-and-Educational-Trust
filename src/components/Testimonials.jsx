import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with SWET has been an incredible learning experience. I've developed leadership skills I never knew I had while contributing to meaningful social change.",
      name: "Priya Sharma",
      role: "Content Department",
      location: "Remote"
    },
    {
      quote: "The supportive environment at SWET has helped me grow both professionally and personally. The projects have real impact, and the experience looks great on my resume!",
      name: "Rahul Mehra",
      role: "Technical Department",
      location: "Remote"
    },
    {
      quote: "SWET provided me with hands-on experience in social work while accommodating my college schedule. The skills I've gained have been invaluable for my career development.",
      name: "Aisha Patel",
      role: "Marketing Department",
      location: "Remote"
    }
  ];
  
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">Testimonials</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Participants Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from volunteers and participants in our programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="text-amber-500 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-blue-50 px-6 py-3 rounded-lg text-blue-800 border border-blue-200">
            <span className="font-medium">Join over 100+ volunteers who have transformed their careers while making a difference.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
