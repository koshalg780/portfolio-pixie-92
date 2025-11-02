import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Rakuten",
    role: "Intern → Associate Software Engineer",
    location: "Bangalore, India",
    period: "March 2024 — Present",
    achievements: [
      "Built scalable microservices for campaign lifecycle management using Java 17, Spring Gateway, and WebFlux",
      "Engineered asynchronous communication with NATS Message Queue and Kafka for real-time event streaming",
      "Developed high-throughput Kafka consumers for large-scale user targeting data processing",
      "Built location & behavior-based recommendation engine, increasing engagement by 25%",
      "Optimized geospatial queries with spatial indexing, improving performance by 30%",
      "Implemented fraud detection model using Isolation Forest with 90% detection accuracy"
    ]
  },
  {
    company: "Samsung Research – PRISM Program",
    role: "AI/ML Intern – Conversational AI Capsule",
    location: "Bangalore, India",
    period: "March 2023 – September 2023",
    achievements: [
      "Developed voice-enabled product search capsule using decoder-based neural network",
      "Achieved 95% accuracy in multi-label intent detection and slot tagging",
      "Built multi-domain dialogue corpus, improving training efficiency by 20%"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                    <p className="text-lg text-primary font-medium">{exp.role}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
