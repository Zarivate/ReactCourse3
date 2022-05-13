import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // This is how we get the width of the window. useState is preserving the values and triggering the rerender
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    // Each and every time the window gets resized, it'll call the checkSize function. The problem with this however is that each and every time we
    // resize the window, we call this function which causes a rerender which in turn triggers the useEffect. Too many of these could cause a memory leak at some point!
    window.addEventListener("resize", checkSize);

    // The way to get around the whole memory leak issue is by doing something like this. Where the useEffect will run after each and every render, where it checks for a
    // resize, which if happens, triggers the rerender. HOWEVER before we run the useEffect after that render, we will run the cleanup function first which will prevent
    // multiple eventlisteners. It's good practice to set up a cleanup function everytime you add a side effect
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      {/* This is how we access the state value "size"*/}
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
