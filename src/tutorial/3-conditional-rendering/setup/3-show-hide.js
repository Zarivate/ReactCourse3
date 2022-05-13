import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  // This is how we check the size of the window on the user's screen
  const [size, setSize] = useState(window.innerWidth);

  // This is our function that changes the value of size
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // In this example just setting the second variable to an empty dependency list doesn't save us because now we toggle the component.So even though we only run it once,
  // We still end up setting up multiple eventlisteners everytime we press the button/show the component. Before we weren't toggling the component. In other words it was there, we set up the event listener and everything was good to go.
  useEffect(() => {
    // As we resize the window we'll be listening to this event
    window.addEventListener("resize", checkSize);
    return () => {
      // Essentially make sure to have a cleanup function when doing toggle component stuff
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size} </h2>
    </div>
  );
};

export default ShowHide;
