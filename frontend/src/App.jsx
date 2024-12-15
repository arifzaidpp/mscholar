import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeToggle } from './components/landingPage/ThemeToggle';
import { LandingPage } from './components/landingPage/LandingPage';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { ForgotPasswordForm } from './components/auth/ForgotPasswordForm';
import { TermsOfService } from './components/legal/TermsOfService';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { DashboardLayout } from './components/user/layout/DashboardLayout';
import AdminDashboard from './components/admin/layout/AdminDashboard';
import { useAuthStore } from "./store/auth";
import { useAuthStatus } from "./context/AuthContext";

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload.exp < Date.now() / 1000;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { authUser } = useAuthStatus();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const token = authUser?.token || null;
  const userRole = authUser?.user?.role;

  useEffect(() => {
    const checkToken = () => {
      if (token && isTokenExpired(token)) {
        setModalOpen(true);
      }
    };

    checkToken();
    const interval = setInterval(checkToken, 60000);
    return () => clearInterval(interval);
  }, [token]);

  if (!authUser) {
    return children;
  }

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && isOnline && !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {isModalOpen && (
        <ConfirmationModal
          isOpen={isModalOpen}
          data={{
            title: "Session Expired",
            message: "Your session has expired. Please log in again.",
            onConfirm: async () => {
              await logout();
              navigate("/login", { replace: true });
            },
            buttonLabel: "OK",
            showCancel: false
          }}
        />
      )}
      {children}
    </>
  );
};

function App() {
  const user = useAuthStore((state) => state.user);
  console.log(user);

  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={!user ? (
              <div><ThemeToggle /><LoginForm /></div>
            ) : (
              <Navigate to={`/${user.role}`} replace />
            )} />

            <Route path="/signup" element={!user ? (
              <div><ThemeToggle /><SignupForm /></div>
            ) : (
              <Navigate to={`/${user.role}`} replace />
            )} />

            <Route path="/forgot-password" element={<div><ThemeToggle /><ForgotPasswordForm /></div>} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />


            <Route path="/user" element={<ProtectedRoute allowedRoles={["user"]}>
              <DashboardLayout />
            </ProtectedRoute>}>
              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>

            <Route path='/admin/*' element={<ProtectedRoute allowedRoles={["user"]}>
              <AdminDashboard />
            </ProtectedRoute>} />

          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;