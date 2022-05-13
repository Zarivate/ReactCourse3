import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

// a new function to showoff useMemo
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      // price is a property from the api objects themselves which is where we get .price from
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      // for reduce we always need to return our total
      return total;
      // This 0 down here is just to say that we will be returning a number and then dividing that by 0
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  // usesState preserves the values between the renders and was triggering the re-render
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // Without useCallback this function gets recreated from scratch everytime that the count button is clicked. Which makes React think that the props of addtoCart={addToCart} changed too.
  // which triggers a rerender. useCallback will check to see if the function value has changed, if so it recreates and makes it rerender. In otherwords the function is only created when the function value changes
  // you have to make sure to put the cart there at the end in the dependencies so the value changes
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      {/* addToCart prop is equal to addToCart function */}
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// memo is a function and you just pass in your whole component/wrap it around the memo. memo here is checking/memoizing, so if the "products" prop value did not change it's not going to trigger the rerender.
// and thus because we don't rerender the biglist we also don't rerender the single product
const BigList = React.memo(({ products, addToCart }) => {
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
