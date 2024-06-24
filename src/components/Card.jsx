import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

import {
  ghost,
  layer,
  layerDark,
  clockRed,
  flag,
  flagDark,
  greenFlag,
  profile,
  profileDark,
} from "@/assets/images";

import { Button } from "@/components/ui/button.jsx";
import { DialogTask } from "@/components/fragments/DialogTask";

import { toDate, truncateText } from "@/utils/formatters";
import { UserContext } from "@/context/UserContext";

export const Card = ({ tasks }) => {
  const { deleteTask, editTask, completedTask } = useContext(TaskContext);
  const { isDarkmode, userLoggedIn } = useContext(UserContext);

  return (
    <>
      {tasks
        .slice()
        .reverse()
        .map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 bg-white rounded-3xl dark:bg-dark-tertiary"
          >
            <div>
              <div className="flex flex-row items-center gap-3 mb-5 ">
                <div className="w-[50px] h-[50px] rounded-full bg-[#BDEBFF]">
                  <img src={ghost} alt="profile" className="mx-auto mt-3" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {truncateText(task.taskName, 50)}
                  </h2>
                  <p className="text-[14px] text-[#7E7997]">
                    Created at {toDate(task.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 capitalize dark:text-[#7E7997]">
                <div className="flex flex-row items-center justify-center gap-1">
                  <img src={isDarkmode ? layerDark : layer} alt="priority" />
                  <p className="text-base font-semibold">{task.priority}</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                  <img src={clockRed} alt="priority" />
                  <p className="text-base font-semibold text-red-500">
                    {toDate(task.deadline)}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 ">
                  <img
                    src={
                      task.status === "completed"
                        ? greenFlag
                        : isDarkmode
                        ? flagDark
                        : flag
                    }
                    alt="priority"
                  />
                  <p
                    className={`text-base font-semibold

                      ${
                        task.status === "completed"
                          ? "text-[#51EC96]"
                          : "text-black dark:text-[#7E7997]"
                      }`}
                  >
                    {task.status}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                  <img
                    src={isDarkmode ? profileDark : profile}
                    alt="priority"
                  />
                  <p className="text-base font-semibold ">{userLoggedIn}</p>
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
