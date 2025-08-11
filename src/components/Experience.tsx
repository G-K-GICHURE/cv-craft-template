import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Business Intelligence Developer",
      company: "Nairobi Municipality",
      location: "Nairobi, Kenya",
      period: "2022/01 - Present",
      description: "Lead BI developer responsible for transforming municipal data into actionable insights. Spearheaded the development of automated ETL workflows that revolutionized reporting efficiency, achieving a 100% increase in processing speed. Designed and deployed comprehensive interactive dashboards covering revenue collection, urban planning metrics, and citizen service analytics. Led data repository optimization initiatives that enhanced data integrity, accessibility, and reduced query response times by 40%. Collaborated with municipal departments to establish data governance frameworks and implemented real-time monitoring systems for critical city operations.",
      technologies: ["ETL", "SQL", "Power BI", "Data Warehousing", "Oracle", "Python", "Qlik"],
      achievements: ["100% reporting efficiency increase", "40% faster data retrieval", "10% decision-making improvement", "Enhanced data integrity", "Real-time monitoring implementation"],
      type: "Government & Public Sector"
    },
    {
      title: "Data & Analytics Consultant",
      company: "Career Connection Limited",
      location: "Nairobi, Kenya", 
      period: "2024/01 - Present",
      description: "Independent data analytics consultant providing specialized BI solutions to diverse clients across banking, telecommunications, and insurance sectors. Conduct in-depth data analysis to identify market trends, customer behavior patterns, and business growth opportunities. Develop custom interactive dashboards and automated reporting systems using Qlik Sense and Advanced Excel. Design and implement data pipelines that reduce manual processing effort by 5 hours per week for each client. Provide strategic recommendations based on data insights, contributing to client revenue growth and operational efficiency.",
      technologies: ["Qlik Sense", "Advanced Excel", "Python", "SQL", "ETL", "Dashboard Design", "Power BI"],
      achievements: ["5 hours weekly manual effort reduction per client", "25+ client projects completed", "Real-time business intelligence", "Strategic decision support", "Multi-industry expertise"],
      type: "Consulting & Analytics"
    },
    {
      title: "Information Systems Intern",
      company: "Nairobi Hospital",
      location: "Nairobi, Kenya",
      period: "2021",
      description: "Foundational IT role providing comprehensive technical support across hospital operations. Managed network troubleshooting and configuration for critical healthcare systems, ensuring 99.5% uptime for patient care applications. Led WIFI and LAN network setup projects across multiple hospital departments. Implemented Windows security protocols and software installations following healthcare data protection standards. Gained valuable experience in healthcare IT infrastructure, database management, and system administration in a mission-critical environment.",
      technologies: ["Network Administration", "Windows Security", "IT Support", "System Configuration", "Healthcare IT"],
      achievements: ["99.5% system uptime maintained", "Network optimization across departments", "Healthcare IT standards compliance", "IT infrastructure support"],
      type: "Healthcare IT"
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
                <div className="mb-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {exp.type}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
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