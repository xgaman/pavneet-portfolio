
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Programming' | 'Tools';
  icon?: string;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  EDUCATION = 'education',
  CONTACT = 'contact'
}
