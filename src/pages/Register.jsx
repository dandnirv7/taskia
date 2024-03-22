import FormRegister from "@/components/FormRegister";
import Logo from "../assets/img/logo.svg";

const Register = () => {
  return (
    <div className="px-10 py-6 mx-auto bg-white border w-[450px] rounded-3xl my-5">
      <div className="flex justify-center mt-5">
        <img src={Logo} alt="logo" className="w-2/5" />
      </div>
      <div className="pb-4 my-8 border-b border-slate-200">
        <h1 className="text-2xl font-bold">Add New User</h1>
        <p className="text-sm text-slate-400">Manage daily task easily</p>
      </div>
      <FormRegister />
    </div>
  );
};

export default Register;
