export interface Project {
  key: string;
  title: string;
  sub: string;
  desc: string;
  details: string[];
  tags: string[];
  github?: string;
  bgClass: string;
  badge?: string;
  visLabel: string;
  yourehere?: boolean;
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
