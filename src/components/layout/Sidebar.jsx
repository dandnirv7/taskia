import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

import {
  logo,
  noteFavoriteOutline,
  setting,
  forbidden,
} from "@/assets/img/images";

import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const { userLogout } = useContext(UserContext);
  const location = useLocation();

  return (
    <aside className="p-[30px] w-1/5">
      <Link
        to="/dashboard"
        className="focus-visible:drop-shadow-[0_6px_6px_rgba(151,127,255,1)] focus:outline-none"
      >
        <div className="hover:drop-shadow-[0_6px_6px_rgba(151,127,255,0.50)] hover:cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="flex flex-col gap-8 mt-8">
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
              <img src={noteFavoriteOutline} alt="note-fav" />
              <p className="text-base font-semibold">Manage Task</p>
            </Button>
          </Link>
        </div>
        <hr />
        <div className="font-semibold">
          <h1 className="text-sm uppercase">Others</h1>
          <Link to="/settings" className="outline-none" tabIndex={-1}>
            <Button
              variant={
                location.pathname === "/settings" ? "activeSidebar" : "sidebar"
              }
              size="sidebar"
              shadow={location.pathname === "/settings" ? "sidebar" : ""}
            >
              <img src={setting} alt="setting" />
              <p className="text-base font-semibold">Settings</p>
            </Button>
          </Link>
          <Button variant="sidebar" size="sidebar" onClick={userLogout}>
            <img src={forbidden} alt="forbidden" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
