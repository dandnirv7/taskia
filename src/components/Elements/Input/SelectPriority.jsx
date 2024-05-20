import PropTypes from "prop-types";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectPriority = ({ value, onValueChange, error }) => {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="priority">Priority Level</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          id="priority"
          className={
            error
              ? " focus:ring-2 focus:ring-offset-2 border border-red-500 focus:ring-red-500 focus:border-input"
              : ""
          }
        >
          <SelectValue placeholder="Select the level of task" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
        {error && (
          <span className="text-xs font-semibold text-red-500 ">
            {error.message}
          </span>
        )}
      </Select>
    </div>
  );
};

SelectPriority.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  error: PropTypes.object,
};

export default SelectPriority;
