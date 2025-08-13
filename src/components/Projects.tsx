import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Database, BarChart3, Cloud, Code } from "lucide-react";

const Projects = () => {
  const projectsByTechnology = {
    powerbi: {
      icon: BarChart3,
      name: "Power BI",
      color: "yellow",
      projects: [
        {
          title: "Banking Analytics Dashboard",
          description: "Comprehensive BI solution for major East African banks with real-time transaction monitoring.",
          type: "Professional",
          technologies: ["Power BI", "SQL Server", "Azure"],
          achievements: ["100% data accuracy", "Real-time insights", "Regulatory compliance"],
          confidential: true
        },
        {
          title: "Financial Performance Tracker",
          description: "Personal project tracking investment portfolio performance with automated reporting.",
          type: "Personal",
          technologies: ["Power BI", "Excel", "Python"],
          achievements: ["Automated reporting", "Portfolio optimization", "Risk analysis"],
          githubUrl: "https://github.com/georgegichure"
        }
      ]
    },
    tableau: {
      icon: BarChart3,
      name: "Tableau",
      color: "blue",
      projects: [
        {
          title: "Claims Analytics Dashboard",
          description: "Insurance claim distribution analysis across multiple parameters for GA Insurance.",
          type: "Professional",
          technologies: ["Tableau", "Python", "SQL"],
          achievements: ["50% insight improvement", "Automated reporting", "Risk pattern identification"],
          confidential: true
        }
      ]
    },
    qlik: {
      icon: Database,
      name: "Qlik Sense",
      color: "green",
      projects: [
        {
          title: "Telecom Operations Analytics",
          description: "Real-time operational dashboard for major telecom provider with KPI monitoring.",
          type: "Professional",
          technologies: ["Qlik Sense", "Oracle", "REST APIs"],
          achievements: ["25% faster delivery", "Real-time monitoring", "Cost optimization"],
          confidential: true
        }
      ]
    },
    python: {
      icon: Code,
      name: "Python & Analytics",
      color: "purple",
      projects: [
        {
          title: "Automated ETL Pipeline",
          description: "Python-based ETL workflows reducing manual effort by 5 hours weekly.",
          type: "Professional",
          technologies: ["Python", "Apache Spark", "SQL", "Oracle"],
          achievements: ["100% efficiency increase", "5 hours saved weekly", "40% faster retrieval"],
          confidential: true
        },
        {
          title: "COVID-19 Data Analysis",
          description: "Personal project analyzing COVID-19 trends using Python and machine learning.",
          type: "Personal",
          technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
          achievements: ["Trend prediction", "Data visualization", "Statistical modeling"],
          githubUrl: "https://github.com/georgegichure/covid-analysis"
        }
      ]
    },
    sql: {
      icon: Database,
      name: "SQL & Databases",
      color: "indigo",
      projects: [
        {
          title: "Data Mining & Optimization",
          description: "Oracle-based data mining uncovering insights that increased efficiency by 20%.",
          type: "Professional",
          technologies: ["Oracle", "SQL", "Data Mining", "Statistical Analysis"],
          achievements: ["20% efficiency increase", "Data-driven insights", "Optimized operations"],
          confidential: true
        }
      ]
    }
  };

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

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      yellow: "border-l-yellow-500 bg-yellow-50",
      blue: "border-l-blue-500 bg-blue-50", 
      green: "border-l-green-500 bg-green-50",
      purple: "border-l-purple-500 bg-purple-50",
      indigo: "border-l-indigo-500 bg-indigo-50"
    };
    return colorMap[color] || "border-l-blue-500 bg-blue-50";
  };

  return (
    <section id="projects" className="py-20 bg-white ml-72">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Projects & Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore my work organized by technology stack and project type
          </p>
        </div>

        <Tabs defaultValue="powerbi" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {Object.entries(projectsByTechnology).map(([key, tech]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                <tech.icon size={16} />
                <span className="hidden sm:inline">{tech.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projectsByTechnology).map(([key, tech]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 gap-6">
                {tech.projects.map((project, index) => (
                  <Card 
                    key={index} 
                    className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 ${getColorClasses(tech.color)}`}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge 
                          variant={project.type === 'Professional' ? 'default' : 'secondary'}
                          className={project.type === 'Professional' ? 'bg-blue-600 text-white' : 'bg-green-100 text-green-800'}
                        >
                          {project.type}
                        </Badge>
                        {project.confidential && (
                          <Badge variant="outline" className="text-orange-600 border-orange-300">
                            Confidential
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        {project.description}
                        {project.confidential && (
                          <span className="block text-sm text-orange-600 mt-2">
                            * Details limited due to client confidentiality
                          </span>
                        )}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-slate-100 text-slate-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.githubUrl && (
                        <div className="pt-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            className="group-hover:bg-slate-50"
                          >
                            <Github size={16} className="mr-2" />
                            View Code
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Certifications Section */}
        <div className="mt-20 mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-8">Certifications & Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow p-4 border-l-4 border-l-green-500">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <h4 className="font-semibold text-sm text-slate-800 mb-1">{cert.name}</h4>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                  {cert.platform}
                </Badge>
              </Card>
            ))}
          </div>
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
              <h4 className="text-3xl font-bold text-purple-600 mb-2">25+</h4>
              <p className="text-slate-600">Projects Completed</p>
            </Card>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open("https://github.com/georgegichure", '_blank')}
          >
            <Github size={20} className="mr-2" />
            View Portfolio on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;