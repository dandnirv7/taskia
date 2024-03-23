import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/img/profile-circle.svg";

const Login = () => {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("isRememberMe"))
      ? localStorage.getItem("userLoggedIn")
      : ""
  );
  const [isUsernameNotFound, setIsUsernameNotFound] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(
    JSON.parse(localStorage.getItem("isRememberMe")) || false
  );

  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
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
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <label
          htmlFor="input-label"
          className="block my-2 text-sm font-semibold "
        >
          Username
        </label>
        <img
          src={profile}
          alt="profile-icon"
          className="absolute top-[38px] left-3"
        />
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          onBlur={handleBlur}
          id="input-label"
          className={`block w-full px-12 py-3 text-sm border-2 ${
            isUsernameNotFound
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:border-[#977FFF] focus:ring-[#977FFF] "
          } bg-white rounded-full disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 font-semibold `}
          placeholder="Enter your username"
        />

        {isUsernameNotFound && (
          <span className="text-sm text-red-500">username not found</span>
        )}
      </div>
      <div className="flex flex-row items-center gap-2 mt-5">
        <input
          type="checkbox"
          id="rememberMe"
          checked={isRememberMe}
          onChange={toggleRememberMe}
          className="rounded-full outline-none focus:ring-0"
        />
        <label htmlFor="rememberMe" className="cursor-pointer">
          Remember Me
        </label>
      </div>

      <button
        type="submit"
        className="w-full px-5 py-2 my-5 text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF]"
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
