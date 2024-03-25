import profile from "@/assets/img/profile-circle.svg";
import ghost from "@/assets/img/ghost.svg";
import layer from "@/assets/img/layer.svg";
import clockRed from "@/assets/img/clock-red.svg";
import flag from "@/assets/img/flag.svg";
import greenFlag from "@/assets/img/green-flag.svg";
import PropTypes from "prop-types";

const Card = ({ tasks, username }) => {
  return (
    <>
      {tasks.map((task, index) => (
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
                <h2 className="text-xl font-bold">{task.title}</h2>
                <p className="text-[14px] text-[#7E7997]">
                  Created at {task.createdAt}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex flex-row items-center justify-center gap-1">
                <img src={layer} alt="priority" />
                <p className="text-base font-semibold">{task.priority}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <img src={clockRed} alt="priority" />
                <p className="text-base font-semibold text-red-500">
                  {task.deadline}
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <img
                  src={task.status === "Completed" ? greenFlag : flag}
                  alt="priority"
                />
                <p
                  className={
                    task.status === "Completed"
                      ? "text-[#51EC96]"
                      : "text-base font-semibold"
                  }
                >
                  {task.status}
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <img src={profile} alt="priority" />
                <p className="text-base font-semibold">{username}</p>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="px-5 py-3 font-semibold text-red-500 border border-red-500 rounded-full"
            >
              Delete
            </button>
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
