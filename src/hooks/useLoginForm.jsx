import { useState } from "react";

const useLoginForm = (navigate) => {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("isRememberMe"))
      ? localStorage.getItem("userLoggedIn")
      : ""
  );
  const [isUsernameNotFound, setIsUsernameNotFound] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(
    JSON.parse(localStorage.getItem("isRememberMe")) || false
  );

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsUsernameNotFound(false);
  };

  const handleBlur = () => {
    setIsUsernameNotFound(false);
  };

  const toggleRememberMe = (e) => {
    const isChecked = e.target.checked;
    setIsRememberMe(isChecked);
    localStorage.setItem("isRememberMe", isChecked);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users"));

    const foundUser = users?.find((user) => user.username === username);

    if (!foundUser) {
      setIsUsernameNotFound(true);
      setIsRememberMe(false);
      localStorage.setItem("isRememberMe", false);
    } else {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userLoggedIn", username);
      navigate("/dashboard");
    }
  };

  return {
    username,
    isUsernameNotFound,
    isRememberMe,
    handleUsernameChange,
    handleBlur,
    toggleRememberMe,
    handleLoginSubmit,
  };
};

export default useLoginForm;
