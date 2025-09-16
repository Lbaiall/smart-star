// Application constants
export const APP_NAME = 'Smart AI v2'
export const APP_VERSION = '2.0.0'
export const APP_DESCRIPTION = 'Advanced AI Assistant Interface'

// API endpoints
export const API_BASE_URL = (import.meta.env?.VITE_API_BASE_URL as string) || 'http://localhost:8000'
export const API_ENDPOINTS = {
  auth: '/auth',
  chat: '/chat',
  user: '/user',
  settings: '/settings',
} as const

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'smart-ai-theme',
  user: 'smart-ai-user',
  settings: 'smart-ai-settings',
  chatHistory: 'smart-ai-chat-history',
} as const

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 250,
  slow: 350,
  slower: 500,
} as const

// Common z-index values
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1800,
} as const

// Breakpoint values (in pixels)
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Common regex patterns
export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-()]+$/,
  url: /^https?:\/\/.+/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
} as const

// Default values
export const DEFAULTS = {
  debounceDelay: 300,
  pageSize: 20,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
} as const