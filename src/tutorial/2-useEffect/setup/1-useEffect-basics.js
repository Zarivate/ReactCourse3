import React, { useState, useEffect } from "react";
// useEffect hooks allow you to do the "side effect" which means any work outside of the component. Like changing document title, signing up for a subscription, fetching data, console logging something, event lister, etc
// by default runs after every re-render
// cleanup function
// second parameter refers to how, at the end of the useEffect hook you can use a second parameter like a list of dependencies
const UseEffectBasics = () => {
  // useState did 2 things here when it was clicked. 1, it preserved the values between the renders. 2, it triggered rerender.
  // This is why the console.log stuff pops up everytime you click the button.
  const [value, setValue] = useState(0);

  // The way useEffect works is we pass in the callback function. Here everytime we click the button, we invoke "setValue" below

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
    // If you leave this second parameter blank it means that it will only run on the initial render. This is how you make it if you want useEffect to ony run on the initial render
    // With "value" here it means it runs everytime the value changes because everytime we increase the value we change something about our useState const. And the moment we change something about that value
    // then we trigger useEffect to run one more time
  }, [value]);

  // If you ever see it where this shows up twice at the start/every time it's re rendered then that's because of React.strictmode in the
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
