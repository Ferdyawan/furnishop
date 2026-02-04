import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Menu, X} from 'lucide-react';

const HeroSection = () => {
  const [header, setHeader] = useState(null);
  const [stats, setStats] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    axios.get('https://lumoshive-api-furniture.vercel.app/api/header')
      .then(res => setHeader(res.data));
    
    axios.get('https://lumoshive-api-furniture.vercel.app/api/data')
      .then(res => setStats(res.data));
  }, []);

  if (!header || !stats) return <div className="h-screen bg-furni-dark flex justify-center items-center text-white">Loading...</div>;

  return (
    <section id='home' className="relative w-full min-h-[110vh] bg-white font-sans pb-32 z-0">

      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
        <img src={header.banner} alt="Background" className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
      </div>


      <nav className="relative z-20 flex justify-between items-center px-6 md:px-20 py-8 text-white">
        <div className="text-3xl font-bold">FurniShop</div>

        <ul className="hidden md:flex gap-10 font-medium text-white/90">
          <li><a href="#home" className="hover:text-furni-gold transition">Home</a></li>
          <li><a href="#about" className="hover:text-furni-gold transition">About</a></li>
          <li><a href="#features" className="hover:text-furni-gold transition">Features</a></li>
          <li><a href="#contact" className="hover:text-furni-gold transition">Contact</a></li>
        </ul>

        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#242424]/95 backdrop-blur-xl p-6 md:hidden flex flex-col items-center space-y-6 shadow-2xl border-t border-white/10 transition-all z-50 rounded-b-2xl">
            <a href="#home" className="text-lg font-medium hover:text-furni-gold">Home</a>
            <a href="#about" className="text-lg font-medium hover:text-furni-gold">About</a>
            <a href="#features" className="text-lg font-medium hover:text-furni-gold">Features</a>
            <a href="#contact" className="text-lg font-medium hover:text-furni-gold">Contact</a>
          </div>
        )}
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6 drop-shadow-lg">
          {header.title}
        </h1>
        <p className="text-gray-100 text-sm md:text-base max-w-2xl mb-10 leading-relaxed opacity-90 drop-shadow-md">
          {header.description}
        </p>
        <button className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-10 py-3 rounded-full font-semibold hover:bg-furni-gold hover:text-black hover:border-furni-gold transition-all duration-300 shadow-lg">
          Shop Now
        </button>
      </div>

      <div className="absolute -bottom-32 md:-bottom-16 left-0 right-0 z-30 px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-6xl bg-furni-green rounded-[2rem] p-8 md:p-10 shadow-card-strong 
                        grid grid-cols-2 md:grid-cols-4 
                        gap-y-8 gap-x-0 md:gap-0 
                        text-white border border-white/10">

          <StatItem value={stats.experience} label="Year Experience" />
          <StatItem value={stats.country} label="Opened in the country" className="border-l border-white/20" />
          <StatItem value={stats.sold} label="Furniture sold" className="md:border-l md:border-white/20" />
          <StatItem value={stats.variant} label="Variant Furniture" className="border-l border-white/20" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, className}) => (
  <div className={`flex flex-col items-center justify-center text-center p-1 md:p-4 ${className || ''}`}>
    <h3 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">{value}</h3>
    <p className="text-xs md:text-sm opacity-90 max-w-[120px] leading-tight">{label}</p>
  </div>
);

export default HeroSection;