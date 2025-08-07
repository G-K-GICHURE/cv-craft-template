import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Code, Brain, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Analytics & BI Tools",
      skills: [
        { name: "Power BI", level: 95, certified: true },
        { name: "Tableau", level: 90, certified: false },
        { name: "Qlik Sense", level: 88, certified: false },
        { name: "Advanced Excel", level: 92, certified: false }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, certified: true },
        { name: "SQL", level: 95, certified: false },
        { name: "R", level: 75, certified: false },
        { name: "JavaScript", level: 70, certified: false }
      ]
    },
    {
      icon: Database,
      title: "Databases & Big Data",
      skills: [
        { name: "Oracle", level: 88, certified: false },
        { name: "SAP", level: 85, certified: false },
        { name: "Apache Spark", level: 80, certified: true },
        { name: "Hadoop", level: 75, certified: true }
      ]
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      skills: [
        { name: "Machine Learning", level: 85, certified: false },
        { name: "Predictive Modeling", level: 88, certified: false },
        { name: "Statistical Analysis", level: 90, certified: false },
        { name: "Data Mining", level: 87, certified: false }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Platforms",
      skills: [
        { name: "Microsoft Azure", level: 80, certified: false },
        { name: "Google Colab", level: 85, certified: false },
        { name: "Jupyter Notebooks", level: 90, certified: false },
        { name: "GitHub", level: 85, certified: false }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      skills: [
        { name: "ETL Development", level: 92, certified: false },
        { name: "Data Visualization", level: 93, certified: true },
        { name: "Business Process Analysis", level: 88, certified: false },
        { name: "Project Management", level: 85, certified: false }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white ml-72">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning analytics, programming, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <category.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-slate-700">{skill.name}</span>
                          {skill.certified && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                              Certified
                            </Badge>
                          )}
                        </div>
                        <span className="text-blue-600 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Microsoft Power BI Data Analyst Associate",
                "IBM: Data Analysis with Python",
                "IBM: Python for Data Science",
                "IBM: Data Visualization with Python",
                "IBM: Spark Level 1",
                "IBM: Big Data 101",
                "IBM: Hadoop 101",
                "PWC - Power BI Job Simulation"
              ].map((cert, index) => (
                <Badge key={index} variant="outline" className="p-2 text-center bg-white border-blue-200">
                  {cert}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;