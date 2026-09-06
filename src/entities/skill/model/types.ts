import type { Specialization } from "@/entities/specialization";

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
  createdBy: {
    id: string;
    username: string;
  };
}

export interface GetSkillsParams {
  page?: number;
  limit?: number;
  specializations?: number[];
  authorId?: string;
  title?: string;
}

export interface GetSkillsResponse {
  data: Skill[];
  limit: number;
  page: number;
  total: number;
}
