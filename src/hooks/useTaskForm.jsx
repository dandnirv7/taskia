"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  taskName: z.string().min(5, "Task Name must be at least 5 characters long"),
  deadline: z.date({
    required_error: "A deadline is required.",
  }),
  priority: z.enum(["Low", "Medium", "High"], {
    required_error: "Priority level can't be empty",
  }),
});

const useTaskForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      taskName: "",
      priority: "Low",
    },
  });

  const { formState } = form;

  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const users = JSON.parse(localStorage.getItem("users"));

  const currentUser = users.find((user) => user.username === userLoggedIn);
  const tasks = currentUser ? currentUser.tasks : [];

  const Toast = () => {
    toast({
      description: "Task added successfully!",
      variant: "success",
    });
  };

  function onSubmit(data) {
    const { taskName, deadline, priority } = data;

    function formattedDate(date) {
      const today = date || new Date();
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formatted = today.toLocaleDateString("en-US", options);
      return formatted;
    }

    const newTask = {
      createdAt: formattedDate(new Date()),
      title: taskName,
      deadline: formattedDate(deadline),
      priority: priority,
      id: tasks.length + 1,
      status: "In Progress",
    };

    const updatedTasks = [...tasks, newTask];

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: updatedTasks } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    form.reset();

    Toast();
  }

  return {
    form,
    formState,
    onSubmit,
  };
};

export default useTaskForm;
