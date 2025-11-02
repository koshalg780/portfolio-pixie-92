import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(22, 32, 47, 0.9), rgba(22, 32, 47, 0.95)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient glow-text">Koshal S Goyal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Associate Software Engineer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building scalable microservices, AI-powered solutions, and real-time systems with Java, Python, and modern cloud technologies
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[var(--glow-primary)] transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/koshalg07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/koshal-goyal-a63ab4255" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:koshal.s.goyal0@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={28} />
            </a>
            <a 
              href="https://leetcode.com/koshalg30" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
