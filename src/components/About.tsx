import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Building robust applications with modern technologies like React, Node.js, and TypeScript.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, user-centered designs that combine aesthetics with functionality.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and pushing the boundaries of what's possible.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional results on time.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <skill.icon size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                Started my career as a frontend developer and gradually expanded into full-stack development. 
                I'm passionate about creating seamless user experiences and writing clean, maintainable code.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-card-foreground">React & TypeScript</span>
                <span className="text-primary font-semibold">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-card-foreground">Node.js & Databases</span>
                <span className="text-primary font-semibold">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-card-foreground">UI/UX Design</span>
                <span className="text-primary font-semibold">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;