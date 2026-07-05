import { FaLinkedinIn, FaGithub, FaFacebookF, FaDiscord } from "react-icons/fa";
import { socialLinks } from "../data/socials";
import type { SocialLink } from "../types";

const ICONS: Record<SocialLink["icon"], React.ElementType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  facebook: FaFacebookF,
  discord: FaDiscord,
};

interface SocialLinksProps {
  variant?: "light" | "dark";
}

const SocialLinksRow = ({ variant = "dark" }: SocialLinksProps) => {
  const base =
    variant === "dark"
      ? "border-ink/15 text-navy hover:bg-navy hover:text-paper hover:border-navy"
      : "border-paper/30 text-paper hover:bg-paper hover:text-navy hover:border-paper";

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = ICONS[social.icon];
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-base transition-colors ${base}`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinksRow;
