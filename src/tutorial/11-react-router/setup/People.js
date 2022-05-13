import React, { useState } from "react";
import { data } from "../../../data";
import { Link } from "react-router-dom";
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          // Since we are iterating over the list, we have each and every id available for our person
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            {/* Only reason the /person is here is because we also added that to our index.js Person part */}
            <Link to={`/person/${person.id}`}>Learn More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
