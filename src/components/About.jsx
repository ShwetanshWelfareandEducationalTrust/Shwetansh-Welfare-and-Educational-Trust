import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import img1 from '../assets/swet_work_1.jpg';
import img2 from '../assets/swet_work_2.jpg';
import img3 from '../assets/swet_work_3.jpg';
import img4 from '../assets/swet_work_6.jpg';
import img6 from '../assets/swet_work_8.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const images = [img1, img2, img3, img4, img6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5 }
      }).then(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 }
        });
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [controls, images.length]);

  return (
    <motion.section
      className="py-20 bg-gray-50 relative overflow-hidden"
      id="about"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Animated background bubbles with new accent color */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[10%] top-[15%] w-72 h-72 rounded-full bg-teal-200"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-[5%] bottom-[20%] w-80 h-80 rounded-full bg-teal-300"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.09, 0.04],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-[30%] top-[10%] w-40 h-40 rounded-full bg-teal-100"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 font-medium text-sm mb-4">About Us</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a government-registered organization committed to driving positive change in society through education, welfare, and social initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { number: "01", text: "Government Registered Trust" },
                { number: "02", text: "Community-Based Projects" },
                { number: "03", text: "Education Focused" },
                { number: "04", text: "Social Impact" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 bg-white rounded-xl border-l-4 border-teal-500 shadow-sm"
                >
                  <div className="text-teal-600 font-bold mb-2">{item.number}</div>
                  <div className="text-gray-700 font-medium">{item.text}</div>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-gray-600">
              Empowering society through education and social welfare initiatives. Dedicated to creating a positive social impact, we focus on education, welfare, and addressing critical social issues. Our initiatives are designed to uplift and empower individuals and communities through inclusive participation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative z-10">
              <motion.div
                initial={{ rotate: -3, scale: 0.97 }}
                animate={{ rotate: -3, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -inset-4 bg-teal-200 rounded-xl"
              />
              <motion.div
                initial={{ rotate: 2, scale: 0.97 }}
                animate={{ rotate: 2, scale: 0.97 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute -inset-2 bg-teal-100/50 rounded-xl"
              />
              <div className="relative z-10 rounded-lg shadow-lg w-full h-full overflow-hidden">
                <div className="relative w-full h-full">
                  <motion.div
                    animate={controls}
                    initial={{ opacity: 1 }}
                    className="w-full h-full"
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={`Youth Empowerment ${currentImageIndex + 1}`}
                      className={`w-full h-full transition-transform duration-700 hover:scale-105 ${
                        (images[currentImageIndex] === img4 || images[currentImageIndex] === img6)
                          ? 'object-contain bg-gray-200'
                          : 'object-cover'
                      }`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0.15 }}
                    whileInView={{ opacity: 0.25 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-2xl text-white font-bold mb-2"
                    >
                      Empowering Communities
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="text-white/90 text-center max-w-md"
                    >
                      Creating opportunities through education & welfare
                    </motion.p>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="w-16 h-1 bg-white mt-3 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-0 -right-4 bg-teal-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-xl z-20 shadow-lg"
            >
              <span className="transform -rotate-12">🌱</span>
            </motion.div>
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    controls.start({
                      opacity: 0,
                      transition: { duration: 0.3 }
                    }).then(() => {
                      setCurrentImageIndex(index);
                      controls.start({
                        opacity: 1,
                        transition: { duration: 0.3 }
                      });
                    });
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentImageIndex === index ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 font-medium text-sm mb-4">Our Mission</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Field Of Work</h2>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "🎓", title: "Education-related initiatives", description: "Enhancing learning opportunities for all ages." },
              { icon: "⚖️", title: "Addressing Social Issues", description: "Tackling inequality and injustice." },
              { icon: "🤝", title: "Welfare Programs", description: "Supporting the needy and vulnerable." },
              { icon: "🚀", title: "Youth Empowerment", description: "Unlocking potential for a brighter future." },
              { icon: "💼", title: "Skill Development", description: "Equipping individuals for success." },
              { icon: "👨‍💼", title: "Tackling Unemployment", description: "Creating opportunities through education and training." }
            ].map((field, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 border-t-4 border-teal-500 transition-all"
              >
                <div className="text-4xl mb-4 bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center">{field.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{field.title}</h3>
                <p className="text-gray-600">{field.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;