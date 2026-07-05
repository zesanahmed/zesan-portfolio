import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import type { Project } from "../types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group rounded-xl border border-ink/10 bg-surface overflow-hidden hover:shadow-lg hover:shadow-navy/5 hover:border-bronze/40 transition-all duration-300 flex flex-col">
      <div className="aspect-video w-full overflow-hidden bg-navy">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center font-display text-3xl font-bold text-paper/70">
            {project.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {project.featured && (
          <span className="font-mono text-[11px] uppercase tracking-wide text-bronze-dark mb-2">
            Latest build
          </span>
        )}
        <h3 className="text-xl font-display font-semibold text-ink mb-1">
          {project.name}
        </h3>
        <p className="text-slate text-sm mb-4">{project.tagline}</p>

        <ul className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="font-mono text-[11px] rounded bg-navy/5 text-navy px-2 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          to={`/projects/${project.id}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-bronze-dark transition-colors"
        >
          View Details
          <HiArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
