const skillCategories = [
  {
    category: "Backend & Languages",
    skills: ["Java", "Kotlin", "Golang", "Python", "Spring Boot", "Spring Gateway", "Spring Webflux", "Quarkus", "Fast API"]
  },
  {
    category: "AI/ML & Data",
    skills: ["Machine Learning", "Fine-tuning LLM", "Embeddings-based Search", "Vector Databases", "RAG Architecture", "GraphQL"]
  },
  {
    category: "Databases & Caching",
    skills: ["SQL", "MongoDB", "Couchbase", "PostgreSQL", "Redis", "Hibernate"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "AWS EC2", "AWS S3", "AWS Lambda", "Linux"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "Next.js"]
  },
  {
    category: "Messaging & Streaming",
    skills: ["NATS Message Queue", "Kafka"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Technical Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-background/50 border border-border rounded-lg text-sm text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
