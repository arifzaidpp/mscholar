import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/auth';
import { useAuthStatus } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login: setAuth, logout: clearAuth } = useAuthStore();
  const { login: saveUser, logout: statusLogout } = useAuthStatus();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const register = useCallback(async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setAuth(data.user, data.token);
      saveUser(data);
      navigate(data.user.role === 'admin' ? '/admin' : '/user');
      toast.success('Registration successful!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const login = useCallback(async (email, password) => {
    
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setUser(data.user);
      setAuth(data.user, data.token);
      saveUser(data);
      navigate(data.user.role === 'admin' ? '/admin' : '/user');
      toast.success('Login successful!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const googleLogin = useCallback(async (credential) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credential }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Google login failed');
      }

      setUser(data.user);
      navigate('/dashboard');
      toast.success('Login successful!');
    } catch (error) {
      console.error('Google login error:', error);
      toast.error(error.message || 'Failed to login with Google');
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const logout = useCallback(async () => {
    
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      setUser(null);
      clearAuth();
      statusLogout();
      navigate('/');
      window.location.reload();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  }, [navigate]);

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  }, []);

  return {
    user,
    isLoading,
    register,
    login,
    googleLogin,
    logout,
    checkAuth,
  };
};