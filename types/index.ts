export type DivisionSlug =
  | "keagamaan"
  | "pendidikan"
  | "minat-bakat"
  | "humas-media"
  | "sosial"
  | "kewirausahaan";

export interface Division {
  slug: DivisionSlug;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "forest" | "blush" | "sky";
  vision: string;
  focusAreas: string[];
}

export interface SocialLinks {
  instagram?: string;
  whatsapp?: string;
  linkedin?: string;
  email?: string;
}

export interface Member {
  id: string;
  slug: string;
  name: string;
  position: string;
  isCore: boolean;
  division: DivisionSlug | "inti";
  period: string;
  photo: string;
  quote: string;
  bio: string;
  hobbies: string[];
  social: SocialLinks;
}

export type ProgramStatus = "ongoing" | "upcoming" | "completed";

export interface Program {
  id: string;
  slug: string;
  title: string;
  division: DivisionSlug;
  description: string;
  schedule: string;
  status: ProgramStatus;
  icon: string;
}

export type GalleryCategory =
  | "MUSWA"
  | "Seminar"
  | "Kajian"
  | "PHBI"
  | "Bakti Sosial";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  caption: string;
  date: string;
  image: string;
  rotation: number;
  offsetY: number;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  author: string;
  cover: string;
  tags: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface StructureNode {
  id: string;
  title: string;
  memberSlug?: string;
  name?: string;
  level: number;
  parentId: string | null;
}
