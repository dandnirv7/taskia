import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useTaskForm } from "@/hooks/useTaskForm";
import { TaskName } from "@/components/elements/TaskName";
import { SelectPriority } from "@/components/elements/SelectPriority";
import { DatePicker } from "@/components/elements/DatePicker";

export const DialogTask = ({ task }) => {
  const {
    handleSubmit,
    formData,
    handleValues,
    errors,
    onSubmit,
    isOpen,
    handleOpenChange,
  } = useTaskForm({ task });

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant={task ? "edit" : "outline"}>
          {task ? "Edit" : "Add New Task"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-2xl font-bold">
          {task ? "Edit Task" : ""}
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center grid-rows-3 gap-4 mb-4">
            <TaskName
              value={formData.taskName}
              onChange={(e) => handleValues("taskName", e.target.value)}
              errors={errors.taskName}
            />

            <SelectPriority
              value={formData.priority}
              onChange={(value) => handleValues("priority", value)}
              errors={errors.priority}
            />
            <DatePicker
              value={formData.deadline}
              onChange={(value) => handleValues("deadline", value)}
              errors={errors.deadline}
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              {task ? "Update Task" : "Save New Task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

DialogTask.propTypes = {
  task: PropTypes.object,
  onClick: PropTypes.func,
};
