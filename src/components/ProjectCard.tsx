import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  githubURL,
  liveURL,
}: {
  title: string;
  description: string;
  githubURL: string;
  liveURL: string;
}) => {
  return (
    <div className="project-item group">
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0 mt-1">
        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200"
          aria-label="GitHub"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={15} />
        </a>
        <a
          href={liveURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200"
          aria-label="Live Demo"
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
