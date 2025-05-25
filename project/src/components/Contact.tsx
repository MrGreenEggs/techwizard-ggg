import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get a Quote</h2>
              <p className="text-xl text-gray-700 mb-6">
                Ready to discuss your project? Fill out the form and I'll get back to you within 24 hours.
              </p>
              
              <div className="bg-blue-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Why Choose Me?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                    <span className="text-gray-700">Personalized service tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                    <span className="text-gray-700">Clear communication throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                    <span className="text-gray-700">Fair, transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                    <span className="text-gray-700">Quick response times and efficient service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                    <span className="text-gray-700">Ongoing support after project completion</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Contact Information</h3>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:info@techwizard.com" className="text-blue-600 hover:underline">info@techwizard.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  Phone: <a href="tel:+15555555555" className="text-blue-600 hover:underline">(555) 555-5555</a>
                </p>
                <p className="text-gray-700">
                  Hours: Monday-Friday, 9am-6pm
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Your message has been received. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Request a Quote</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="computer-repair">Computer Repair</option>
                      <option value="data-recovery">Data Recovery</option>
                      <option value="network-setup">Network Setup</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="training">Training</option>
                      <option value="other">Other (please specify in message)</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;