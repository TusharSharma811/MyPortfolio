
const ProjectCard = ({
  title,
  description,
  imgSRC,
  githubURL,
  liveURL,
}: {
  title: string;
  description: string;
  imgSRC: string;
  githubURL: string;
  liveURL: string;
}) => {
  
  
  return (
    <div className="flex flex-col justify-between min-h-[350px] mt-6 mb-6 border-2 border-accent p-3 rounded-md hover:scale-105 duration-300">
      {/* Top content */}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-gray-700">{description}</p>
        <img
          src={`/${imgSRC}`}
          alt={title}
          className="mt-3 rounded-md object-cover h-[180px] w-full"
        />
      </div>

      {/* Bottom links */}
      <div className="flex justify-between mt-3">
        <a
          className="link-underline text-blue-600 hover:text-blue-800"
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="link-underline text-blue-600 hover:text-blue-800"
          href={liveURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
