import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiAxios,
  SiReactquery,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiNginx,
  SiFirebase,
  SiLangchain,
  SiN8N,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbApi, TbFileDatabase, TbVectorBezier, TbRobot, TbServerCog } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
      { name: "REST APIs", icon: TbApi, color: "#B8863B" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
    ],
  },
  {
    id: "database-devops",
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    id: "ai-tools",
    title: "AI & Tools",
    skills: [
      { name: "RAG", icon: TbFileDatabase, color: "#1C2B4A" },
      { name: "Vector DB", icon: TbVectorBezier, color: "#1C2B4A" },
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
      { name: "AI Agents", icon: TbRobot, color: "#1C2B4A" },
      { name: "n8n", icon: SiN8N, color: "#EA4B71" },
      { name: "MCP Server", icon: TbServerCog, color: "#1C2B4A" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
    ],
  },
];
