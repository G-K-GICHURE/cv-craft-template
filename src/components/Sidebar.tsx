import { User, Home, FileText, Briefcase, Wrench, Mail, Linkedin, Github, Phone, BookOpen, Award } from "lucide-react";
import georgePhoto from "@/assets/george-photo.png";

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white p-6 overflow-y-auto z-50">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20">
          <img 
            src={georgePhoto} 
            alt="George Gichure" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">George Gichure</h2>
        
        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-6">
          <a 
            href="https://linkedin.com/in/george-gichure-5b386a164" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href="mailto:georgegichure007@gmail.com"
            className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Mail size={16} />
          </a>
          <a 
            href="https://github.com/georgegichure"
            target="_blank"
            rel="noopener noreferrer" 
            className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Github size={16} />
          </a>
          <a 
            href="tel:0718089143"
            className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <button 
          onClick={() => scrollToSection('hero')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <Home size={18} className="text-blue-400 group-hover:text-white" />
          <span>Home</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <User size={18} className="text-blue-400 group-hover:text-white" />
          <span>About</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('experience')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <FileText size={18} className="text-blue-400 group-hover:text-white" />
          <span>Resume</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('skills')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <Award size={18} className="text-blue-400 group-hover:text-white" />
          <span>Skills</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <Briefcase size={18} className="text-blue-400 group-hover:text-white" />
          <span>Portfolio</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('blogs')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <BookOpen size={18} className="text-blue-400 group-hover:text-white" />
          <span>Blogs</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('services')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <Wrench size={18} className="text-blue-400 group-hover:text-white" />
          <span>Services</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 rounded-lg transition-colors group"
        >
          <Mail size={18} className="text-blue-400 group-hover:text-white" />
          <span>Contact</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;