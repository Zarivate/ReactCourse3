import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hell",
};

const Index = () => {
  const [name, setName] = useState("");
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  // When we invoke useReducer we're getting 2 things back, 1 the state value and 2 the dispatch function. It looks for reducer here/the function that'll manipulate the state. And will happen once we call dispatch/dispatch the action
  // You can also set up the object itself within the second parameter instead of making an object and passing it in
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checks to see if name is empty string or not, if it is then displays modal
    if (name) {
      // setShowModal(true);
      // Spread out the old values first, then we pass in the new person
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName("");

      const newItem = { id: new Date().getTime().toString(), name };

      // You always need to pass in the object with a property of name "type". Here action is going to be our object, and in that object you need to have the property
      // by the name of "type" and then set it equal to something. Also just general naming convention going on for ADD_ITEM where all upercase and underscore instead of space
      // Same idea behind the "payload" word
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      // setShowModal(true);
      dispatch({ type: "LEL" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {/* If showModal is true, then show it else don't */}
      {/* showModal && <Modal /> */}
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          {/* We invoke our inline function here */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {/* Here we iterate over so we show the list. We look for each and every "person" */}
      {/* {people.map((person) => { */}
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
