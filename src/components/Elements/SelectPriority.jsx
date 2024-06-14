import PropTypes from "prop-types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

export const SelectPriority = ({ value, onChange, errors }) => (
  <div className="grid items-center gap-2">
    <Label htmlFor="priority">Priority</Label>
    <Select value={value} onValueChange={(value) => onChange(value)}>
      <SelectTrigger id="priority">
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
