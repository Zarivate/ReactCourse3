import React, { useState } from "react";
import { data } from "../../../data";

// The main idea of propDrilling is that our list component technically does not need to have access to the removePerson, but we have no other way to pass down our function into the SinglePerson unless we actually pass it through the List and various other components until we reach it
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  // Our main component
  const [people, setPeople] = useState(data);

  // SinglePerson somehow needs to have access to this, the removePerson. This is what prop drilling is, where the List component will have to take the removePerson and pass it down to a singlePerson
  const removePerson = (id) => {
    // Our current state value is equal to "people"
    setPeople((people) => {
      // Each and every item will be set up as a "person" and if the person id doesn't match to whatever was passed in then it'll be returned, else if it does match remove it from the list
      return people.filter((person) => person.id != id);
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      {/* There's going to be a list component here that takes as a prop the people. This is also where we pass in our removePerson function */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

// Here what we're saying is, get me this removePerson from my props and now we need to pass it into a SinglePerson where we also need to pass in the id and name
const List = ({ people, removePerson }) => {
  // We want to iterate over the array, and for each and every item we would want to render the single person component
  return (
    <>
      {/* Each and every item in our "people" array is a "person" object */}
      {people.map((person) => {
        // Here it goes ...whateverTheNameOfYourParameter, which is why it's "person" here. Because now this points to that item in the list, what it's saying is add all the properties (in this case being the id and name) onto the props of
        // the SinglePerson
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

// Here we're targetting the id and name from our data persons, now that we've changed stuff above we can pass down the removePerson
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
