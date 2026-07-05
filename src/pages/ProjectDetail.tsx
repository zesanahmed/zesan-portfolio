import { Link, useParams, Navigate } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="pt-28 pb-24 section-pad">
      <div className="content-max">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-navy transition-colors mb-10"
        >
          <HiOutlineArrowLeft />
          Back to all projects
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div className="rounded-xl overflow-hidden bg-navy aspect-video">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center font-display text-5xl font-bold text-paper/70">
                {project.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 3)}
              </div>
            )}
          </div>

          <div>
            <p className="font-mono text-sm text-bronze-dark mb-2 tracking-wide">
              Project
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3">
              {project.name}
            </h1>
            <p className="text-slate text-lg mb-6">{project.tagline}</p>

            <ul className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-xs rounded-full bg-navy/5 text-navy px-3 py-1.5"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-paper hover:bg-navy-light transition-colors"
              >
                <HiOutlineExternalLink />
                Live Project
              </a>
              {project.githubServerUrl ? (
                <>
                  <a
                    href={project.githubClientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
                  >
                    <FaGithub />
                    Frontend Repo
                  </a>
                  <a
                    href={project.githubServerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
                  >
                    <FaGithub />
                    Backend Repo
                  </a>
                </>
              ) : (
                <a
                  href={project.githubClientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
                >
                  <FaGithub />
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <section>
            <h2 className="text-xl font-display font-semibold text-ink mb-3">
              Description
            </h2>
            <p className="text-slate leading-relaxed">{project.description}</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-ink mb-3">
              Challenges Faced
            </h2>
            <p className="text-slate leading-relaxed">{project.challenges}</p>
          </section>

          <section className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-ink mb-3">
              Future Improvements
            </h2>
            <p className="text-slate leading-relaxed">{project.improvements}</p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
