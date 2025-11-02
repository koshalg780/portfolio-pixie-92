import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Education & Achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-glass rounded-xl p-8 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">BMS College of Engineering</h3>
                <p className="text-lg text-primary font-medium">B.Tech in Computer Science and Engineering</p>
                <p className="text-muted-foreground">Bangalore, India</p>
                <p className="text-muted-foreground">2020 - 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 p-4 bg-primary/10 rounded-lg">
              <span className="text-3xl font-bold text-primary">8.6</span>
              <span className="text-muted-foreground">CGPA</span>
            </div>
          </div>

          <div className="card-glass rounded-xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Achievements</h3>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">🏆</span>
                <div>
                  <p className="text-foreground font-medium">Finalist - RevaHack 2022</p>
                  <p className="text-sm text-muted-foreground">Hackathon Competition</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">🥇</span>
                <div>
                  <p className="text-foreground font-medium">Top 5 - CodingNinja Contest</p>
                  <p className="text-sm text-muted-foreground">Two-time achievement</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">👥</span>
                <div>
                  <p className="text-foreground font-medium">Senior Core Member</p>
                  <p className="text-sm text-muted-foreground">CodeIO Club, BMSCE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
