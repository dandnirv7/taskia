import { Link } from "react-router-dom";
import { logo } from "@/assets/img/images";
import { FormLogin } from "@/components/FormLogin";

const Login = () => {
  return (
    <div className="translate-y-1/3">
      <div className="px-10 py-6 mx-auto bg-white border w-[450px] rounded-3xl">
        <div className="flex justify-center mt-5">
          <img src={logo} alt="logo" />
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
