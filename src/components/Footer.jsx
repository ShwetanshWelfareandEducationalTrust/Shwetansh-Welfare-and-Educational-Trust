import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/swet.png" 
                alt="SWET Logo" 
                className="h-12 w-12 rounded-full object-cover bg-white"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/ffffff/000000?text=S'; }}
              />
              <div className="font-bold text-xl text-gray-200">
                <span className="text-amber-400">Shwetansh</span> Welfare and Educational Trust
              </div>
            </div>
            <p className="text-gray-400 mb-2">
              Empowering Youth, Transforming Futures.
            </p>
            <p className="text-gray-400 mb-6">
              Driving positive change through education and social welfare initiatives.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/privacy_policy" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/refund_policy" className="text-gray-400 hover:text-amber-400 transition-colors">Refund Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="/join-us" className="text-gray-400 hover:text-amber-400 transition-colors">Join Us</a></li>
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Connect With Us</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="space-y-4">
                {/* Contact Items */}
                <a href="https://wa.me/918989973328" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full text-gray-400 group-hover:text-amber-400 group-hover:bg-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  </div>
                  <h4 className="font-semibold text-gray-300 group-hover:text-white transition-colors">+91 89899 73328</h4>
                </a>
                
                <a href="mailto:shwetanshwelfareeducational@gmail.com" className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full text-gray-400 group-hover:text-amber-400 group-hover:bg-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                  </div>
                  <h4 className="font-semibold text-gray-300 group-hover:text-white transition-colors break-all">shwetanshwelfareeducational@gmail.com</h4>
                </a>
                
                <a href="https://www.linkedin.com/company/shwetansh-welfare-and-educational-trust/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-full text-gray-400 group-hover:text-amber-400 group-hover:bg-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </div>
                  <h4 className="font-semibold text-gray-300 group-hover:text-white transition-colors">LinkedIn</h4>
                </a>

              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shwetansh Welfare and Educational Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
