import React, { useEffect, useRef } from "react";

// preserves value between the renders
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // This is an object with the property of whatever it's set to save
  const refContainer = useRef(null);

  // We want to have access to the "e" event object
  const handleSubmit = (e) => {
    e.preventDefault();
    // If you only do .current it just points to where the refContainer's value is. So it would show <input type='text'> instead if it only had .current
    console.log(refContainer.current.value);
    console.log(refContainer.current);
  };

  // Because useRef doesn't cause rerender, you don't have to worry about setting up an empty array of dependencies here
  useEffect(() => {
    console.log(refContainer.current);

    // This is what does the cool little highlight thing on an input
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          {/* You can add this ref attribute to any HTML element */}
          <input type="text" ref={refContainer} />
          {/* Make sure this is set to "type ='submit' cause if not won't log.hold naything" */}
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
