import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("ramdom message");

  const changeMessage = () => {
    // In order to have it so only one part of the object is changed you need to use a spread operator that says to ignore
    // all the other values in the object besides the one you want to change
    setPerson({ ...person, message: "hello world" });

    // You could also do it like so below where you make 3 seperate state values for each of the values in the object and call them accordingly when you want to update them
    // setMessage('hello world');
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
