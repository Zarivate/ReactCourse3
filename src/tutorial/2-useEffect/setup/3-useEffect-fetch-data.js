import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // Doing setUsers(users) will be a problem here without the sedon argument because of how useEffect runs after every rerender. And we update "users" by doing this which triggers rerender,
    // and once we rerender what we do is run useEffect again which getsUsers again which would cause an infinite loop
    // console.log(users);
    setUsers(users);
  };

  // useEffect can't be async/it can't return a promise (what async returns). You can get around this by making a seperate function with an async or
  // inside the callback function
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Github users</h3>
      <ul className="users">
        {/* Now here we would want to iterate over those users. Where for each and every user we would return a list item */}
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
