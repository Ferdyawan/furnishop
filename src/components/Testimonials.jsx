import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    axios.get('https://lumoshive-api-furniture.vercel.app/api/testimonials?page=1&limit=5')
      .then(res => setTestimonials(res.data.testimonials))
      .catch(err => console.error(err));
  }, []);

  const nextTesti = () => {
    setCurrIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTesti = () => {
    setCurrIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const activeTesti = testimonials[currIndex];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            What People Are <br /> Saying About Us
          </h2>
          
          <div className="flex items-center gap-4 mb-8">
            <img src={activeTesti.image} alt={activeTesti.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h4 className="font-bold text-gray-900">{activeTesti.name}</h4>
              <p className="text-sm text-gray-500">{activeTesti.title}</p>
            </div>
          </div>

          <p className="text-gray-600 italic text-lg mb-8 border-l-4 border-furni-dark pl-6">
            "{activeTesti.message}"
          </p>

          <div className="flex gap-4">
            <button onClick={prevTesti} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-furni-dark hover:text-white transition">
              <ArrowLeft size={20} />
            </button>
            <button onClick={nextTesti} className="w-12 h-12 rounded-full bg-furni-green text-white flex items-center justify-center shadow-lg hover:bg-furni-dark transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 w-full">
            <img 
               src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
               alt="Living Room"
               className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;