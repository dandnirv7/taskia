import noteFavoriteDark from "@/assets/img/note-favorite-dark-orange.svg";
import { Link } from "react-router-dom";
import DialogAddTask from "./Fragments/DialogAddTask";

const EmptyTask = () => {
  return (
    <div className="w-[350px] rounded-3xl p-8 bg-white h-[330px] flex flex-col items-center justify-center mx-auto mt-8">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-20 h-20 rounded-full bg-[#FEE7BA] flex items-center justify-center">
          <img src={noteFavoriteDark} alt="tasks empty" />
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-xl font-bold">Oops! No Task</h1>
          <p className="text-md">You need to create some tasks for you to do</p>
        </div>
      </div>
      <DialogAddTask />
    </div>
  );
};

export default EmptyTask;
