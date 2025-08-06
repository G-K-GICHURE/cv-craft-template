import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Business Intelligence Deployment",
      description: "End-to-end BI implementation across 10+ major companies including banks and telecoms, integrating Qlik, Power BI with SAP, Oracle systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Qlik", "Power BI", "SAP", "Oracle", "Tableau"],
      clients: ["Exim Bank", "Bank of Tanzania", "KWFT", "Rubis", "Post Bank Tanzania"],
      achievements: ["20% efficiency increase", "100% data accuracy", "25% faster delivery"]
    },
    {
      title: "Claims Analytics Dashboard",
      description: "Designed comprehensive analytics dashboard for insurance claim distribution analysis across multiple parameters and risk factors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Tableau", "Python", "SQL", "Advanced Excel"],
      clients: ["GA Insurance"],
      achievements: ["50% insight improvement", "Automated reporting", "Risk pattern identification"]
    },
    {
      title: "Automated ETL Workflows",
      description: "Developed automated data pipelines reducing manual effort by 5 hours per week and achieving 100% reporting efficiency increase.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      technologies: ["Python", "Apache Spark", "SQL", "Oracle"],
      clients: ["Nairobi Municipality", "Career Connection"],
      achievements: ["100% efficiency increase", "5 hours saved weekly", "40% faster retrieval"]
    },
    {
      title: "Data Mining & Optimization",
      description: "Conducted extensive data mining using Oracle, uncovering insights that increased operational efficiency by 20% across multiple sectors.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Oracle", "Python", "Data Mining", "Statistical Analysis"],
      clients: ["Kenya Builders", "Furniture Palace", "Ukulima Sacco"],
      achievements: ["20% efficiency increase", "Data-driven insights", "Optimized operations"]
    }
  ];

  const certifications = [
    { name: "Microsoft Power BI Data Analyst Associate", icon: "🥇", platform: "Microsoft" },
    { name: "IBM: Data Analysis with Python", icon: "🐍", platform: "IBM" },
    { name: "IBM: Python for Data Science", icon: "📊", platform: "IBM" },
    { name: "IBM: Data Visualization with Python", icon: "📈", platform: "IBM" },
    { name: "IBM: Spark Level 1", icon: "⚡", platform: "IBM" },
    { name: "IBM: Big Data 101", icon: "💾", platform: "IBM" },
    { name: "IBM: Hadoop 101", icon: "🐘", platform: "IBM" },
    { name: "PWC - Power BI Job Simulation", icon: "💼", platform: "PWC" }
  ];

  return (
    <section id="projects" className="py-20 bg-white ml-72">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world data solutions that delivered measurable business impact across industries
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-8">Certifications & Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow p-4">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <h4 className="font-semibold text-sm text-slate-800 mb-1">{cert.name}</h4>
                <Badge variant="outline" className="text-xs">{cert.platform}</Badge>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-l-blue-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">Data Project</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-2">Key Clients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.clients.map((client, clientIndex) => (
                      <Badge key={clientIndex} variant="outline" className="text-xs">
                        {client}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-2">Achievements:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <h4 className="text-3xl font-bold text-blue-600 mb-2">10+</h4>
              <p className="text-slate-600">Major Clients Served</p>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100">
              <h4 className="text-3xl font-bold text-green-600 mb-2">100%</h4>
              <p className="text-slate-600">Data Accuracy Achieved</p>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <h4 className="text-3xl font-bold text-purple-600 mb-2">50+</h4>
              <p className="text-slate-600">Users Trained</p>
            </Card>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            View Portfolio on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;