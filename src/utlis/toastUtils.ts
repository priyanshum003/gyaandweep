// src/utils/toastUtils.ts

import toast, { ToastOptions } from 'react-hot-toast';

// Define default options for toasts
const defaultToastOptions: ToastOptions = {
  style: {
    border: '1px solid #333',
    padding: '16px',
    color: '#333',
  },
  duration: 3000,
};

// Utility function to show success toast
export const showSuccessToast = (message: string) => {
  toast.success(message, defaultToastOptions);
};

// Utility function to show error toast
export const showErrorToast = (message: string) => {
  toast.error(message, defaultToastOptions);
};

// Utility function to show info toast
export const showInfoToast = (message: string) => {
  toast(message, {
    ...defaultToastOptions,
    icon: 'ℹ️',
  });
};

// Utility function to show custom toast
export const showCustomToast = (message: string, options?: ToastOptions) => {
  toast(message, { ...defaultToastOptions, ...options });
};
