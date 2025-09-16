// Common utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type Nullable<T> = T | null
export type Optional<T> = T | undefined

// Component prop types
export interface BaseComponentProps {
  className?: string
  id?: string
  'data-testid'?: string
}

// Event handler types
export type EventHandler<T = Event> = (event: T) => void
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>

// API related types
export interface ApiResponse<T = unknown> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  code?: string
  status?: number
}

// Theme related types
export type ThemeMode = 'light' | 'dark' | 'system'

// Animation related types
export interface AnimationConfig {
  duration?: number
  delay?: number
  easing?: string
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

// Common size variants
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type InputSize = 'sm' | 'md' | 'lg'

// Common variants
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'