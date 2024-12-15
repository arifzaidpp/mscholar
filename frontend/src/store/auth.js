import { create } from 'zustand';
import { clearAuthData } from '../utils/authUtils';

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')),
  token: localStorage.getItem('token'),
  login: (user, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, token });
  },
  logout: () => {
    clearAuthData();
    set({ user: null, token: null });
  },
}));