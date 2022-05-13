// reducer function, will look for 2 things. 1 the state and the the action
// The state here refers to the state right before the update. From reducer you always want to return some kind of state else none of the later functionality makes any sense

export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      // The ...state just copies all the previous state values
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "LEL") {
    return { ...state, isModalOpen: true, modalContent: "Please Enter Value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("Fuck you");
};
