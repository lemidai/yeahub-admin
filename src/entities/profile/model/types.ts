import type { Skill } from "@/entities/skill";

export interface Profile {
  userId: string;
  id: string;
  profileType: number;
  specializationId: number;
  markingWeight: number;
  description: string;
  socialNetwork: SocialNetwork[];
  image_src: string | null;
  isActive: boolean;
  ratingPoints: number;
  profileSkills: Skill[];
}

export interface EditProfileRequestData {
  id: string;
  userId: string;
  markingWeight: number;
  specializationId: number;
  description: string | null;
  socialNetwork: SocialNetwork[];
  image_src: string | null;
  profileSkills: string[];
}

export interface SocialNetwork {
  code: SocialNetworkCode;
  title: string;
}

type SocialNetworkCode =
  | "instagram"
  | "linkedin"
  | "twitter"
  | "facebook"
  | "youtube"
  | "github"
  | "behance"
  | "whatsapp"
  | "telegram";
