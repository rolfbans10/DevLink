import ProjectCard from "@/app/components/ProjectCard";

export interface Project {
  title: string;
  description: string;
  link: string;
  repoLink: string;
  imageUrl: string;
  stack: string[];
  keyFeatures: string[];
}

const Projects: Project[] = [
  {
    title: "BlitzChess",
    description:
      "A real-time online multiplayer chess platform featuring ELO rating, seamless matchmaking, and live game analytics for enthusiasts and professionals.",
    link: "/projects/blitzchess",
    repoLink: "/repo/blitzchess",
    imageUrl: "/BlitzChess-retro.webp",
    stack: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    keyFeatures: [
      "Real-time multiplayer system",
      "ELO rating and leaderboards",
      "Live analytics dashboard",
    ],
  },
  {
    title: "SnapAI",
    description:
      "An AI-driven photo editing application that automates processes like retouching, background removal, and filter application with a simple interface.",
    link: "/projects/snapai",
    repoLink: "/repo/snapai",
    imageUrl: "/SnapAI-retro.webp",
    stack: ["React", "TensorFlow.js", "Node.js"],
    keyFeatures: [
      "AI-driven photo enhancements",
      "Background removal",
      "Customizable filters and presets",
    ],
  },
  {
    title: "AdminEase",
    description:
      "A comprehensive admin panel solution with customizable dashboards, access control, and analytics for managing business operations.",
    link: "/projects/adminease",
    repoLink: "/repo/adminease",
    imageUrl: "/AdminEase-retro.webp",
    stack: ["React", "TypeScript", "Chart.js", "Firebase"],
    keyFeatures: [
      "Customizable dashboards",
      "Role-based access control",
      "Interactive analytics and charts",
    ],
  },
  {
    title: "JumpKnight",
    description:
      "A 2D platformer game focused on challenging levels, smooth controls, and engaging mechanics, designed for casual and competitive play.",
    link: "/projects/jumpknight",
    repoLink: "/repo/jumpknight",
    imageUrl: "/JumpKnight-retro.webp",
    stack: ["Phaser.js", "TypeScript", "Firebase"],
    keyFeatures: [
      "Smooth and intuitive controls",
      "Challenging platformer gameplay",
      "Cloud-based leaderboard scores",
    ],
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
