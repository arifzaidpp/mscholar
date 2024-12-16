import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/auth';

const useUpdateImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuthStore();
  
  const API_URL = import.meta.env.VITE_API_URL;

  const updateImage = async (imageFile, userId) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('avatar', imageFile);
      formData.append('userId', userId);

      const response = await fetch(`${API_URL}/user/update-image`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update image');
      }

      const result = await response.json();
      
      if (result.success) {
        // Update the user data in localStorage with new avatar
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const updatedUser = {
          ...currentUser,
          avatar: result.avatar
        };
        
        // Update local storage and auth store
        localStorage.setItem('user', JSON.stringify(updatedUser));
        login(updatedUser, localStorage.getItem('token'));
        
        toast.success('Profile image updated successfully');
        
        // Force a page reload to reflect changes
        window.location.reload();
      } else {
        throw new Error(result.message || 'Failed to update image');
      }

      return result;
    } catch (err) {
      console.error("Error in updateImage:", err);
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateImage, loading, error };
};

export default useUpdateImage;