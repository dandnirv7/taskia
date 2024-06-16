import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const currentUser = users?.find((user) => user.username === userLoggedIn);

  const addUser = (data) => {
    const newUserData = {
      id: uuidv4(),
      fullName: data?.fullName,
      username: data?.username,
      tasks: [],
    };
    const updatedUsers = [...users, newUserData];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const userLogin = (data) => {
    localStorage.setItem("isLoggedIn", true);
    JSON.stringify(localStorage.setItem("userLoggedIn", data.username));
    JSON.stringify(localStorage.setItem("isRememberMe", data.isRememberMe));
  };

  return (
    <UserContext.Provider
      value={{ users, userLoggedIn, currentUser, addUser, userLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};
