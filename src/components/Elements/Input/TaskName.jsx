import PropTypes from "prop-types";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TaskName = ({ value, onValueChange, error }) => {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="taskName">Task Name</Label>
      <Input
        value={value}
        onChange={onValueChange}
        type="text"
        id="taskName"
        placeholder="Enter task name"
        className={
          error
            ? "border border-red-500 focus-visible:ring-red-500 focus:border-input"
            : ""
        }
      />
      {error && (
        <span className="text-xs font-semibold text-red-500 ">
          {error.message}
        </span>
      )}
    </div>
  );
};

TaskName.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  error: PropTypes.object,
};

export default TaskName;
