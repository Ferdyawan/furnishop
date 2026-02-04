import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  return (
    <>
      <section id='features' className="py-32 pt-40 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <img 
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80" 
              alt="Interior" 
              className="rounded-tl-[50px] rounded-br-[50px] w-full h-[500px] object-cover shadow-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We Create Your Home <br /> More Aestetic
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Furniture power is a software as services for multipurpose business management system, especially for them who are running two or more business.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="text-furni-dark shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Valuation Services</h4>
                  <p className="text-sm text-gray-500 mt-1">Sometimes features require a short description. This can be detailed description.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-furni-dark shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Development of Furniture Models</h4>
                  <p className="text-sm text-gray-500 mt-1">Sometimes features require a short description. This can be detailed description.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const BestFurnitureSection = () => {
  return (
    <section id='about' className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            The Best Furniture <br /> Manufacturer Of Your Choice
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Furnitre power is a software as services for multiperpose business management system, especially for them who are running two or more business exploree the future Furnitre power is a software as services.
          </p>
        </div>
        <div className="flex-1 w-full order-1 lg:order-2">
          <img 
            src="src/assets/kitchen.png" 
            alt="Kitchen" 
            className="rounded-tr-[50px] rounded-bl-[50px] w-full h-[400px] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Features;