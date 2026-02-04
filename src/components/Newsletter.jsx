import { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import newsletterBg from '../assets/newsletter.jpg';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
 const submit = async () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email format.");
      return;
    }

    try {
      await api.post("/subscribe", { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.warn("API Error (backend mungkin belum siap):", error);
      alert("Subscribed! (Simulation)");
      setEmail("");
    }
  };

  return (
    <section className="w-full">
      <div 
        className="w-full realative py-24 px-6 md:px-10"
        style={{ backgroundImage: `url(${newsletterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end gap-10">
           <div className="text-white md:w-1/2">
             <h2 className="text-4xl font-bold mb-4 leading-tight">
                Get more discount <br /> Off your order
             </h2>
             <p className="mb-6 opacity-90">Join our mailing list</p>
             
             <div className="flex flex-col sm:flex-row gap-4">
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="flex-1 px-6 py-4 rounded-lg outline-none text-gray-800"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <button 
                 onClick={submit}
                 className="bg-furni-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition cursor-pointer"
               >
                 Shop Now
               </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
