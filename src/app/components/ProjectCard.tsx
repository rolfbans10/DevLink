import { Project } from "../projects/types";

export interface ProjectProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="project-card border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
      <p className="text-sm text-gray-600 mt-2">{project.description}</p>
      {project.link && (
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Visit Project
          </a>
        </div>
      )}
    </div>
  );
}
