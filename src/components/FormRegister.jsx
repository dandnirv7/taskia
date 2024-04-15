import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import useRegisterForm from "../hooks/useRegisterForm";

const Register = () => {
  const navigate = useNavigate();
  const {
    formData,
    usernameExists,
    isUsernameValid,
    isFullNameValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useRegisterForm(navigate);

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        placeholder="Enter your full name"
        isValid={isFullNameValid}
        errorMessage="Full name must be alphabetic, max 60 characters, and cannot start with a space."
        onChange={handleChange}
      />
      <InputField
        label="Username"
        name="username"
        value={formData.username}
        placeholder="Enter your username"
        isValid={isUsernameValid && !usernameExists}
        errorMessage={
          usernameExists
            ? "Username already exists"
            : "Username must be at least 4 characters long."
        }
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="submit"
        className="w-full px-5 py-2 my-5 text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] focus:drop-shadow-[0_6px_6px_rgba(151,127,255,0.75)]"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Register;
