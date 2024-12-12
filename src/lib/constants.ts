// OAuth Configuration
export const OAUTH_CONFIG = {
  google: {
    // Use a default development client ID if env variable is not set
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '1234567890-example.apps.googleusercontent.com',
    scopes: ['openid', 'profile', 'email'],
  },
};

// Form Validation
export const PASSWORD_REQUIREMENTS = {
  minLength: 8,
  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
};

// Profile Creation Steps
export const PROFILE_STEPS = [
  { id: 'basic', label: 'Basic Info' },
  { id: 'about', label: 'About Me' },
  { id: 'preferences', label: 'Preferences' },
  { id: 'photos', label: 'Photos' },
  { id: 'review', label: 'Review' },
] as const;