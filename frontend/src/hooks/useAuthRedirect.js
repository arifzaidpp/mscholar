import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired, getStoredAuthData } from '../utils/authUtils';
import { useAuthStore } from '../store/auth';

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  useEffect(() => {
    const { token, user: storedUser } = getStoredAuthData();

    if (!token || isTokenExpired(token)) {
      logout();
      navigate('/login');
      return;
    }

    if (storedUser) {
      const redirectPath = storedUser.role === 'admin' ? '/admin' : '/user';
      navigate(redirectPath);
    }
  }, [navigate, logout]);

  return { user };
};