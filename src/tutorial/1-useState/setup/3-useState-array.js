import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // In the brackets is where we would pass in our default value. You can either import useState at the top or do React.useState. Works for the other hooks as well
  // in this example we passed in an array of objects
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // Here we would want to filter out the array, in other words all the items that don't have the matching id you wanna leave alone
    // We pass in our id, then filter out our array and all the items whose id don't match are returned in newPeople
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  // Fragments can also be done like this, with empty brackets
  return (
    <>
      {/* We are going to iterate over an arry here  */}
      {
        // Here, for each and every "person" in our people array, we would want to
        people.map((person) => {
          // We will no destructer them using the id and also be looking for the name that comes from the person
          const { id, name } = person;
          // When you render a list you need that key prop and a unique value
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          );
        })
      }
      {/* The problem with not placing an arrow function here is that right away it's invoked, causing errors. If we put the arrow there tho, it is invoked only when we click on it */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
