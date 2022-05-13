import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  // It would be better if we only had one value in a state instead of 3 and if we only had 1 function that is responsible for onChange, regardless of which input. It can be done like this.
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  // Our new function, we need access to the event "e" in order to do anything
  const handleChange = (e) => {
    // Whenever we call our event handleChange, we wanna check for the name of the target
    const name = e.target.name;
    const value = e.target.value;
    // Now we dynamically update this property, equal to whatever value you have. Same idea as writing firstName: value.
    // This is how we update whatever state value references the input. This is also how you get all the input text to show up when typing.
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We only submit the form if the values are more than an empty string
    if (person.firstName && person.email && person.age) {
      // Here we copy the input value of the state. After that we add peson to a "setPeople" array
      const newPerson = { ...person, id: new Date().getTime().toString() };
      // Here we copy the values from the state and add that to newPerson
      setPeople([...people, newPerson]);
      // Now we set things/setPerson back to empty values
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
