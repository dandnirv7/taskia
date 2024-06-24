import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const username = localStorage.getItem("userLoggedIn");
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const currentUser = users?.find((user) => user.username === userLoggedIn);
  const rememberMe = JSON.parse(localStorage.getItem("isRememberMe"));

  const [isDarkmode, setIsDarkmode] = useState(
    localStorage.getItem("isDarkmode") === "true"
  );

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDarkmode", isDarkmode);
  }, [isDarkmode]);
  const navigate = useNavigate();

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

  const userLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    if (!rememberMe) {
      localStorage.setItem("userLoggedIn", "");
    }
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        username,
        userLoggedIn,
        currentUser,
        users,
        addUser,
        userLogin,
        userLogout,
        isDarkmode,
        setIsDarkmode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};
