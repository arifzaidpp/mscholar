// Authentication utility functions
export const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const [, payload] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload.exp * 1000 < Date.now();
    } catch (error) {
      console.error('Token validation error:', error);
      return true;
    }
  };
  
  export const getStoredAuthData = () => {
    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      return { token, user };
    } catch (error) {
      console.error('Error getting stored auth data:', error);
      return { token: null, user: null };
    }
  };
  
  export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };