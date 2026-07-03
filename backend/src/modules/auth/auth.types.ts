/**
 * Request DTO for user registration.
 */
export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

/**
 * Request DTO for user login.
 */
export interface LoginUserRequest {
  email: string;
  password: string;
}

/**
 * Safe user information returned to clients.
 * Never expose passwords or internal database fields.
 */
export interface UserResponse {
  id: string;
  name: string;
  email: string;
}

/**
 * JWT response after successful authentication.
 */
export interface LoginResponse {
  accessToken: string;
}