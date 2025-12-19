import { PROJECTS } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="pt-16 pb-32 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl text-center mb-16 tracking-widest">
        PRO<span className="text-purple-400">JECTS</span>
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
