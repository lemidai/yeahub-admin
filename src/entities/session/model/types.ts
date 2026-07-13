export type SessionData = {
  access_token: string;
  user: User;
};

export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  birthday: string;
  address: string;
  avatarUrl: string;
  updatedAt: string;
  createdAt: string;
  userRoles: Array<{
    id: number;
    name: string;
    permissions: Array<{ id: number; name: string }>;
  }>;
  isVerified: boolean;
  isEmailNotificationsEnable: boolean;
};

export type LogoutResponse = {
  message: string;
};
