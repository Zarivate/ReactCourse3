import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // In order to connect these with the values typed in we have to add two things, 1. a value and 2. an onChange event listener where we set up the callbackfunction. When we add the value part we're just referencing our state value
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just leaving it like this doesn't make it appear on the console, because by default the browser will try to submit the form and then refresh the page. You can get around this by doing preventDefault on
    // just like in JS we have access to the event object and on that event object we have the preventDefault method.
    console.log(firstName, email);

    if (firstName && email) {
      // This is how we make out new person object, also if the variable names match up you can just write the same variable names instead of writing
      // firstName: firstName, email: email. Also we added the id here instead of using a package like normal.
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);

      // Below is how we add the person to our array near top, the "people" here refers to the value in the current state
      setPeople((people) => {
        return [...people, person];
      });
      // Resets the state values to blank
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        {/* You can either do onSubmit here or onClick on the bottom button, either will work. Those are the ways you can submit the forms in React here*/}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            {/* Here if you have label and wanna connect it to the input in React then you need to use the htmlFor written in camelcase and you need to pass in the Id that will eventually be on the input */}
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              // Once again we can access the event object/e, or in this case what we're looking for is the event target/value
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {
          // This displays what people we have in our array. Will iterate over the state value, then each and every item will be that object
          people.map((person) => {
            // We're essentially destructering here
            const { id, firstName, email } = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
