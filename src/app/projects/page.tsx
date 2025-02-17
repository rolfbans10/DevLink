import Link from "next/link";

const projects = [
  { id: "billforge", name: "BillForge", description: "A SaaS billing system." },
  {
    id: "tradesphere",
    name: "TradeSphere",
    description: "A real-time marketplace.",
  },
  {
    id: "pluginpal",
    name: "PluginPal",
    description: "A ChatGPT plugin store.",
  },
  {
    id: "knightmind",
    name: "KnightMind",
    description: "An AI-powered chess engine.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-400">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
