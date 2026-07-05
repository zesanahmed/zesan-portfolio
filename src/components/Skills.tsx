import { skillCategories } from "../data/skills";
import type { Skill } from "../data/skills";

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  return (
    <div
      className="group relative flex aspect-square items-center justify-center rounded-xl border border-ink/10 bg-paper hover:-translate-y-1 hover:border-bronze/40 hover:shadow-md hover:shadow-navy/5 transition-all duration-300"
      tabIndex={0}
    >
      <Icon
        style={{ color: skill.color }}
        className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
      <span className="sr-only">{skill.name}</span>

      {/* tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2.5 py-1 font-mono text-[11px] text-paper opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-200 z-10"
      >
        {skill.name}
        <span className="absolute left-1/2 top-full -translate-x-1/2 h-0 w-0 border-x-4 border-x-transparent border-t-4 border-t-navy" />
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <div className="content-max">
        <div className="mb-14">
          <p className="font-mono text-sm text-bronze-dark mb-2 tracking-wide">
            02 — Toolbox
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Skills &amp; Technologies
          </h2>
          <div className="h-1 w-16 bg-bronze rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-ink/10 bg-surface p-6"
            >
              <h3 className="font-display font-semibold text-navy mb-5">
                {category.title}
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
