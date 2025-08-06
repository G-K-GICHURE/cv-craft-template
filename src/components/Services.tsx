import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Brain, Cpu, FileSpreadsheet, Presentation } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Data Analysis & Mining",
      description: "Extract valuable insights from complex datasets using advanced statistical methods and machine learning algorithms.",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Scikit-Learn"],
      tools: ["Jupyter", "Google Colab", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Business Intelligence",
      description: "Design and implement BI solutions with interactive dashboards and automated reporting systems.",
      skills: ["Power BI", "Tableau", "Qlik", "Advanced Excel"],
      tools: ["Power BI", "Tableau Cloud", "Qlik Sense", "Excel"]
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Machine Learning",
      description: "Develop predictive models and ML solutions to drive business growth and operational efficiency.",
      skills: ["Predictive Modeling", "Classification", "Regression", "Feature Engineering"],
      tools: ["Python", "Scikit-Learn", "TensorFlow", "Jupyter"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: "ETL & Data Integration",
      description: "Build robust data pipelines and automated workflows for seamless data integration and processing.",
      skills: ["ETL Design", "Data Warehousing", "API Integration", "Data Modeling"],
      tools: ["Apache Spark", "Hadoop", "Oracle", "SAP"]
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8 text-red-500" />,
      title: "Data Governance",
      description: "Establish data quality standards and governance practices to ensure data integrity and compliance.",
      skills: ["Data Quality", "Compliance", "Documentation", "Standards"],
      tools: ["Data Catalogs", "Quality Tools", "Governance Frameworks"]
    },
    {
      icon: <Presentation className="w-8 h-8 text-cyan-500" />,
      title: "Data Storytelling",
      description: "Transform complex data insights into compelling narratives for stakeholders and decision-makers.",
      skills: ["Visualization", "Reporting", "Presentation", "Communication"],
      tools: ["Power BI", "Tableau", "Excel", "Qlik"]
    }
  ];

  const industries = [
    "Banking & Finance", "Healthcare", "Telecommunications", "Insurance", 
    "Manufacturing", "Retail", "Government", "Real Estate"
  ];

  const databases = [
    "Oracle", "PostgreSQL", "MongoDB", "MySQL", "SQL Server", 
    "SAP HANA", "Hadoop", "Apache Spark", "BigQuery"
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 ml-72">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Services & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive data solutions to transform your business through insights and intelligence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Core Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Tools:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries & Databases */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-green-500" />
                Industries Served
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200">
                    {industry}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-500" />
                Database Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {databases.map((db, index) => (
                  <Badge key={index} className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    {db}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;