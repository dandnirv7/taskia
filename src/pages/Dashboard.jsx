import { Link } from "react-router-dom";
import Card from "@/components/Card";
import EmptyTask from "@/components/EmptyTask";

export default function Dashboard() {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const users = JSON.parse(localStorage.getItem("users"));

  const currentUser = users.find((user) => user.username === userLoggedIn);
  const tasks = currentUser ? currentUser.tasks : [];

  return (
    <main className="">
      <div className="flex items-center justify-between py-8 flew-row">
        <div>
          <h1 className="text-3xl font-bold">Manage Task</h1>
          <p className="">Set the goals to improve your self</p>
        </div>
        <Link to="/dashboard/add-task">
          <button
            type="button"
            className={
              tasks.length === 0
                ? "hidden"
                : "py-3 px-5 text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] font-semibold"
            }
          >
            Add New Task
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-5 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 h-[60vh] pr-2">
        {tasks.length === 0 ? (
          <>
            <EmptyTask />
          </>
        ) : (
          <>
            <Card tasks={tasks} username={userLoggedIn} />
          </>
        )}
      </div>
    </main>
  );
}
