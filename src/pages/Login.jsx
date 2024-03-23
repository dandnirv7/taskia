import FormLogin from "@/components/FormLogin";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="px-10 py-6 mx-auto bg-white border w-[450px] rounded-3xl my-5">
      <div className="flex justify-center mt-5">
        <img src={Logo} alt="logo" className="w-[40%]" />
      </div>
      <div className="pb-4 my-5 border-b border-slate-200">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="text-sm text-slate-400">Manage daily task easily</p>
      </div>
      <FormLogin />

      <div>
        <p className="font-medium">
          Don&rsquo;t have an account?{" "}
          <Link to="/register">
            <span className="text-[#977FFF]">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
