export interface Project {
  key: string;
  slug: string;
  title: string;
  sub: string;
  desc: string;
  details: string[];
  tags: string[];
  github?: string;
  liveDemo?: string;
  bgClass: string;
  
  visLabel: string;
  yourehere?: boolean;

  // Case Study Fields
  overview?: string;
  problemSolved?: string;
  features?: { title: string; description: string }[];
  architecture?: string;
  designSystem?: string;
  languages?: { name: string; percentage: number; color: string }[];
  archTags?: string[];
}

export interface SkillTag {
  name: string;
  type: "core" | "shipped" | "comfortable";
}

export interface SkillRow {
  label: string;
  tags: SkillTag[];
}

export interface Experience {
  role: string;
  company: string;
  year: string;
  bullets: string[];
}
