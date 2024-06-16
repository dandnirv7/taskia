import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import ProtectedRoute from "@/routes/ProtectedRoute";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";

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
          index
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <TaskProvider>
                  <Dashboard />
                </TaskProvider>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}
