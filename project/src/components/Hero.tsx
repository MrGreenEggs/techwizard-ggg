import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Tech Solutions for <span className="text-blue-300">Every Challenge</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            From web development to hardware repair, I provide comprehensive tech services for businesses and individuals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Quote
            </button>
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </div>
  );
};

export default Hero;