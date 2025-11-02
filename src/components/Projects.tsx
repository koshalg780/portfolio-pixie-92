import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Attack Capital AI",
    description: "AI Chat Agent with LiveKit API and Memory-Enhanced Contextual Conversations",
    tech: ["TypeScript", "LiveKit", "AI/ML"],
    github: "https://github.com/koshalg07/attack-capital-ai",
    stars: 1,
    forks: 1
  },
  {
    title: "Rufus - Web Data Extraction Tool",
    description: "Scalable RAG-Ready web data extraction tool designed to dynamically scrape and synthesize relevant web content into structured documents",
    tech: ["Python", "FastAPI", "LangChain", "Gemini API"],
    github: "https://github.com/koshalg07/Rufus-final",
    stars: 1
  },
  {
    title: "Smart Document Search Engine",
    description: "Production RAG system processing 20+ safety documents (1.3GB corpus) with 40% retrieval accuracy improvement using FAISS and custom ML reranker",
    tech: ["Python", "Flask", "FAISS", "Sentence Transformers", "SQLite"],
    github: "https://github.com/koshalg07/Instinctive-Studio-Assignment"
  },
  {
    title: "Real-time Document Indexing",
    description: "Production-ready real-time document processing and indexing system with automatic information extraction using NLP techniques",
    tech: ["Go", "Kafka", "Couchbase", "NLP"],
    github: "https://github.com/koshalg07/real-time-doc-indexing"
  },
  {
    title: "Webhook Processor",
    description: "Robust Spring Boot microservice for processing payment webhook notifications with HMAC signature validation and comprehensive error handling",
    tech: ["Java", "Spring Boot", "Webhooks"],
    github: "https://github.com/koshalg07/webhook-processor"
  },
  {
    title: "MCP Orchestrator",
    description: "Model Context Protocol orchestrator for managing AI model interactions and workflows",
    tech: ["Python", "AI/ML"],
    github: "https://github.com/koshalg07/mcp-orchestrator"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 flex flex-col hover:border-primary/50 transition-all animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.stars || project.forks) && (
                <div className="flex gap-4 text-xs text-muted-foreground">
                  {project.stars && <span>⭐ {project.stars}</span>}
                  {project.forks && <span>🔱 {project.forks}</span>}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/koshalg07?tab=repositories', '_blank')}
          >
            <Github className="mr-2" size={18} />
            View All Projects on GitHub
            <ExternalLink className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
