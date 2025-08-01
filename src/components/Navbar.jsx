import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const linkColor = scrolled ? 'text-gray-700' : 'text-white';
  const linkHoverColor = scrolled ? 'hover:text-blue-600' : 'hover:text-white/80';
  const brandTextColor = scrolled ? 'text-blue-700' : 'text-amber-300';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 flex items-center justify-center">
              <img 
                src="/swet.png" 
                alt="SWET Logo" 
                className="h-12 w-12 rounded-full object-cover bg-white"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/ffffff/000000?text=S'; }}
              />
            </div>
            <div className={`font-semibold text-sm md:text-base lg:text-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className={brandTextColor}>Shwetansh</span> Welfare and Educational Trust
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`font-medium transition-colors ${linkColor} ${linkHoverColor}`}>Home</Link>
            <a href="/#about" className={`font-medium transition-colors ${linkColor} ${linkHoverColor}`}>About</a>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`font-medium transition-colors flex items-center ${linkColor} ${linkHoverColor}`}
              >
                Our Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                >
                  <Link to="/webinars" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setServicesDropdownOpen(false)}>Webinars</Link>
                  <Link to="/seminars" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setServicesDropdownOpen(false)}>Seminars</Link>
                  <Link to="/olympiads" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setServicesDropdownOpen(false)}>Olympiads</Link>
                </motion.div>
              )}
            </div>
            
            <Link to="/join-us" className={`font-medium transition-colors ${linkColor} ${linkHoverColor}`}>Join Us</Link>
            <a href="/#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md">
              Contact Us
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white rounded-lg mt-2 shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
              <a href="/#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700" onClick={() => setIsOpen(false)}>About</a>
              
              <div className="block px-3 py-2 rounded-md">
                <p className="text-base font-medium text-gray-700 mb-2">Our Services</p>
                <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                  <Link to="/webinars" className="block py-1 text-sm text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Webinars</Link>
                  <Link to="/seminars" className="block py-1 text-sm text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Seminars</Link>
                  <Link to="/olympiads" className="block py-1 text-sm text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Olympiads</Link>
                </div>
              </div>
              
              <Link to="/join-us" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700" onClick={() => setIsOpen(false)}>Join Us</Link>
              <a href="/#contact" className="block text-center px-3 py-2 rounded-md text-base font-medium bg-amber-500 text-white" onClick={() => setIsOpen(false)}>Contact Us</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
