import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // This useCallback saves us from an infinite loop because without it the getProducts would get created each and everytime which inside it is also rerendering something due to changing the state values above.
  // Now you only create a new function once the url changes
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
    // This says that you would want to create the function when you have a url change
  }, [url]);

  useEffect(() => {
    // In our 12 final file, React complains that we have our getProducts function over here so we should have it as an added dependency, however if you do that then you create an infinite loop because getProducts is calling setProducts,
    // which sets the state value which then triggers the rerender. In otherwords the first time we call the getPRoducts, you'll change the state value, and then since the useEffect below needs to rerun everytimewhen we change something about the value
    // which means it'll get created from scratch, once we rerender an infinite loop will happen. THIS IS ALL ONLY AN ISSUE IF YOU DON'T HAVE useCallback HERE
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};
