import { useEffect, useState } from "react";

interface TypewriterTextProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

const TypewriterText = ({
  strings,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseMs = 1400,
}: TypewriterTextProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length];

    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, strings, typingSpeed, deletingSpeed, pauseMs]);

  const text = strings[index % strings.length].slice(0, subIndex);

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-bronze ml-1 align-middle animate-pulse" />
    </span>
  );
};

export default TypewriterText;
