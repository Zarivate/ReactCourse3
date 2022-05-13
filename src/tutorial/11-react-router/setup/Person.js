import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default name");

  // This should give you back the idea since useParams gets you back the object normally
  const { id } = useParams();

  // Once the component renders, remember the special trait about useEffect
  useEffect(() => {
    // We would want to parse the string because in our const {id} it's a string due to useParams which is why we have to use parseInt
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
