import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer creating digital experiences that matter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/80 hover:text-white transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;