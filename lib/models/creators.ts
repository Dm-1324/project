// lib/types.ts

export interface Creator {
  id: string; // MongoDB _id will be stored as string
  name: string;
  handle: string;
  profileImage: string;
  category: string;
  followers: string;
  socialsCount: {
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  verified: boolean;
  description: string;
  productCount: number;
}
