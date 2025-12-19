import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="
        cursor-pointer rounded-xl border border-neutral-800
        bg-black/80 p-4 hover:border-purple-400 transition
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full aspect-[16/9]
          object-cover rounded-lg
          mb-4
        "
      />

      <h3 className="text-lg font-semibold mb-3 tracking-wide">
        {project.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-[2px] rounded-full
            border border-purple-400/30 text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
