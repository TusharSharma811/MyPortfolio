import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  slug,
  title,
  description,
  githubURL,
  liveURL,
}: {
  slug: string;
  title: string;
  description: string;
  githubURL: string;
  liveURL: string;
}) => {
  return (
    <Link to={`/project/${slug}`} className="project-item group">
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0 mt-1">
        <span
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(githubURL, "_blank");
          }}
          className="text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
          aria-label="GitHub"
        >
          <Github size={17} />
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(liveURL, "_blank");
          }}
          className="text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
          aria-label="Live Demo"
        >
          <ArrowUpRight size={17} />
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
