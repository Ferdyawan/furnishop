import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://lumoshive-api-furniture.vercel.app/api/category')
      .then(res => setCategories(res.data.category))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="bg-furni-gray py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">New In <br /> Store Now</h2>
          <p className="text-gray-500 mb-6 text-sm">Get the latest items immediately with promo prices</p>
          <a href="#" className="flex items-center gap-2 font-bold underline decoration-2 underline-offset-4 hover:text-furni-green transition">
            Check All <ArrowRight size={18} />
          </a>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 4).map((cat, idx) => (
            <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-bold text-xl drop-shadow-md">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;