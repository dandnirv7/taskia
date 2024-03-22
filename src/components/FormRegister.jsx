import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "@/assets/img/profile-circle.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });
  const [isExist, setIsExist] = useState(false);

  const navigate = useNavigate();

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBlur = () => {
    setIsExist(false);
  };
  const { fullName, username } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    let credentialUsers = JSON.parse(localStorage.getItem("users"));

    if (!credentialUsers) {
      credentialUsers = [];
    }

    const userNames = credentialUsers.map((item) => {
      return item.username;
    });

    const isUserExist = userNames.includes(username);

    if (isUserExist === true) {
      setIsExist(true);
    } else {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const newUser = {
        id: (credentialUsers.length + 1).toString().padStart(3, "0"),
        fullName: fullName,
        username: username,
        tasks: [],
      };

      const updatedUsers = [...storedUsers, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setIsExist(false);
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <label
          htmlFor="input-label"
          className="block my-2 text-sm font-semibold dark:text-white"
        >
          Full Name
        </label>
        <img
          src={profile}
          alt="profile-icon"
          className="absolute top-[38px] left-3"
        />
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={handleChangeForm}
          id="input-label"
          className="block w-full px-12 py-3 text-sm border-2 border-gray-200 rounded-full focus:border-[#977FFF] focus:ring-[#977FFF] disabled:opacity-50 disabled:pointer-events-none font-semibold"
          placeholder="Enter your full name"
        />
      </div>
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
          onChange={handleChangeForm}
          onBlur={handleBlur}
          id="input-label"
          className={`block w-full px-12 py-3 text-sm border-2 ${
            isExist
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:border-[#977FFF] focus:ring-[#977FFF] bg-white"
          } rounded-full disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 font-semibold `}
          placeholder="Enter your username"
        />
        {isExist && (
          <span className="text-sm text-red-500">username already exist</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full px-5 py-2 my-5 text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF]"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Register;
