import React, { useState } from "react";
// useHooks have a lot of general rules to them, among them being
// component name must be uppercase, essentially where we use the hook has to be in
// must be in the function/component body
//cannot call conditionally

// useState is a function that comes from React, it's a named import so we have to have the curly braces and name has to be exact

const UseStateBasics = () => {
  // When we invoke useState, we have to pass in a default value. Could be an object, boolean, string, number, array, etc. Whatever JS value you want
  // console.log(useState("howdy"));

  // // The reason we have the 0 next to it is so it knows we want to acces the first item in the array. In other words have 1 be the value
  // const value = useState(1)[0];

  // // This will be the function we use, since a useState is comprosied of a variable and a function
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // Array destructering, we need to come up with a name for our state value. Here it's "text", "random title" here is our default value
  const [text, setText] = useState("random title");

  const handleClick = () => {
    // Each and every time we invoke this function we can change the value, this is how we trigger the rerender
    if (text === "random title") {
      setText("hello Gustav");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
