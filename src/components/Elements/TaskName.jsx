import PropTypes from "prop-types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const TaskName = ({ value, onChange, errors }) => {
  return (
    <div className="grid items-center w-full gap-2">
      <Label htmlFor="taskName">Task Name</Label>
      <Input
        id="taskName"
        value={value}
        onChange={onChange}
        placeholder="Enter your task"
        className="col-span-3"
      />
      {errors && (
        <span className="text-xs font-semibold text-red-500">
          {errors.message}
        </span>
      )}
    </div>
  );
};

TaskName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};
