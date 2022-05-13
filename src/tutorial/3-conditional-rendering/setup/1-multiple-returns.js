import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

// Since MultipleReturns is a function, we can set up multiple returns
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user Bimgus");

  useEffect(() => {
    // After fetch we put .that because we know we're getting a promise back
    fetch(url)
      // Here we originally had resp.json() instead of anything with the curly braces but we changed it so we could catch more errors
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      // The error down here refers to a network error, meaning it won't catch errors like names not matching up correctly, if the usser doesn't exist, etc
      .catch((error) => console.log(error));
  }, []);

  // For "if true" statements you can just put the variable since it checks whether it's true right or way or not
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>;
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>;
      </div>
    );
  }
  // In standard JS when you have the first return everything beyond it is ignored
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
