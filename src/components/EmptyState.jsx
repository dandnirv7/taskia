import PropTypes from "prop-types";

import { DialogTask } from "@/components/fragments/DialogTask";
import { noteFavoriteDark } from "@/assets/img/images";

export const EmptyState = ({ title, message }) => {
  return (
    <div className="w-[350px] rounded-3xl p-8 bg-white h-[330px] flex flex-col items-center justify-center mx-auto mt-8">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-20 h-20 rounded-full bg-[#FEE7BA] flex items-center justify-center">
          <img src={noteFavoriteDark} alt="tasks empty" />
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-md">{message}</p>
        </div>
      </div>
      <DialogTask />
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
