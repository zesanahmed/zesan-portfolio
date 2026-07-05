import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const VISIBLE_COUNT = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);
  const hasMore = projects.length > VISIBLE_COUNT;

  return (
    <section id="projects" className="section-pad bg-surface">
      <div className="content-max">
        <div className="mb-14">
          <p className="font-mono text-sm text-bronze-dark mb-2 tracking-wide">
            03 — Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Projects
          </h2>
          <div className="h-1 w-16 bg-bronze rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
            >
              {showAll ? (
                <>
                  Show Less
                  <HiChevronUp />
                </>
              ) : (
                <>
                  See More Projects
                  <HiChevronDown />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
