import React, { useState } from "react";
// short-circuit evaluation
// ternary operator, where we will display something if it is true and something else if it is false

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // For this one what it means is, if "text" is "falsy", which in this case it's true cause it's empty, then we return the second value "hello world".
  // Since an empty string invalidates the first one, it returns hello world. Same idea if it were not empty/"truthy". It would return whatever is
  // inside the now not empty string "text"
  // const firstValue = text || "hello world";

  // Similar idea here where, if "text" was truthy/not empty, then we will return the second value. However if it was falsy/an empty string
  // then we will return that empty string and not the "hello world""
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}

      {/* Here whats happening is, if it's true then we display the first one or if not then we display the second */}
      <h1>{text || "biff chiggers"}</h1>

      {/* Here what's happening that everytime we click the button whatever value is set in the element we change to the opposite, a toggle state if you will */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* If text is true then we are returning that element, if not then nothing gets displayed. This is how you can trigger where elements of components show up or not
       . In other words only if the first one is true will we return the second part. You can also do a "!text" to see if it's not true/empty and get it to show up*/}
      {text && <h1>Hello world</h1>}

      {/* Here what we means is, if isError is true then we wanna display the h1 */}
      {isError && <h1>Error...</h1>}

      {/* This is our ternary operator where if isError is true, then we will display our <p> message. If it is not true then we display what's pas the :*/}
      {isError ? (
        <p>This shows because isError is true...</p>
      ) : (
        <div>
          <h2>No Error to be had</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
