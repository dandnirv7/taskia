import PropTypes from "prop-types";
import Note from "@/assets/img/note-favorite-outline.svg";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const TaskNameField = ({ control, formState }) => (
  <FormField
    control={control}
    name="taskName"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Task Name</FormLabel>
        <div className="relative">
          <img
            src={Note}
            alt=""
            className="absolute -translate-y-1/2 left-3 top-1/2"
          />
          <FormControl
            className={`ring-2 ring-[#977FFF] focus-visible:ring-2 focus-visible:ring-[#977FFF] rounded-full ${
              formState.errors.taskName
                ? "focus-visible:ring-red-500 ring-2 ring-red-500"
                : ""
            }`}
          >
            <Input placeholder="Enter task name" className="px-11" {...field} />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
);

TaskNameField.propTypes = {
  control: PropTypes.object,
  formState: PropTypes.object,
};

export default TaskNameField;
