import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "Bright Ideas Marketing",
      text: "Working with TechWizard transformed our online presence. The website they built not only looks fantastic but has dramatically increased our lead generation. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Thompson",
      position: "Owner",
      company: "Thompson Law Firm",
      text: "After struggling with IT issues for months, I finally found TechWizard. They quickly diagnosed our network problems and implemented a solution that has kept everything running smoothly. Responsive, knowledgeable, and fair pricing.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Operations Manager",
      company: "Evergreen Retail",
      text: "TechWizard helped us migrate our entire inventory system to the cloud. The process was smooth, and they provided excellent training for our staff. Their ongoing support has been invaluable as we've grown.",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Freelance Photographer",
      company: "Wilson Photography",
      text: "As a small business owner, I needed a website that would showcase my portfolio without breaking the bank. TechWizard delivered exactly what I needed at a price I could afford. They even taught me how to update it myself!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-blue-100">
            Don't just take my word for it. Here's what my clients have to say.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex || (currentIndex === 0 && index === testimonials.length - 1)
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic text-blue-100">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-blue-300">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-blue-700 hover:bg-blue-600 rounded-full p-2 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-blue-700 hover:bg-blue-600 rounded-full p-2 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;