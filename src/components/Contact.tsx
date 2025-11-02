import { Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Get In Touch</span>
        </h2>

        <div className="card-glass rounded-xl p-10 text-center animate-fade-in">
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <a 
              href="mailto:koshal.s.goyal0@gmail.com"
              className="flex items-center gap-4 p-4 bg-background/50 rounded-lg hover:border-primary/50 border border-transparent transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">koshal.s.goyal0@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+917019263192"
              className="flex items-center gap-4 p-4 bg-background/50 rounded-lg hover:border-primary/50 border border-transparent transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 7019263192</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-border">
            <Button
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open('https://github.com/koshalg07', '_blank')}
            >
              <Github className="mr-2" size={18} />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open('https://linkedin.com/in/koshal-goyal-a63ab4255', '_blank')}
            >
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open('https://leetcode.com/koshalg30', '_blank')}
            >
              <FileText className="mr-2" size={18} />
              LeetCode
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
