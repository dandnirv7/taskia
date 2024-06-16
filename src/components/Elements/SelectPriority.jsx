import PropTypes from "prop-types";
import priority from "@/assets/img/layer.svg";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

export const SelectPriority = ({ value, onChange, errors }) => (
  <div className="relative space-y-1">
    <Label htmlFor="priority">Priority</Label>
    <img
      src={priority}
      alt="priority-icon"
      className="absolute top-[32px] left-3 w-6 h-6"
    />
    <Select value={value} onValueChange={(value) => onChange(value)}>
      <SelectTrigger
        id="priority"
        className="pl-12"
        error={errors ? true : false}
      >
        <SelectValue placeholder="Select the level of task" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="low">Low</SelectItem>
        <SelectItem value="medium">Medium</SelectItem>
        <SelectItem value="high">High</SelectItem>
      </SelectContent>
    </Select>
    {errors && (
      <span className="text-xs font-semibold text-red-500">
        {errors.message}
      </span>
    )}
  </div>
);

SelectPriority.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};
