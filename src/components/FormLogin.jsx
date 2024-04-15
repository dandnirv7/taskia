import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import useLoginForm from "../hooks/useLoginForm";

const Login = () => {
  const navigate = useNavigate();
  const {
    username,
    isUsernameNotFound,
    isRememberMe,
    handleUsernameChange,
    handleBlur,
    toggleRememberMe,
    handleLoginSubmit,
  } = useLoginForm(navigate);

  return (
    <form onSubmit={handleLoginSubmit}>
      <InputField
        label="Username"
        name="username"
        value={username}
        onChange={handleUsernameChange}
        onBlur={handleBlur}
        isValid={!isUsernameNotFound}
        errorMessage="Username not found"
        placeholder="Enter your username"
      />

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
        className="w-full px-5 py-2 my-5 text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] focus:drop-shadow-[0_6px_6px_rgba(151,127,255,0.75)]"
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
