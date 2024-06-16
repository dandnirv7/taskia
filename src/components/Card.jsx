import profile from "@/assets/img/profile-circle.svg";
import ghost from "@/assets/img/ghost.svg";
import layer from "@/assets/img/layer.svg";
import clockRed from "@/assets/img/clock-red.svg";
import flag from "@/assets/img/flag.svg";
import greenFlag from "@/assets/img/green-flag.svg";
import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";
import { Button } from "@/components/ui/button.jsx";
import { DialogTask } from "@/components/fragments/DialogTask";

const Card = () => {
  const { tasks, userLoggedIn, deleteTask, editTask, completedTask } =
    useContext(TaskContext);

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const formattedTaskName = (taskName) => {
    if (taskName?.length >= 50) {
      return taskName?.substring(0, 50).trim().concat("...");
    }

    return taskName;
  };

  return (
    <>
      {tasks
        .slice()
        .reverse()
        .map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 bg-white rounded-3xl"
          >
            <div>
              <div className="flex flex-row items-center gap-3 mb-5 ">
                <div className="w-[50px] h-[50px] rounded-full bg-[#BDEBFF]">
                  <img src={ghost} alt="profile" className="mx-auto mt-3" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {formattedTaskName(task.taskName)}
                  </h2>
                  <p className="text-[14px] text-[#7E7997]">
                    Created at {formattedDate(task.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 capitalize">
                <div className="flex flex-row items-center justify-center gap-1">
                  <img src={layer} alt="priority" />
                  <p className="text-base font-semibold">{task.priority}</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                  <img src={clockRed} alt="priority" />
                  <p className="text-base font-semibold text-red-500">
                    {formattedDate(task.deadline)}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                  <img
                    src={task.status === "completed" ? greenFlag : flag}
                    alt="priority"
                  />
                  <p
                    className={`text-base font-semibold

                      ${
                        task.status === "completed"
                          ? "text-[#51EC96]"
                          : "text-black"
                      }`}
                  >
                    {task.status}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                  <img src={profile} alt="priority" />
                  <p className="text-base font-semibold">{userLoggedIn}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {task.status === "completed" ? (
                <></>
              ) : (
                <>
                  <Button
                    variant="complete"
                    type="button"
                    onClick={() => completedTask(task.id)}
                    className="px-5 py-3 font-semibold text-green-500 border border-green-500 rounded-full"
                  >
                    Complete
                  </Button>
                  <DialogTask task={task} onClick={() => editTask(task.id)} />
                </>
              )}
              <Button
                variant="delete"
                type="button"
                onClick={() => deleteTask(task.id)}
                className="px-5 py-3 font-semibold text-red-500 border border-red-500 rounded-full"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
    </>
  );
};

Card.propTypes = {
  tasks: PropTypes.array,
  username: PropTypes.string,
};

export default Card;
