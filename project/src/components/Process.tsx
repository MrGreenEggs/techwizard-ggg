import React from 'react';
import { MessageSquare, FileText, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pricing Philosophy</h2>
          <p className="text-xl text-gray-700">
            Pricing is tailored to project scope—no job too small or too large. Each solution is customized to your specific needs and budget.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {/* Step 1 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Discuss</h3>
                <p className="text-gray-700">
                  We start with a detailed conversation about your needs, challenges, and goals. This helps me understand exactly what you're looking for.
                </p>
              </div>
              
              <div className="relative md:w-0 mx-auto flex justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg z-10">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>Identify key requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>Clarify technical constraints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>Establish timeline expectations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-none">
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start md:justify-end">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2 md:order-2"></span>
                    <span className="md:mr-2">Develop a detailed solution</span>
                  </li>
                  <li className="flex items-start md:justify-end">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2 md:order-2"></span>
                    <span className="md:mr-2">Consider multiple approaches</span>
                  </li>
                  <li className="flex items-start md:justify-end">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2 md:order-2"></span>
                    <span className="md:mr-2">Prioritize value and efficiency</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative md:w-0 mx-auto flex justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg z-10">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Plan</h3>
                <p className="text-gray-700">
                  I'll create a detailed plan outlining the proposed solution, approach, timeline, and investment required to achieve your goals.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Quote</h3>
                <p className="text-gray-700">
                  You'll receive a clear, detailed quote based on the scope of work. No hidden fees or surprises—just transparent pricing.
                </p>
              </div>
              
              <div className="relative md:w-0 mx-auto flex justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg z-10">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>Transparent pricing breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>Payment options and schedule</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span>No obligation to proceed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;