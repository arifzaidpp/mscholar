import { toast } from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL;

export const getGoogleAuthUrl = async (type = 'login') => {
  try {
    const response = await fetch(`${API_URL}/auth/google/url?type=${type}`, {
      method: 'GET',
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error('Failed to get Google auth URL');
    }
    
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error getting Google auth URL:', error);
    toast.error('Failed to initialize Google login');
    return null;
  }
};

export const loginWithCredentials = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
};

export const registerWithCredentials = async (formData) => {
  console.log(formData);
  
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
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
      offlineStatus(!online);
      onlineStatus(online);
      navigate(data.user.role === 'admin' ? '/admin' : '/user');
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }

    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
};