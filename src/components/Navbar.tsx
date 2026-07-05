import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useScrollSpy } from "../hooks/useScrollSpy";
import type { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-ink/10">
      <nav className="content-max flex items-center justify-between px-6 sm:px-10 lg:px-16 h-16">
        <a
          href="#home"
          onClick={handleNavClick("home")}
          className="font-display font-bold text-lg text-navy tracking-tight"
        >
          Zesan<span className="text-bronze">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                aria-current={isHome && activeId === item.id ? "page" : undefined}
                className={`relative text-sm font-medium py-1 transition-colors ${
                  isHome && activeId === item.id
                    ? "text-navy"
                    : "text-slate hover:text-navy"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-bronze transition-all duration-300 ${
                    isHome && activeId === item.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={handleNavClick("contact")}
          className="hidden md:inline-flex items-center rounded-md bg-navy px-4 py-2 text-sm font-semibold text-paper hover:bg-navy-light transition-colors"
        >
          Let's talk
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy text-2xl"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-paper border-b border-ink/10">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  isHome && activeId === item.id
                    ? "bg-navy/5 text-navy"
                    : "text-slate hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Link
              to="/#contact"
              onClick={handleNavClick("contact")}
              className="block text-center rounded-md bg-navy px-4 py-2 text-sm font-semibold text-paper"
            >
              Let's talk
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
