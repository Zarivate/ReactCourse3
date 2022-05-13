import React, { useEffect } from "react";

// We can access modalContent and closeModal here because in our index.js we set those values in the return inline part
const Modal = ({ modalContent, closeModal }) => {
  // We use useEffect here so we can close the modal after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
