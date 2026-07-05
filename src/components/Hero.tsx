import { HiOutlineArrowDown, HiOutlineDownload } from "react-icons/hi";
import profile from "../assets/profile/profile.jpg";
import TypewriterText from "./TypewriterText";
import SocialLinks from "./SocialLinks";
import { contactInfo } from "../data/contact";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-pad pt-28"
    >
      <div className="content-max grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center w-full">
        {/* Text column */}
        <div className="md:pt-8">
          <p className="font-mono text-sm text-bronze-dark mb-3 tracking-wide">
            Hi, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-4">
            Zesan Ahmed
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-6 h-8">
            <TypewriterText
              strings={[contactInfo.designation, ...contactInfo.rotatingTitles]}
            />
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            I build reliable, well-structured web applications across the full
            stack — from PostgreSQL-backed APIs to polished, production-ready
            interfaces — and I'm currently extending that with AI-integrated
            tooling.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={contactInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-paper hover:bg-navy-light transition-colors"
            >
              <HiOutlineDownload className="text-lg" />
              Download Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
            >
              View Projects
            </a>
          </div>

          <SocialLinks />
        </div>

        {/* Photo column */}
        <div className="relative mx-auto md:mx-0 w-64 sm:w-80 md:w-full max-w-sm">
          <div className="absolute -inset-3 rounded-2xl border border-bronze/40 -z-10 hidden sm:block" />
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy">
            <img
              src={profile}
              alt="Zesan Ahmed"
              className="h-full w-full object-cover grayscale-[15%]"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate hover:text-navy transition-colors hidden sm:block"
      >
        <HiOutlineArrowDown className="text-xl animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
