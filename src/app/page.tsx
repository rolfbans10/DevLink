import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";

export interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export const Projects: Project[] = [
  {
    title: "TaskMate",
    description:
      "A sleek task management application built to streamline team collaboration and enhance productivity, leveraging Kanban boards and real-time notifications.",
    link: "/projects/taskmate",
    imageUrl: "/images/taskmate.png",
  },
  {
    title: "CodeSnip",
    description:
      "An intuitive code snippet organizer where developers can save, search, and share snippets with syntax highlighting and cloud synchronization.",
    link: "/projects/codesnip",
    imageUrl: "/images/codesnip.png",
  },
  {
    title: "ShopSphere",
    description:
      "A modern e-commerce platform designed with a seamless user experience, including features like cart management, product reviews, and secure payment integration.",
    link: "/projects/shopsphere",
    imageUrl: "/images/shopsphere.png",
  },
  {
    title: "DevTrackr",
    description:
      "A bug tracking system tailored for development teams, with customizable workflows, sprint tracking, and detailed reporting dashboards.",
    link: "/projects/devtrackr",
    imageUrl: "/images/devtrackr.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to <span className="text-blue-400">DevLink</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          A showcase of my software projects—built with precision, simplicity,
          and innovation.
        </p>
      </section>
      <section className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
