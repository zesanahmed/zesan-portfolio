const FACTS = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Focus", value: "Full-Stack & AI-integrated apps" },
  { label: "Currently learning", value: "Next.js, PostgreSQL, AI Agents" },
  { label: "Open to", value: "Remote & on-site opportunities" },
];

const About = () => {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="content-max grid md:grid-cols-[0.4fr_0.6fr] gap-12">
        <div>
          <p className="font-mono text-sm text-bronze-dark mb-2 tracking-wide">
            01 — Introduction
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            About Me
          </h2>
          <div className="h-1 w-16 bg-bronze rounded-full" />
        </div>

        <div className="space-y-5 text-slate text-base sm:text-lg leading-relaxed">
          <p>
            I'm a full-stack software engineer from Bangladesh, building web
            applications end to end — from database schema to deployed UI.
            My core stack is React, Node.js, Express, and PostgreSQL /
            MongoDB, and I'm currently deepening that with TypeScript,
            Next.js, and Docker as part of an advanced software engineering
            program.
          </p>
          <p>
            What draws me to this work is the structure underneath it: a
            well-designed API, a clean data model, a component tree that
            makes sense a year later. I care about writing code that's
            correct and maintainable, not just code that works today.
          </p>
          <p>
            I'm also actively exploring how AI fits into that stack —
            Retrieval-Augmented Generation, vector databases, and AI agents —
            and building that into my own projects rather than treating it
            as a separate skill.
          </p>

          <dl className="grid sm:grid-cols-2 gap-4 pt-4">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-ink/10 bg-paper px-4 py-3"
              >
                <dt className="font-mono text-xs text-slate uppercase tracking-wide">
                  {fact.label}
                </dt>
                <dd className="text-ink font-medium mt-1">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
