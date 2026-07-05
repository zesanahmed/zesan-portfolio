export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: "linkedin" | "github" | "facebook" | "discord";
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  image: string;
  techStack: string[];
  description: string;
  liveUrl: string;
  /** Repo for a single-repo project, or the frontend/client repo of a full-stack project */
  githubClientUrl: string;
  /** Only set when frontend and backend live in separate repos */
  githubServerUrl?: string;
  challenges: string;
  improvements: string;
  featured?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}
