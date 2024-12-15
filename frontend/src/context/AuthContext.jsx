import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  loginWithCredentials, 
  registerWithCredentials,
  logout as logoutService,
} from '../services/authService';

const AuthContext = createContext(null);

export const useAuthStatus = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const register = useCallback(async (formData) => {
    setIsLoading(true);
    try {
      const result = await registerWithCredentials(formData);
      
      if (result.success) {
        setUser(result.data.user);
        navigate('/dashboard');
        toast.success('Registration successful!');
      } else {
        toast.error(result.error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const result = await loginWithCredentials(email, password);
      
      if (result.success) {
        setUser(result.data.user);
        navigate('/dashboard');
        toast.success('Login successful!');
      } else {
        toast.error(result.error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const logout = useCallback(async () => {
    try {
      const result = await logoutService();
      
      if (result.success) {
        setUser(null);
        navigate('/');
        toast.success('Logged out successfully');
      } else {
        toast.error('Logout failed');
      }
    } catch (error) {
      toast.error('Logout failed');
    }
  }, [navigate]);

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  const value = {
    user,
    isLoading,
    register,
    login,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};