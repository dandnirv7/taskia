import { useNavigate, Link } from "react-router-dom";
import Logo from "@/assets/img/logo.svg";
import Layer from "@/assets/img/layer.svg";
import Settings from "@/assets/img/setting.svg";
import Logout from "@/assets/img/forbidden.svg";

const Sidebar = () => {
  const rememberMe = JSON.parse(localStorage.getItem("isRememberMe"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    if (!rememberMe) {
      localStorage.setItem("userLoggedIn", "");
    }
    navigate("/login");
  };

  return (
    <aside className="p-[30px] w-1/5">
      <div className="mb-8">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="">
          <h1 className="text-sm font-semibold uppercase">General</h1>
          <Link to="/overview">
            <div className="flex flex-row gap-3 px-4 py-2.5 border border-gray-300 rounded-full mt-4">
              <img src={Layer} alt="layer" />
              <p className="text-base font-semibold">Overview</p>
            </div>
          </Link>
          <Link to="/dashboard/manage-task">
            <div className="flex flex-row gap-3 px-4 py-2.5 border border-[#ffd88d] drop-shadow-[0_10px_10px_rgba(255,216,141,0.75)] rounded-full mt-4 bg-[#ffd88d]">
              <img src={Layer} alt="layer" />
              <p className="text-base font-semibold">Manage Task</p>
            </div>
          </Link>
        </div>
        <hr />
        <div className="font-semibold">
          <h1 className="text-sm uppercase">Others</h1>
          <Link to="/settings">
            <div className="flex flex-row gap-3 px-4 py-2.5 border border-gray-300 rounded-full mt-4">
              <img src={Settings} alt="settings" />
              <p className="text-base font-semibold">Settings</p>
            </div>
          </Link>
          <button type="button" onClick={handleLogout} className="w-full">
            <div className="flex flex-row gap-3 px-4 py-2.5 border border-gray-300 rounded-full mt-4">
              <img src={Logout} alt="logout" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
