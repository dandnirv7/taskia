import { useState } from "react";

const useRegisterForm = (navigate) => {
  const [formData, setFormData] = useState({ fullName: "", username: "" });
  const [usernameExists, setUsernameExists] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isFullNameValid, setIsFullNameValid] = useState(true);

  const validateFullName = (fullName) =>
    /^[A-Za-z][A-Za-z\s]{0,59}$/.test(fullName);
  const validateUsername = (username) => /^[a-zA-Z0-9]{4,}$/.test(username);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "username") setIsUsernameValid(validateUsername(value));
    else if (name === "fullName") setIsFullNameValid(validateFullName(value));
  };

  const handleBlur = () => setUsernameExists(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, username } = formData;

    if (!validateFullName(fullName) || !validateUsername(username)) {
      setIsFullNameValid(validateFullName(fullName));
      setIsUsernameValid(validateUsername(username));
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setUsernameExists(true);
      setIsUsernameValid(false);
    } else {
      const newUser = { id: users.length + 1, fullName, username, tasks: [] };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setUsernameExists(false);
      navigate("/login");
    }
  };

  return {
    formData,
    usernameExists,
    isUsernameValid,
    isFullNameValid,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useRegisterForm;
