import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, User } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Advanced Power BI Analytics for Banking Sector",
      summary: "Deep dive into creating sophisticated analytics dashboards for financial institutions using Power BI.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Power BI",
      linkedInUrl: "https://linkedin.com/in/george-gichure", // Replace with actual LinkedIn article URL
    },
    {
      title: "Data Mining Techniques for Operational Efficiency",
      summary: "Exploring data mining methodologies that increased operational efficiency by 20% across multiple sectors.",
      date: "2023-12-10",
      readTime: "6 min read", 
      category: "Data Science",
      linkedInUrl: "https://linkedin.com/in/george-gichure", // Replace with actual LinkedIn article URL
    },
    {
      title: "ETL Pipeline Automation: A Complete Guide",
      summary: "Step-by-step guide to building automated ETL workflows that save hours of manual work weekly.",
      date: "2023-11-20",
      readTime: "10 min read",
      category: "Data Engineering",
      linkedInUrl: "https://linkedin.com/in/george-gichure", // Replace with actual LinkedIn article URL
    },
    {
      title: "Business Intelligence Implementation Best Practices",
      summary: "Lessons learned from implementing BI solutions across 10+ major companies in East Africa.",
      date: "2023-10-05",
      readTime: "12 min read",
      category: "Business Intelligence",
      linkedInUrl: "https://linkedin.com/in/george-gichure", // Replace with actual LinkedIn article URL
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-slate-50 ml-72">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Latest Articles & Insights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing knowledge and insights from real-world data analytics projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-l-blue-500"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-500 gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {post.summary}
                </p>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <User size={16} />
                    <span>George Gichure</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(post.linkedInUrl, '_blank')}
                    className="group-hover:bg-blue-50 group-hover:border-blue-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Read on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => window.open("https://linkedin.com/in/george-gichure", '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ExternalLink size={20} className="mr-2" />
            View All Articles on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;