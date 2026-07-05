const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark text-paper/60 py-6">
      <div className="content-max px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <p>© {year} Zesan Ahmed. All rights reserved.</p>
        <p className="font-mono text-xs">Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
