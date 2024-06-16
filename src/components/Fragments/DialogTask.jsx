import PropTypes from "prop-types";
import { useTaskForm } from "@/hooks/useTaskForm";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TextInput } from "@/components/elements/TextInput";
import { SelectPriority } from "@/components/elements/SelectPriority";
import { DatePicker } from "@/components/elements/DatePicker";

import noteFavorite from "@/assets/img/note-favorite-outline.svg";

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
        <Button
          variant={task ? "edit" : "primary"}
          size="lg"
          shadow={task ? "" : "default"}
        >
          {task ? "Edit" : "Add New Task"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-2xl font-bold">
          {task ? "Edit Task" : ""}
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center gap-4 mb-4">
            <TextInput
              id="taskName"
              image={noteFavorite}
              label="Taskname"
              value={formData.taskName}
              onChange={(e) => handleValues("taskName", e.target.value)}
              placeholder="Enter your task"
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
            <Button
              variant="primary"
              shadow="default"
              type="submit"
              className="w-full my-3"
              size="lg"
            >
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
