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
import { getStoredAuthData } from './utils/authUtils';
import { LoadingScreen } from './components/googleLoading/loadingScreen';
import { CopyrightPolicy } from './components/legal/Copyright';

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

export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { token, user } = getStoredAuthData();

  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

function App() {

  const { token, user } = getStoredAuthData();

  const isAuthenticated = token && !isTokenExpired(token);

  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/login"
              element={
                isAuthenticated && user ? (
                  <Navigate to={`/${user?.role || 'user'}`} replace />
                ) : (
                  <div><ThemeToggle /><LoginForm /></div>
                )
              }
            />

            <Route
              path="/signup"
              element={
                isAuthenticated && user ? (
                  <Navigate to={`/${user?.role || 'user'}`} replace />
                ) : (
                  <div><ThemeToggle /><SignupForm /></div>
                )
              }
            />

            <Route path='/authenticating' element={
              isAuthenticated && user ? (
                <Navigate to={`/${user?.role || 'user'}`} replace />
              ) : (
                <div><ThemeToggle /><LoadingScreen /></div>
              )
            } />

            <Route path="/forgot-password" element={<div><ThemeToggle /><ForgotPasswordForm /></div>} />
            <Route path="/terms" element={<><ThemeToggle /><TermsOfService /></>} />
            <Route path="/privacy" element={<><ThemeToggle /><PrivacyPolicy /></>} />
            <Route path="/copyright" element={<><ThemeToggle /><CopyrightPolicy /></>} />

            <Route
              path="/user/*"
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <DashboardLayout page="dashboard" />
                </ProtectedRoute>
              }
            />

            <Route path='/user/profile' element={
              <ProtectedRoute allowedRoles={['user']}>
                <DashboardLayout page="profile" />
              </ProtectedRoute>
            } />

            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard page='course' />
                </ProtectedRoute>
              }
            />

            <Route path='/admin/users' element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard page='users' />
              </ProtectedRoute>
            } />

            <Route path='/admin/profile' element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard page='profile' />
              </ProtectedRoute>
            } />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;