import useTaskForm from "@/hooks/useTaskForm";
import { Button } from "@/components/ui/button";

import TaskName from "../Elements/Input/TaskName";
import SelectPriority from "@/components/Elements/Input/SelectPriority";
import DatePicker from "@/components/Elements/Input/DatePicker";

const FormAddTask = () => {
  const { handleSubmit, formData, errors, handleChangeValues, addTask } =
    useTaskForm();

  return (
    <form onSubmit={handleSubmit(addTask)}>
      <div className="grid items-center w-full gap-4">
        <TaskName
          value={formData.taskName}
          onValueChange={(e) => handleChangeValues("taskName", e.target.value)}
          error={errors.taskName}
        />
        <SelectPriority
          value={formData.priority}
          onValueChange={(value) => handleChangeValues("priority", value)}
          error={errors.priority}
        />
        <DatePicker
          date={formData.deadline}
          selected={formData.deadline}
          onSelect={(value) => handleChangeValues("deadline", value)}
          error={errors.deadline}
          name="deadline"
        />
      </div>
      <Button
        type="submit"
        className="mt-4 w-full bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0"
      >
        Save New Task
      </Button>
    </form>
  );
};

export default FormAddTask;
