import { useState, useEffect, createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { toast } from "@/components/ui/use-toast";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const users = JSON.parse(localStorage.getItem("users"));
  const currentUser = users.find((user) => user.username === userLoggedIn);
  const [tasks, setTasks] = useState([]);
  // const [isOpen, setIsOpen] = useState(null);

  const storedTasks = useMemo(() => {
    return currentUser ? currentUser.tasks : [];
  }, [currentUser]);

  useEffect(() => {
    setTasks(storedTasks);
  }, []);

  const addTask = (data) => {
    const newTask = {
      createdAt: new Date().toDateString(),
      deadline: new Date(data.deadline).toDateString(),
      id: uuidv4(),
      priority: data.priority,
      status: "in progress",
      taskName: data.taskName,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: updatedTasks } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // setIsOpen(false);

    toast({
      description: "Task added successfully!",
      variant: "success",
    });
  };

  const deleteTask = (taskId) => {
    const tasksFiltered = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksFiltered);

    const updatedUsers = users.map((user) => {
      if (user.username === userLoggedIn) {
        return {
          ...user,
          tasks: tasksFiltered,
        };
      }

      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const editTask = (taskId) => {
    const filteredTask = tasks.find((task) => task.id === taskId);
    return filteredTask;
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );

    setTasks(updatedTasks);

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: updatedTasks } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast({
      description: "Task updated successfully!",
      variant: "success",
    });
  };

  const completedTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "completed" } : task
    );

    const updatedUsers = users.map((user) => {
      if (user.username === userLoggedIn) {
        return {
          ...user,
          tasks: updatedTasks,
        };
      }

      return user;
    });

    setTasks(updatedTasks);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        userLoggedIn,
        addTask,
        deleteTask,
        completedTask,
        editTask,
        updateTask,
        // isOpen,
        // setIsOpen,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
TaskProvider.propTypes = {
  children: PropTypes.object,
};
