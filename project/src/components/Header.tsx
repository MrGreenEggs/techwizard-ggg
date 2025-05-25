import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, Cpu, Globe, Shield, Lightbulb, GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceCategories = [
    { name: 'Web Development', icon: <Globe className="h-5 w-5" /> },
    { name: 'Hardware Support', icon: <Cpu className="h-5 w-5" /> },
    { name: 'Networking', icon: <Monitor className="h-5 w-5" /> },
    { name: 'Security', icon: <Shield className="h-5 w-5" /> },
    { name: 'Consulting', icon: <Lightbulb className="h-5 w-5" /> },
    { name: 'Training', icon: <GraduationCap className="h-5 w-5" /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-800' : 'text-white'}`}>
              TechWizard
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {serviceCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => scrollToSection('services')}
                className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex">
            <button
              onClick={scrollToContact}
              className={`${
                scrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              } px-6 py-2 rounded-lg font-medium transition-all duration-300`}
            >
              Get a Quote
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-blue-800' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-fade-in-down">
          <div className="py-4 px-4 space-y-4">
            {serviceCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => scrollToSection('services')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 w-full py-2"
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
            <button
              onClick={scrollToContact}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;