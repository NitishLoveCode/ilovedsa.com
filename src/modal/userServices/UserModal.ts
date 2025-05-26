// User model
export interface IUser {
  id: number;
  userName: string;
  email: string;
}

// Full response model
export interface IRegisterResponse {
  error: boolean;
  message: string;
  user: IUser;
}
