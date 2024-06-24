import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "@/context/UserContext";
import { FormLogin } from "@/components/FormLogin";

import { logo, logoDark } from "@/assets/images";

const Login = () => {
  const { isDarkmode } = useContext(UserContext);
  return (
    <div className="translate-y-1/3 ">
      <div className="px-10 py-6 mx-auto bg-white dark:bg-dark-secondary border w-[450px] rounded-3xl">
        <div className="flex justify-center mt-5">
          <img src={isDarkmode ? logoDark : logo} alt="logo" />
        </div>
        <div className="pb-4 my-5 border-b border-slate-200">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="text-sm text-slate-400">Manage daily task easily</p>
        </div>
        <FormLogin />

        <div>
          <p className="font-medium">
            Don&rsquo;t have an account?{" "}
            <Link
              to="/register"
              className="focus:outline-none focus:drop-shadow-[0_6px_6px_rgba(151,127,255,0.75)]"
            >
              <span className="text-[#977FFF]">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
