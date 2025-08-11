import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Code, Brain, Cloud, Wrench, ExternalLink } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Analytics & BI Tools",
      skills: [
        { name: "Power BI", certified: true },
        { name: "Tableau", certified: false },
        { name: "Qlik Sense", certified: false },
        { name: "Advanced Excel", certified: false }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", certified: true },
        { name: "SQL", certified: false },
        { name: "R", certified: false },
        { name: "JavaScript", certified: false }
      ]
    },
    {
      icon: Database,
      title: "Databases & Big Data",
      skills: [
        { name: "Oracle", certified: false },
        { name: "SAP", certified: false },
        { name: "Apache Spark", certified: true },
        { name: "Hadoop", certified: true }
      ]
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      skills: [
        { name: "Machine Learning", certified: false },
        { name: "Predictive Modeling", certified: false },
        { name: "Statistical Analysis", certified: false },
        { name: "Data Mining", certified: false }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Platforms",
      skills: [
        { name: "Microsoft Azure", certified: false },
        { name: "Google Colab", certified: false },
        { name: "Jupyter Notebooks", certified: false },
        { name: "GitHub", certified: false }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      skills: [
        { name: "ETL Development", certified: false },
        { name: "Data Visualization", certified: true },
        { name: "Business Process Analysis", certified: false },
        { name: "Project Management", certified: false }
      ]
    }
  ];

  const certifications = [
    { 
      name: "Microsoft Power BI Data Analyst Associate", 
      issuer: "Microsoft",
      date: "2024",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/your-verification-id",
      badgeUrl: "https://images.credly.com/size/340x340/images/619f9d9b-2e66-4fc8-a91d-9d8b3b5efc82/image.png"
    },
    { 
      name: "IBM: Data Analysis with Python", 
      issuer: "IBM",
      date: "2023",
      verificationUrl: "https://www.coursera.org/account/accomplishments/certificate/your-cert-id",
      badgeUrl: "https://images.credly.com/size/340x340/images/ba34f628-5b95-420f-b450-6ed7e5a9c4f1/image.png"
    },
    { 
      name: "IBM: Python for Data Science", 
      issuer: "IBM",
      date: "2023",
      verificationUrl: "https://www.coursera.org/account/accomplishments/certificate/your-cert-id",
      badgeUrl: "https://images.credly.com/size/340x340/images/0571ab1d-f43b-43d9-9c68-8ebd0ebd61b7/Python_for_Data_Sci_and_AI_Foundational.png"
    },
    { 
      name: "IBM: Data Visualization with Python", 
      issuer: "IBM",
      date: "2023",
      verificationUrl: "https://www.coursera.org/account/accomplishments/certificate/your-cert-id",
      badgeUrl: "https://images.credly.com/size/340x340/images/76326afb-199d-4250-a74f-01bc86dda118/Cognitive_Class_-_Data_Visual_w_Python.png"
    },
    { 
      name: "IBM: Spark Level 1", 
      issuer: "IBM",
      date: "2023",
      verificationUrl: "https://www.credly.com/badges/your-badge-id",
      badgeUrl: "https://images.credly.com/size/340x340/images/11356b75-2f70-48b7-8574-a15bebec8d24/image.png"
    },
    { 
      name: "IBM: Big Data 101", 
      issuer: "IBM",
      date: "2023",
      verificationUrl: "https://www.credly.com/badges/your-badge-id",
      badgeUrl: "https://images.credly.com/size/340x340/images/f22c9615-99c3-4d5e-b4d2-87ddc5c6e513/Big_Data_101.png"
    },
    { 
      name: "IBM: Hadoop 101", 
      issuer: "IBM",
      date: "2023",
      verificationUrl: "https://www.credly.com/badges/your-badge-id",
      badgeUrl: "https://images.credly.com/size/340x340/images/9cf46d5f-fb86-41b5-8805-4f2e61e40b55/Hadoop_101.png"
    },
    { 
      name: "PWC - Power BI Job Simulation", 
      issuer: "PWC via Forage",
      date: "2024",
      verificationUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/your-cert-id.pdf",
      badgeUrl: "https://cdn.theforage.com/vinternships/companyassets/4sLyCPgmsy8DA6Dh3/4sCPgmsy8DA6Dh3_1585821939749_pwc%20logo.png"
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
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant={skill.certified ? "default" : "secondary"}
                      className={`${skill.certified ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-700'} hover:scale-105 transition-transform`}
                    >
                      {skill.name}
                      {skill.certified && (
                        <span className="ml-1 text-xs">✓</span>
                      )}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={cert.badgeUrl} 
                      alt={cert.name}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-slate-800 mb-2 leading-tight">{cert.name}</h4>
                  <p className="text-xs text-slate-600 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 mb-3">{cert.date}</p>
                  <a 
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Verify Certificate
                    <ExternalLink size={12} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;