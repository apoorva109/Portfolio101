export type ScreenTab = 'home' | 'projects' | 'skills' | 'education' | 'connect';

export interface Project {
  id: string;
  title: string;
  category: string;
  typeBadge?: string;
  icon?: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  blueprintDetails?: {
    overview: string;
    architecture: string[];
    modules: { name: string; desc: string }[];
    techStack: string[];
  };
  demoType?: 'graphics-editor' | 'blueprint' | 'iot-simulator';
}

export interface SkillCategory {
  id: string;
  title: string;
  itemCount: string;
  skills: {
    name: string;
    level: string;
    details: string;
    projects: string[];
  }[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  semester: string;
  cgpa: string;
  scale: string;
  standing: string;
  track: string;
  semesters: {
    sem: string;
    gpa: string;
    status: 'completed' | 'current' | 'upcoming';
    courses: string[];
  }[];
}

export interface SocialContact {
  label: string;
  sublabel: string;
  value: string;
  href: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'leetcode';
  type: 'external' | 'copy' | 'email';
}
