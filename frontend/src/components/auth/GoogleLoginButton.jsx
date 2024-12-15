import React, { useEffect, useCallback, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function GoogleLoginButton() {
  const { googleLogin, googleSignup } = useAuthContext();
  const location = useLocation();
  const [error, setError] = useState('');
  const isSignupPage = location.pathname === '/signup';

  const handleCredentialResponse = useCallback(async (response) => {
    if (response.credential) {
      try {
        setError('');
        if (isSignupPage) {
          const result = await googleSignup(response.credential);
          if (!result.success) {
            if (result.type === 'ACCOUNT_EXISTS') {
              setError('An account with this email already exists. Please login instead.');
              toast.error('Account exists. Please login.');
            } else {
              setError('Failed to sign up with Google. Please try again.');
              toast.error('Signup failed. Please try again.');
            }
          }
        } else {
          const result = await googleLogin(response.credential);
          if (!result.success) {
            if (result.type === 'ACCOUNT_NOT_FOUND') {
              setError('No account found with this email. Please sign up first.');
              toast.error('Account not found. Please sign up.');
            } else {
              setError('Failed to login with Google. Please try again.');
              toast.error('Login failed. Please try again.');
            }
          }
        }
      } catch (error) {
        setError('Authentication failed. Please try again.');
        toast.error('Authentication failed. Please try again.');
      }
    }
  }, [googleLogin, googleSignup, isSignupPage]);

  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        try {
          window.google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
            auto_select: false,
          });

          window.google.accounts.id.renderButton(
            document.getElementById('google-login-button'),
            {
              theme: 'outline',
              size: 'large',
              width: '100%',
              text: isSignupPage ? 'signup_with' : 'continue_with',
              shape: 'rectangular',
            }
          );
        } catch (error) {
          setError('Failed to initialize Google Sign-In');
          toast.error('Failed to initialize Google Sign-In');
          console.error('Google Sign-In initialization error:', error);
        }
      };

      script.onerror = () => {
        setError('Failed to load Google Sign-In');
        toast.error('Failed to load Google Sign-In');
        console.error('Failed to load Google Sign-In script');
      };

      document.body.appendChild(script);
      return () => {
        try {
          document.body.removeChild(script);
        } catch (error) {
          // Script might already be removed
        }
      };
    };

    loadGoogleScript();
  }, [handleCredentialResponse, isSignupPage]);

  return (
    <div className="space-y-4">
      <div 
        id="google-login-button"
        className="w-full flex justify-center"
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 text-center">
          {error}
        </p>
      )}
    </div>
  );
}