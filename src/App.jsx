import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";

import Layout from "@/components/layout/Layout";

import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Search from "@/pages/Search";

import { TaskProvider } from "@/context/TaskContext";
import { UserProvider } from "@/context/UserContext";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/register"
          element={
            <UserProvider>
              <Register />
            </UserProvider>
          }
        />
        <Route
          path="/login"
          element={
            <UserProvider>
              <Login />
            </UserProvider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserProvider>
                <TaskProvider>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </TaskProvider>
              </UserProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/search"
          element={
            <ProtectedRoute>
              <UserProvider>
                <TaskProvider>
                  <Layout>
                    <Search />
                  </Layout>
                </TaskProvider>
              </UserProvider>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}
