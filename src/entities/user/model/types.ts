import type { Profile } from "@/entities/profile";

export interface User {
  id: string;
  username: string;
  email: string;
  phone: string | null;
  country: string | null;
  city: string | null;
  birthday: string | null;
  address: string | null;
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
}

export interface EditUserRequestData {
  id: string;
  username: string;
  country: string | null;
  city: string | null;
  birthday: string | null;
  address: string | null;
  avatarUrl: string | null;
  avatarImage: string | null;
}

export interface UserRole {
  id: number;
  name: string;
  permissions: Permission[];
}

export interface Permission {
  id: number;
  name: string;
}

export interface FullUserData extends User {
  telegramUsername: string | null;
  subscriptions: Subscription[];
  profiles: Profile[];
}

export interface Subscription {
  id: string;
  subscriptionId: number;
  userId: string;
  state: string;
  paymentAttemptsCount: number;
  createDate: string;
  endDate: null;
  subscription: {
    id: number;
    name: string;
    code: string;
    isActive: boolean;
    pricePerMonth: number;
    description: null;
    promo: string;
    monthPeriod: number;
    finalPrice: number;
    roles: UserRole[];
  };
}
