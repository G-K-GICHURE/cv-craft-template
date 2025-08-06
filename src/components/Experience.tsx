import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications serving 100k+ users. Mentored junior developers and established best practices for the engineering team.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Built responsive web applications and improved user engagement by 40%. Collaborated with design team to implement pixel-perfect UIs.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Redux", "Jest"],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      location: "Remote",
      period: "2019 - 2020",
      description: "Developed client websites and e-commerce platforms. Gained experience in full development lifecycle from planning to deployment.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-card-foreground">{exp.title}</CardTitle>
                    <h3 className="text-xl font-semibold text-primary mt-1">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;