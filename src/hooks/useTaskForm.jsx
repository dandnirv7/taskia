import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "@/components/ui/use-toast";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const addTaskSchema = yup.object().shape({
  taskName: yup.string().required("Taskname is required"),
  priority: yup
    .string()
    .oneOf(["low", "medium", "high"], "Priority level can't be empty")
    .required("Priority level can't be empty"),
  deadline: yup
    .date()
    .required("Date is required")
    .typeError("Date is required"),
});

const useTaskForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTaskSchema),
  });

  const [formData, setFormData] = useState({
    taskName: "",
    priority: "",
    deadline: null,
  });

  const handleChangeValues = (name, value) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setValue(name, value, { shouldValidate: true });
  };

  const addTask = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    const currentUser =
      users.find((user) => user.username === userLoggedIn) || {};
    const { tasks } = currentUser;

    const Toast = () => {
      toast({
        description: "Task added successfully!",
        variant: "success",
      });
    };

    const newTask = {
      createdAt: new Date(),
      deadline: data.deadline,
      id: uuidv4(),
      priority: data.priority,
      status: "in progress",
      title: data.taskName,
    };

    const updatedTasks = [...tasks, newTask];

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: updatedTasks } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    Toast();

    reset();
    setFormData({
      taskName: "",
      priority: "",
      deadline: null,
    });
  };

  return {
    register,
    handleSubmit,
    formData,
    errors,
    handleChangeValues,
    addTask,
  };
};

export default useTaskForm;
