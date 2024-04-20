import { Link } from "react-router-dom";
import FormAddTask from "@/components/FormAddTask";

const NewTask = () => {
  return (
    <main>
      <div className="flex items-center justify-between py-8 flew-row">
        <div>
          <h1 className="text-3xl font-bold">Add New Task</h1>
          <p className="">Set the goals to improve your self</p>
        </div>
        <Link to="/dashboard">
          <button
            type="button"
            className="py-3 px-5 text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] font-semibold"
          >
            Tasks List
          </button>
        </Link>
      </div>
      <FormAddTask />
    </main>
  );
};

export default NewTask;
