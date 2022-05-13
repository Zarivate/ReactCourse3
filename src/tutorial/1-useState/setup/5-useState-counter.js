import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    // In this we have to pass a callback function that will run in a certain amount of time, for here it's 2 seconds
    setTimeout(() => {
      // The setValue function here is asynchronous, when we clicked it 3 times, all 3 times it thought the value was 0
      // setValue(value + 1);

      // The way to get around that is to, instead of passing in directly the new value you want, you pass in the function
      // As a parameter here it gets the old state value, so right before the update. In other words the current one.
      // Common naming convention for parameter here is to call is prev"whateveryoucalledvariable"/prevState
      // Now whatever you return from this function will be the new value
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          {" "}
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
