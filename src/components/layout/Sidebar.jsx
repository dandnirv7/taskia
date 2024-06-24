import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

import {
  logo,
  noteOutline,
  setting,
  forbidden,
  logoDark,
  noteDark,
  settingDark,
  forbiddenDark,
} from "@/assets/images";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Sidebar = () => {
  const { userLogout, isDarkmode, setIsDarkmode } = useContext(UserContext);

  const toggleDarkmode = () => {
    setIsDarkmode((prevMode) => !prevMode);
  };
  const location = useLocation();

  return (
    <aside className="p-[30px] w-1/5 dark:bg-dark-secondary flex flex-col gap-14">
      <div>
        <Link to="/dashboard" className=" focus:outline-none">
          <div className="hover:drop-shadow-[0_6px_6px_rgba(151,127,255,0.50)] hover:cursor-pointer">
            <img src={isDarkmode ? logoDark : logo} alt="logo" />
          </div>
        </Link>
        <div className="flex flex-col gap-8 my-8">
          <div className="">
            <h1 className="text-sm font-semibold uppercase">General</h1>
            <Link to="/dashboard" className="outline-none" tabIndex={-1}>
              <Button
                variant={
                  location.pathname === "/dashboard" ||
                  location.pathname === "/dashboard/search"
                    ? "activeSidebar"
                    : "sidebar"
                }
                size="sidebar"
                shadow={
                  location.pathname === "/dashboard" ||
                  location.pathname === "/dashboard/search"
                    ? "sidebar"
                    : ""
                }
              >
                <img src={isDarkmode ? noteDark : noteOutline} alt="note-fav" />
                <p
                  className={`text-base font-semibold ${
                    location.pathname === "/dashboard" ||
                    location.pathname === "/dashboard/search"
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  Manage Task
                </p>
              </Button>
            </Link>
          </div>
          <hr />
          <div className="font-semibold">
            <h1 className="text-sm uppercase">Others</h1>
            <Link to="/settings" className="outline-none" tabIndex={-1}>
              <Button
                variant={
                  location.pathname === "/settings"
                    ? "activeSidebar"
                    : "sidebar"
                }
                size="sidebar"
                shadow={location.pathname === "/settings" ? "sidebar" : ""}
              >
                <img src={isDarkmode ? settingDark : setting} alt="setting" />
                <p className="text-base font-semibold">Settings</p>
              </Button>
            </Link>
            <Button variant="sidebar" size="sidebar" onClick={userLogout}>
              <img
                src={isDarkmode ? forbiddenDark : forbidden}
                alt="forbidden"
              />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mx-auto ">
        <Switch id="theme" onClick={toggleDarkmode} />
      </div>
    </aside>
  );
};

export default Sidebar;
