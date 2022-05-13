import { useState, useEffect } from "react";

// Naming convention means you can't name this fetch/ you need to have the "use" part in there.
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    // This means that useEffect runs once when we invoke it and then again whenever the url changes
  }, [url]);
  // We are returning an object over here
  return { loading, products };
};
