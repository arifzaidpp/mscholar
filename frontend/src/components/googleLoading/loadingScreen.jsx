import React, { useEffect, useRef } from "react";
import { Shield } from "lucide-react"; // Assuming Lucide Icons are used
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function LoadingScreen() {
    const params = new URLSearchParams(location.search);
    const success = params.get('success');
    const status = params.get('status');
    const message = params.get('message');
    const isEffectCalled = useRef(false); // Ref to track effect execution
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        if (isEffectCalled.current) return; // Skip if already executed
        isEffectCalled.current = true; // Mark as executed

        if ( params.size === null || params.size === undefined || params.size === 0 ) {
            navigate('/');
        }

        // Handle additional status-based messaging
        if (status === 'ACCOUNT_EXISTS') {
            setError('An account with this email already exists.<br />Please login instead.');
            toast.error('Account already exists. Please login.');
        } else if (status === 'ACCOUNT_NOT_FOUND') {
            setError('No account found with this email. Please sign up first.');
            toast.error('Account not found. Please sign up.');
        } else if (success === 'false') {
            setError('Authentication failed.');
            toast.error('Authentication failed.');
        } else if (success === 'true') {
            setError('');
            login(params.get('email'), params.get('password'));
        }

        // Clear query parameters in the URL without reloading the page
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState(null, '', newUrl);

    }, [success, status, message, ]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Google Logo */}
        <div className="mb-12">
          <div className="flex space-x-1">
            {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map(
              (color, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              )
            )}
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-16 h-16">
            <div className="absolute w-16 h-16 rounded-full border-4 border-t-blue-500 border-r-red-500 border-b-yellow-500 border-l-green-500 animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-normal text-gray-800 dark:text-gray-100">
            One moment please...
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            We're verifying your credentials
          </p>
        </div>

        {/* Domain Info */}
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Signing in to mscholar.onrender.com
        </div>

        {/* Security Info */}
        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm mt-8">
          <Shield className="w-4 h-4" />
          <p>Your info is protected with industry-leading encryption</p>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <button className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Privacy Policy
          </button>
          <button className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  );
}
