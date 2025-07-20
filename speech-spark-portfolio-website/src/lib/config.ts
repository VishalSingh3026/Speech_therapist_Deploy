// API Configuration for the application
export const API_CONFIG = {
  // Get API URL from environment variables
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  
  // API Endpoints
  ENDPOINTS: {
    CONTACT: '/api/contact',
    CONSULTATION: '/api/consultation',
  },

  // Request configuration
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },

  // Timeout in milliseconds
  TIMEOUT: 10000,
};

// Helper function to make API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return { success: response.ok, data, status: response.status };
  } catch (error) {
    console.error('API call failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error', status: 0 };
  }
};

// Environment configuration
export const ENV_CONFIG = {
  NODE_ENV: import.meta.env.VITE_NODE_ENV || 'development',
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  SITE_NAME: import.meta.env.VITE_SITE_NAME || 'Speech Spark Therapy',
  SITE_DESCRIPTION: import.meta.env.VITE_SITE_DESCRIPTION || 'Professional speech therapy services',
  SITE_URL: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  
  // Contact information
  THERAPIST_NAME: import.meta.env.VITE_THERAPIST_NAME || 'Speech Therapist',
  THERAPIST_PHONE: import.meta.env.VITE_THERAPIST_PHONE || '+1-xxx-xxx-xxxx',
  THERAPIST_EMAIL: import.meta.env.VITE_THERAPIST_EMAIL || 'contact@example.com',
};
