import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Business Analyst",
      company: "Career Connection Limited",
      location: "Nairobi, Kenya",
      period: "2024/01 - Present",
      description: "In-depth data analysis to identify trends, patterns, and business opportunities, driving strategic decision-making. Development of interactive dashboards and reports using Qlik and Advanced Excel. Automated data pipelines reducing manual effort by 5 hours per week.",
      technologies: ["Qlik", "Advanced Excel", "Python", "SQL", "ETL", "Dashboard Design"],
      achievements: ["5 hours weekly manual effort reduction", "Real-time business intelligence", "Strategic decision support"]
    },
    {
      title: "Senior Business Intelligence Developer",
      company: "Nairobi Municipality",
      location: "Nairobi, Kenya",
      period: "2022/01 - Present",
      description: "Developed and implemented automated ETL workflows resulting in 100% increase in reporting efficiency. Designed and deployed interactive dashboards and reports leading to 10% increase in data-driven decision-making. Orchestrated data repository optimizations enhancing data integrity and accessibility.",
      technologies: ["ETL", "SQL", "Power BI", "Data Warehousing", "Oracle", "Python"],
      achievements: ["100% reporting efficiency increase", "10% decision-making improvement", "Enhanced data integrity"]
    },
    {
      title: "Information Systems Intern",
      company: "Nairobi Hospital",
      location: "Nairobi, Kenya",
      period: "2021",
      description: "Network troubleshooting and configuration, WIFI and LAN network setup, software installation, and Windows security implementation. Gained foundational experience in IT infrastructure and system administration.",
      technologies: ["Network Administration", "Windows Security", "IT Support", "System Configuration"],
      achievements: ["System reliability improvement", "Network optimization", "IT infrastructure support"]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white ml-72">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey through data analytics and business intelligence across multiple industries
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