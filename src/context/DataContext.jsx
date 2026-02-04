import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api.get("/products?page=1&limit=20")
      .then(res => setProducts(res.data.products))
      .catch(console.error);

    api.get("/testimonials?page=1&limit=5")
      .then(res => setTestimonials(res.data.testimonials))
      .catch(console.error);
  }, []);

  return (
    <DataContext.Provider value={{ products, testimonials }}>
      {children}
    </DataContext.Provider>
  );
}
