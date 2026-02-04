import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://lumoshive-api-furniture.vercel.app/api/products?page=1&limit=8')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-24 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Product</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          The products we provide only for you as our service are selected from the best products with number 1 quality in the world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
        {products.map((item) => (
          <div key={item.id} className="group relative bg-white rounded-xl md:rounded-2xl p-3 md:p-4 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
            
            <div className="h-36 md:h-60 bg-[#F8F8F8] rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center mb-3 md:mb-4 relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply p-2 md:p-4" />
              
              <button className="absolute bottom-0 right-0 bg-furni-dark text-white p-2 md:p-3 rounded-tl-lg rounded-br-lg hover:bg-furni-green transition">
                <Plus size={16} className="md:w-5 md:h-5" />
              </button>
            </div>
            
            <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 md:mb-2 truncate">
              {item.title}
            </h3>
            
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
              {item.price_after_discount ? (
                <>
                  <span className="font-bold text-gray-900 text-sm md:text-base">${item.price_after_discount}</span>
                  <span className="text-xs md:text-sm text-gray-400 line-through">${item.price}</span>
                </>
              ) : (
                <span className="font-bold text-gray-900 text-sm md:text-base">${item.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-8 md:mt-12">
        <div className="w-2 h-2 rounded-full bg-furni-dark"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
};

export default ProductSection;