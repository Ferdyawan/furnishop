import React from 'react';
import { Instagram, Facebook, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialIcons = [Instagram, Facebook, Twitter, Github, Linkedin];

  return (
    <footer id='contact' className="w-full bg-[#23262F] text-white pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h3 className="text-3xl font-bold mb-6 md:mb-0">FurniShop</h3>
            
            <div className="flex gap-4">
               {socialIcons.map((Icon, i) => (
                 <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2D6A66] transition text-white">
                   <Icon size={18} />
                 </div>
               ))}
            </div>
        </div>

        <div className="border-t border-gray-700 mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <FooterColumn 
            title="Our Products" 
            links={['The Support Suite', 'The Sales Suite', 'Support', 'Guide']} 
          />
          <FooterColumn 
            title="Top Features" 
            links={['Ticketing System', 'Knowledge Base', 'Community Forums', 'Help Desk Software']} 
          />
          <FooterColumn 
            title="Resources" 
            links={['Product Support', 'Request Demo', 'Library', 'Peoplepower Blog']} 
          />
          <FooterColumn 
            title="Company" 
            links={['About Us', 'Press', 'Investors', 'Events']} 
          />
          <FooterColumn 
            title="Favourite Things" 
            links={['For Enterprise', 'For Startups', 'For Benchmark', 'For Small Business']} 
          />
        </div>
        
        <div className="text-center text-gray-500 text-xs mt-20">
          © NameBrand 2022 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-lg mb-6 text-white">{title}</h4>
    <ul className="space-y-4 text-gray-400">
      {links.map((link) => (
        <li key={link} className="hover:text-white cursor-pointer transition">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;