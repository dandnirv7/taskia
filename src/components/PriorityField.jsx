import PropTypes from "prop-types";
import Layer from "@/assets/img/layer.svg";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

const PriorityField = ({ control, formState }) => {
  return (
    <FormField
      control={control}
      name="priority"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Priority Level</FormLabel>
          <div className="relative">
            <img
              src={Layer}
              alt=""
              className="absolute -translate-y-1/2 left-3 top-1/2"
            />
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl
                className={`ring-2 ring-[#977FFF] focus:ring-2 focus:ring-[#977FFF] rounded-full pl-11 ${
                  formState.errors.priority
                    ? "focus-visible:ring-2 focus-visible:ring-red-500 ring-2 ring-red-500"
                    : ""
                }`}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select the level of task" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

PriorityField.propTypes = {
  control: PropTypes.object,
  formState: PropTypes.object,
};

export default PriorityField;
