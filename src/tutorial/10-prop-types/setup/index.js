import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  // We don't use the loading feature here so we don't pass it in. ANyways, what we're doing here is grabbing our "products" from our return
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {/* Then we iterate over those products, where for each and every product, we're returning a Product component where we pass in the key prop, 
        then we do the object spread operator where we pass in all the properties from each and every product into the Product component */}
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
