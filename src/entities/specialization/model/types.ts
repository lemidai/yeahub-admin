export interface Specialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: string;
    username: string;
  };
}

export interface GetSpecializationsParams {
  page?: number;
  limit?: number;
  authorId?: string;
  title?: string;
}

export interface GetSpecializationsResponse {
  data: Specialization[];
  limit: number;
  page: number;
  total: number;
}
