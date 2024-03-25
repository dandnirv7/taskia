import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import search from "@/assets/img/search-normal.svg";
import profilePicture from "@/assets/img/profile-picture.jpg";
import activity from "@/assets/img/activity.svg";
import direct from "@/assets/img/direct.svg";

const Navbar = ({ username }) => {
  return (
    <nav className="flex flex-row items-center justify-between px-5 py-3 bg-white rounded-2xl">
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search by report name..."
          className="border border-gray-300 rounded-3xl w-full py-3 pl-5 pr-14 focus:border-[#977FFF] outline-none focus:ring-[#977FFF]"
        />
        <img src={search} alt="search" className="absolute right-5 top-3" />
      </div>
      <div className="flex flex-row items-center ">
        <div className="flex flex-row items-center justify-center gap-3 border-r border-[#DBD8E9] pr-8 mr-8">
          <Link to="/activity">
            <div className="p-3 border border-[#DBD8E9] rounded-full">
              <img src={activity} alt="activity" />
            </div>
          </Link>
          <Link to="/direct">
            <div className="p-3 border border-[#DBD8E9] rounded-full">
              <img src={direct} alt="direct" />
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="text-end">
            <p className="text-gray-400">Hello,</p>
            <p className="font-bold">{username}</p>
          </div>
          <img
            src={profilePicture}
            alt="profile"
            className="object-cover object-center w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  username: PropTypes.string,
};

export default Navbar;
