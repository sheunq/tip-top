import type { LucideIcon } from "lucide-react";

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  image: string;
  qualifications: string[];
  experience: string;
  languages: string[];
};

export type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  image: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
};
