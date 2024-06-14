import Card from "@/components/Card";
import EmptyTask from "@/components/EmptyTask";
import { DialogTask } from "@/components/fragments/DialogTask";
import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";

const Dashboard = () => {
  const { tasks, userLoggedIn } = useContext(TaskContext);

  return (
    <main>
      <div className="flex items-center justify-between py-8 flew-row">
        <div>
          <h1 className="text-3xl font-bold">Manage Task</h1>
          <p>Set the goals to improve your self</p>
        </div>
        {tasks.length > 0 && <DialogTask />}
      </div>

      <div className="flex flex-col gap-5 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 h-[60vh] pr-2">
        {tasks.length === 0 ? (
          <EmptyTask />
        ) : (
          <Card tasks={tasks} username={userLoggedIn} />
        )}
      </div>
    </main>
  );
};

export default Dashboard;
