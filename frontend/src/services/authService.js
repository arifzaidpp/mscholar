const API_URL = import.meta.env.VITE_API_URL;

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
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    return { success: true, data };
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