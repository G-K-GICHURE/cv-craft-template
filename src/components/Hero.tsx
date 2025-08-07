import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = [
    "Data Scientist",
    "Data Analyst", 
    "Business Analyst",
    "Business Developer",
    "Data Engineer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ml-72">
      <div className="absolute inset-0 bg-slate-800/50 opacity-20" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8 border-4 border-blue-400/30 shadow-2xl animate-fade-in bg-slate-700 flex items-center justify-center">
            <div className="text-6xl text-blue-400">👨‍💼</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            George <span className="text-blue-400">Gichure</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-blue-400 font-medium animate-fade-in transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            I'm a <span className="inline-block min-w-[200px] text-left">{roles[currentRoleIndex]}</span>
          </p>
          <p className="text-xl md:text-2xl mb-8 text-white/80 leading-relaxed animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            Analytical and results-driven professional with proven expertise in data analytics, machine learning, and predictive modeling. Skilled at transforming complex datasets into actionable business insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;