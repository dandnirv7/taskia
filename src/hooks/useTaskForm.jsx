import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useState, useContext, useEffect } from "react";
import { TaskContext } from "@/context/TaskContext";

export const useTaskForm = ({ task }) => {
  const { addTask, updateTask } = useContext(TaskContext);

  const PRIORITY_LEVEL = ["low", "medium", "high"];

  const addTaskSchema = yup.object().shape({
    taskName: yup.string().required("Taskname can't be empty"),
    priority: yup
      .string()
      .oneOf(PRIORITY_LEVEL, "Priority level can't be empty")
      .required("Priority level can't be empty"),
    deadline: yup.string().required("Deadline can't be empty"),
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addTaskSchema),
    defaultValues: {
      taskName: task ? task.taskName : "",
      priority: task ? task.priority : "",
      deadline: task ? task.deadline : "",
    },
  });

  const [formData, setFormData] = useState({
    taskName: task ? task.taskName : "",
    priority: task ? task.priority : "",
    deadline: task ? task.deadline : "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (task) {
      setFormData({
        taskName: task.taskName,
        priority: task.priority,
        deadline: task.deadline,
      });
    }
  }, [task]);

  const handleValues = (name, value) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setValue(name, value, { shouldValidate: true });
  };

  const handleOpenChange = (open) => {
    setIsOpen(open);
  };
  const onSubmit = (data) => {
    if (task) {
      updateTask({ ...task, ...data });
      handleOpenChange(false);
    } else {
      addTask(data);
    }

    setFormData({
      taskName: "",
      priority: "",
      deadline: "",
    });

    reset();
  };

  return {
    handleSubmit,
    formData,
    errors,
    handleValues,
    onSubmit,
    isOpen,
    handleOpenChange,
  };
};
