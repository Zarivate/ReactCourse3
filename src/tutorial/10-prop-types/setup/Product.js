import React from "react";
import PropTypes from "prop-types";
// We need to go 3 levels above for this one, first outside of the prop-types folder, then outside the tutorial, then we need to be in the src folder where we look for assets
import defaultImage from "../../../assets/default-image.jpeg";

// The properties from the url are pass in through here via the ...product thing we did in the index.js. Also the image property is set up as an object, and in JS when you try to access the url property of the image
// that's undefined, as in the last one is missing certain properties, you'll get an error
const Product = ({ image, name, price }) => {
  // When dealing with getting back item properties from some sort of url/api. It's recommended you check to see if any of them are missing certain properties or not cause it could cause errors otherwise
  console.log(image, name, price);

  // If image is there, only then get me back the url. If it'ss not there then it'll be undefined and we settle for our defaultImage that we imported
  const url = image && image.url;
  return (
    <article className="product">
      {/* If it's falsy then just display the defaultImage */}
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      {/* If price is there show it, else just put 3.99 */}
      <p>${price || 3.99}</p>
    </article>
  );
};

// We go with name of component first, in this case a Product. This is how we're supposed to check if an API thing has everything we need
Product.propTypes = {
  // This yells and scream at you/in the console if something is missing
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Below is how we do defaultProps stuff, the other way is short circuit
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   // The image won't properly show up for the last one even though we did everything right is because there's no url property on it, which is what's used to access the image for the other objects
//   image: defaultImage,
// };

export default Product;
