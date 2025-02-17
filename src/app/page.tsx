import Link from "next/link";

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
        <Link href="/projects">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            View Projects
          </button>
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "billforge", name: "BillForge", desc: "SaaS Billing System" },
            {
              id: "tradesphere",
              name: "TradeSphere",
              desc: "Real-Time Marketplace",
            },
            {
              id: "pluginpal",
              name: "PluginPal",
              desc: "ChatGPT Plugin Store",
            },
            {
              id: "knightmind",
              name: "KnightMind",
              desc: "AI-Powered Chess Engine",
            },
          ].map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
