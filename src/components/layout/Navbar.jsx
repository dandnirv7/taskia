import PropTypes from "prop-types";
import { useContext } from "react";

import {
  search,
  activity,
  direct,
  searchDark,
  activityDark,
  directDark,
  profile,
  profileDark,
} from "@/assets/images";

import { Input } from "@/components/ui/input";

import { TaskContext } from "@/context/TaskContext";
import { UserContext } from "@/context/UserContext";
import { truncateText } from "@/utils/formatters";

const Navbar = () => {
  const { tasks, searchTask, setSearchQuery, searchQuery } =
    useContext(TaskContext);
  const { username, isDarkmode } = useContext(UserContext);

  return (
    <nav className="flex flex-row items-center justify-between px-5 py-3 bg-white rounded-2xl dark:bg-dark-tertiary">
      <form onSubmit={(e) => searchTask(e)} className="relative w-1/3 ">
        <button
          type="submit"
          disabled={tasks.length === 0 ? true : false}
          className="absolute outline-none top-2 right-5"
          tabIndex={-1}
        >
          <img src={isDarkmode ? searchDark : search} alt="search" />
        </button>
        <Input
          id="search"
          disabled={tasks.length === 0 ? true : false}
          placeholder="Search by task name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent"
        />
      </form>
      <div className="flex flex-row items-center ">
        <div className="flex flex-row items-center justify-center gap-3 border-r border-[#DBD8E9] pr-8 mr-8">
          <div className="hover:cursor-pointer p-3 hover:ring-2 hover:ring-offset-2 hover:ring-[#977FFF] border border-[#DBD8E9] rounded-full hover:ring-offset-transparent">
            <img src={isDarkmode ? activityDark : activity} alt="activity" />
          </div>

          <div className="hover:cursor-pointer p-3 hover:ring-2 hover:ring-offset-2 hover:ring-[#977FFF] border border-[#DBD8E9] rounded-full hover:ring-offset-transparent">
            <img src={isDarkmode ? directDark : direct} alt="direct" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="text-end">
            <p className="text-gray-400">Hello,</p>
            <p className="font-bold">{truncateText(username, 20)}</p>
          </div>
          <img
            src={isDarkmode ? profileDark : profile}
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
