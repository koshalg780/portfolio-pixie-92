import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Koshal S Goyal. Built with React & TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
