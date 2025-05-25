import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">TechWizard</h3>
            <p className="text-gray-400 mb-4">
              Providing expert tech solutions for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Hardware Support</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Networking</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Security</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Consulting</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors duration-300">Process</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tech Street</li>
              <li>Anytown, ST 12345</li>
              <li>info@techwizard.com</li>
              <li>(555) 555-5555</li>
              <li>Monday-Friday: 9am-6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} TechWizard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;