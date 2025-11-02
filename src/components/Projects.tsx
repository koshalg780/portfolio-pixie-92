import { ExternalLink, Github, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";

const GITHUB_USERNAME = "koshalg07";

const Projects = () => {
  const { data: projects, isLoading, isError } = useGitHubRepos(GITHUB_USERNAME);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-primary" size={48} />
          </div>
        )}

        {isError && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-6">
              Unable to load projects. Please visit my GitHub directly.
            </p>
            <Button 
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open(`https://github.com/${GITHUB_USERNAME}?tab=repositories`, '_blank')}
            >
              <Github className="mr-2" size={18} />
              View on GitHub
              <ExternalLink className="ml-2" size={18} />
            </Button>
          </div>
        )}

        {projects && projects.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={project.github}
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
                onClick={() => window.open(`https://github.com/${GITHUB_USERNAME}?tab=repositories`, '_blank')}
              >
                <Github className="mr-2" size={18} />
                View All Projects on GitHub
                <ExternalLink className="ml-2" size={18} />
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
