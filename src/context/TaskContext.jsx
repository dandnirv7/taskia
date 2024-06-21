import { useState, useEffect, createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { toast } from "@/components/ui/use-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const navigate = useNavigate();

  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const users = JSON.parse(localStorage.getItem("users"));
  const currentUser = users?.find((user) => user.username === userLoggedIn);

  const storedTasks = useMemo(
    () => currentUser?.tasks || [],
    [currentUser?.tasks]
  );

  useEffect(() => {
    setTasks((prevTasks) => {
      if (JSON.stringify(prevTasks) !== JSON.stringify(storedTasks)) {
        return storedTasks;
      }
      return prevTasks;
    });
  }, [storedTasks]);

  const addTask = (data) => {
    const newTask = {
      id: uuidv4(),
      taskName: data.taskName,
      priority: data.priority,
      status: "in progress",
      createdAt: new Date().toDateString(),
      deadline: new Date(data.deadline).toDateString(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: updatedTasks } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast({ description: "Task added successfully!", variant: "success" });
  };

  const deleteTask = (taskId) => {
    const tasksFiltered = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksFiltered);

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: tasksFiltered } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const editTask = (taskId) => tasks.find((task) => task.id === taskId);

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );

    setTasks(updatedTasks);

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: updatedTasks } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast({ description: "Task updated successfully!", variant: "success" });
  };

  const completedTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "completed" } : task
    );

    setTasks(updatedTasks);

    const updatedUsers = users.map((user) =>
      user.username === userLoggedIn ? { ...user, tasks: updatedTasks } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const searchTask = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      navigate("/dashboard");
      return;
    }

    const results = tasks.filter((task) =>
      task.taskName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredTasks(results);
    setSearchParams({ q: searchQuery });
    navigate(`/dashboard/search?q=${searchQuery.toLowerCase()}`);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filteredTasks,
        searchQuery,
        setSearchQuery,
        addTask,
        deleteTask,
        editTask,
        updateTask,
        completedTask,
        searchTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
