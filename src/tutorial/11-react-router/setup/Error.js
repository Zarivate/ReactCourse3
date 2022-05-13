import React from "react";
// Named imports like this require the curly braces, don't forget pls
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
