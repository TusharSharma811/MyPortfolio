export const Navbar = () => {
  return (
    <nav className="w-full max-w-2xl mx-auto px-6 py-4 flex items-center justify-between font-secondary">
      <a href="/" className="font-primary text-lg font-semibold text-text-color">
        TS
      </a>
      <div className="flex gap-6">
        <a href="#projects" className="text-xs text-muted hover:text-accent transition-colors duration-200 uppercase tracking-wider">
          Projects
        </a>
        <a href="#skills" className="text-xs text-muted hover:text-accent transition-colors duration-200 uppercase tracking-wider">
          Skills
        </a>
        <a href="#contact" className="text-xs text-muted hover:text-accent transition-colors duration-200 uppercase tracking-wider">
          Contact
        </a>
      </div>
    </nav>
  );
};
