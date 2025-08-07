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
    <section id="about" className="py-20 bg-slate-100 ml-72">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Business Analyst | Data Scientist</h3>
            <p className="text-xl text-slate-600 mb-6">
              Based in Nairobi, Kenya
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Analytical and results-driven professional with a proven track record in data analytics, machine learning, and predictive modeling. 
              I excel at interpreting complex datasets to drive strategy and achieve organizational goals. Skilled at deploying data-driven 
              solutions to drive efficiency, accuracy, and actionable insights.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">📧 Email:</h4>
                <p className="text-slate-600">georgegichure007@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">📱 Phone:</h4>
                <p className="text-slate-600">0718089143</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">🌐 Languages:</h4>
                <p className="text-slate-600">English, Swahili, French</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">📍 Location:</h4>
                <p className="text-slate-600">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">🎓 Educational Background</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-l-blue-500">
                  <h4 className="font-semibold text-lg text-slate-800 mb-2">Bachelor of Science in Computer Science</h4>
                  <p className="text-slate-600 mb-2">Major University</p>
                  <p className="text-sm text-slate-500">2018 - 2022</p>
                  <p className="text-sm text-slate-600 mt-2">
                    Focused on Data Structures, Algorithms, Database Systems, and Statistical Computing
                  </p>
                </Card>
                <Card className="p-6 border-l-4 border-l-green-500">
                  <h4 className="font-semibold text-lg text-slate-800 mb-2">Professional Certifications</h4>
                  <p className="text-slate-600 mb-2">Microsoft, IBM & Others</p>
                  <p className="text-sm text-slate-500">2022 - Present</p>
                  <p className="text-sm text-slate-600 mt-2">
                    Specialized certifications in Power BI, Python Data Analysis, and Big Data Technologies
                  </p>
                </Card>
              </div>
            </div>
          </div>
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
                Started as a data analyst and evolved into a comprehensive data professional with expertise spanning 
                business intelligence, data engineering, and predictive analytics. I've worked across banking, telecom, 
                and government sectors, delivering data-driven solutions that drive real business impact.
              </p>
              <p className="text-muted-foreground">
                My passion lies in transforming complex datasets into actionable insights that empower 
                decision-makers and drive organizational success. I believe in the power of data to solve 
                real-world problems and create meaningful change.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-card-foreground">Data Analytics & BI</span>
                <span className="text-primary font-semibold">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-card-foreground">Python & SQL</span>
                <span className="text-primary font-semibold">92%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-card-foreground">Machine Learning</span>
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