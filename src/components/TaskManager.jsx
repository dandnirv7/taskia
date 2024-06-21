import PropTypes from "prop-types";
import { Card } from "@/components/Card";
import { EmptyState } from "@/components/EmptyState";
import { DialogTask } from "@/components/fragments/DialogTask";
import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";

export const TaskManager = ({ type }) => {
  const { tasks, filteredTasks } = useContext(TaskContext);
  const isSearch = type === "search";
  const taskList = isSearch ? filteredTasks : tasks;

  return (
    <main>
      <div className="flex items-center justify-between py-8 flew-row">
        <div>
          <h1 className="text-3xl font-bold">Manage Task</h1>
          <p>Set the goals to improve your self</p>
        </div>
        {taskList.length > 0 && <DialogTask />}
      </div>

      <div className="flex flex-col gap-5 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 h-[60vh] pr-2">
        {taskList.length === 0 ? (
          <EmptyState
            title="Oops! No Task"
            message="You need to create some tasks for you to do"
          />
        ) : (
          <Card tasks={taskList} />
        )}
      </div>
    </main>
  );
};

TaskManager.propTypes = {
  type: PropTypes.string.isRequired,
};
