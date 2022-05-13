import React from "react";

const ErrorExample = () => {
  // This is called a variable here
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    // Doing it this way shows that, while the value is changed, the title on screen doesn't because we don't rerender the component
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
