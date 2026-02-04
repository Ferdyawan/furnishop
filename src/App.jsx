import React from 'react';
import Hero from './components/Hero';
import Features, { BestFurnitureSection } from './components/Features';
import Categories from './components/Categories';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Features /> 
      
      <Categories />
      
      <BestFurnitureSection />
      
      <Products />
      
      <Testimonials />

      <Newsletter />
      
      <Footer />
    </div>
  );
}

export default App;