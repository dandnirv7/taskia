import useTaskForm from "@/hooks/useTaskForm";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import TaskNameField from "./TaskNameField";
import PriorityField from "./PriorityField";
import DeadlineField from "./DeadlineField";

const FormAddTask = () => {
  const { onSubmit, formState, form } = useTaskForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[45%] px-5 py-5 space-y-6 bg-white rounded-3xl"
      >
        <TaskNameField control={form.control} formState={formState} />
        <PriorityField control={form.control} formState={formState} />
        <DeadlineField control={form.control} formState={formState} />

        <Button
          type="submit"
          className="w-full py-3 px-5 text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] font-semibold"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormAddTask;
