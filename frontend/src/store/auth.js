import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem('token'),
    login: (user, token) => {
        localStorage.setItem('token', token);
        set({ user, token });
    },
    logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null });
    },
}));
