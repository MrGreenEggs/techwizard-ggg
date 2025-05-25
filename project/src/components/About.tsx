import React from 'react';
import { Clock, ThumbsUp, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-700 mb-8">
            With over 10 years of experience in all things tech, I offer expert solutions for businesses and individuals.
            My approach combines technical expertise with clear communication to solve your technology challenges efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">Fast & Efficient</h3>
            <p className="text-gray-600 text-center">
              Quick turnaround times without sacrificing quality. I value your time and work efficiently to meet deadlines.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <ThumbsUp className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">Expert Solutions</h3>
            <p className="text-gray-600 text-center">
              Leveraging years of experience and continuous learning to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">Reliable Support</h3>
            <p className="text-gray-600 text-center">
              Ongoing support and maintenance to ensure your technology continues to work flawlessly for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;