import React, { useState, useEffect } from 'react';
import { Mail, Phone, Youtube, X, Plus, ArrowDown, ArrowUpRight, Play } from 'lucide-react';

// --- DATA ---
const PANELS = [
  {
    id: 1,
    number: '01',
    title: 'My Agency',
    bgImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    number: '02',
    title: 'Youtube Channel',
    bgImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 3,
    number: '03',
    title: 'Templates',
    bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80',
  },
];

const PROJECTS = [
  { id: 1, title: 'Raw Wood', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Beyond Horizon', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Sustainable', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Blackberry', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Agency', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Strawberry', image: 'https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=800&q=80' },
];

export default function App() {
  const [activePanel, setActivePanel] = useState<number | null>(1);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  // --- SUB-COMPONENTS ---

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8 pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
        />
        <div className="text-white">
          <h1 className="font-bold text-lg leading-tight">Reinert</h1>
          <p className="text-sm text-gray-300">Web Designer</p>
        </div>
      </div>
      <div className="flex items-center gap-6 text-white pointer-events-auto">
        <button className="hover:text-blue-400 transition-colors"><Mail size={20} /></button>
        <button className="hover:text-blue-400 transition-colors"><Phone size={20} /></button>
        <button className="hover:text-blue-400 transition-colors"><Youtube size={20} /></button>
      </div>
    </header>
  );

  const ProjectsModal = () => (
    <div className={`fixed inset-0 z-[60] bg-zinc-950 text-white transition-opacity duration-500 overflow-y-auto ${isProjectsModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto p-8 md:p-16 pt-24">
        <button 
          onClick={() => setIsProjectsModalOpen(false)}
          className="absolute top-8 right-8 flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <span className="text-sm tracking-widest uppercase">Close</span>
          <X size={24} />
        </button>

        <p className="text-blue-500 font-semibold mb-4 tracking-wider text-sm uppercase">Project 01</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">My work</h2>
        <p className="max-w-3xl text-gray-400 text-lg md:text-xl mb-16 leading-relaxed">
          Over the years, I've designed and built websites for hundreds of clients across different industries. Here's a selection of previous projects that showcase my approach to modern design, creative interactions, and thoughtful user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- RENDER ---
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      <Header />
      <ProjectsModal />

      <main className="flex w-full h-full">
        {PANELS.map((panel) => {
          const isActive = activePanel === panel.id;
          const isExpanded = activePanel !== null;

          return (
            <div
              key={panel.id}
              onClick={() => !isActive && setActivePanel(panel.id)}
              className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group ${
                isActive 
                  ? 'w-[75%] lg:w-[80%]' 
                  : isExpanded 
                    ? 'w-[12.5%] lg:w-[10%] cursor-pointer hover:bg-white/5' 
                    : 'w-[33.333%] cursor-pointer hover:bg-white/5'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={panel.bgImage} 
                  alt={panel.title} 
                  className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-105 group-hover:scale-100 grayscale-[50%]'}`}
                />
                <div className={`absolute inset-0 transition-colors duration-700 ${isActive ? 'bg-black/60' : 'bg-black/80'}`} />
              </div>

              {/* Panel Content - Inactive State */}
              <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}>
                <div className="flex flex-col items-center justify-end h-full relative">
                  <span 
                    className="absolute bottom-32 whitespace-nowrap text-2xl font-medium text-white/80 tracking-wider"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {panel.title}
                  </span>
                  <div className="flex flex-col items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <Plus size={20} />
                    </button>
                    <span className="text-4xl lg:text-6xl font-light text-white">{panel.number}</span>
                  </div>
                </div>
              </div>

              {/* Panel Content - Active State */}
              <div className={`absolute inset-0 p-8 lg:p-24 pt-32 lg:pt-32 flex flex-col transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setActivePanel(null); }}
                  className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm z-50"
                >
                  <X size={24} />
                </button>

                <div className="max-w-2xl text-white mt-auto lg:mt-12 h-full flex flex-col justify-center ml-auto text-left">
                  
                  {/* PANEL 1: AGENCY */}
                  {panel.id === 1 && (
                    <div className="animate-fade-in-up flex flex-col items-start">
                      <p className="text-lg md:text-xl font-medium mb-2 text-gray-300">Design brain. Developer skills.</p>
                      <h2 className="text-6xl md:text-8xl font-bold mb-8">Web Designer</h2>
                      
                      <div className="flex items-center justify-start gap-6 mb-8 text-gray-400">
                        <span className="flex items-center gap-2"><Phone size={18} /> +45 223 323 665</span>
                        <span className="flex items-center gap-2"><Mail size={18} /> info@reinert.com</span>
                      </div>

                      <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                        I'm Reinert, a web designer specializing in modern, clean websites. I've created more than 300 websites and worked with over 250 clients. My work combines thoughtful UI/UX, creative interactions, and solid engineering to create digital experiences that stand out.
                      </p>

                      <div className="flex flex-col gap-2 mb-10 text-sm md:text-base items-start">
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">100+</span> <span className="text-left">Websites Built</span></div>
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">7+ Years</span> <span className="text-left">Experience</span></div>
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">Specialized In</span> <span className="text-left">React, UI/UX & Tailwind</span></div>
                      </div>

                      <button 
                        onClick={() => setIsProjectsModalOpen(true)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-all w-fit"
                      >
                        View projects <ArrowDown size={20} />
                      </button>
                    </div>
                  )}

                  {/* PANEL 2: YOUTUBE */}
                  {panel.id === 2 && (
                    <div className="animate-fade-in-up flex flex-col items-start">
                      <div className="flex items-center justify-start gap-3 mb-6 text-red-500">
                        <span className="text-2xl font-bold text-white tracking-tighter">YouTube</span>
                        <Play size={32} fill="currentColor" />
                      </div>
                      <h2 className="text-6xl md:text-8xl font-bold mb-4">Web Design<br/>Creator</h2>
                      <p className="text-2xl font-medium text-gray-300 mb-8">+75.000 subscribers</p>
                      
                      <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                        I create videos that make modern web design easier to understand and build. Through tutorials, creative techniques, and real projects, I help designers create better websites with modern tools.
                      </p>

                      <div className="flex flex-col gap-2 mb-10 text-sm md:text-base items-start">
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">5M+</span> <span className="text-left">Views</span></div>
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">75K+</span> <span className="text-left">Subscribers</span></div>
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">40+</span> <span className="text-left">Videos</span></div>
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-all w-fit">
                        View channel <ArrowUpRight size={20} />
                      </button>
                    </div>
                  )}

                  {/* PANEL 3: TEMPLATES */}
                  {panel.id === 3 && (
                    <div className="animate-fade-in-up flex flex-col items-start">
                      <h2 className="text-6xl md:text-8xl font-bold mb-4">Template Club</h2>
                      <p className="text-2xl font-medium text-gray-300 mb-8">Unlock Your Best Work Yet</p>
                      
                      <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                        I have a library of premium templates created specifically for modern designers. Built to help you work faster, create better websites, and deliver work you're genuinely proud of.
                      </p>

                      <div className="flex flex-col gap-2 mb-10 text-sm md:text-base items-start">
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">Members</span> <span className="text-left">1,400+</span></div>
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">Templates</span> <span className="text-left">50+</span></div>
                        <div className="flex justify-start gap-4 w-full"><span className="w-32 text-gray-400 text-left">Built For</span> <span className="text-left">React & Tailwind Designers</span></div>
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-all w-fit">
                        See all templates <ArrowUpRight size={20} />
                      </button>
                    </div>
                  )}

                </div>
                
                {/* Active state bottom number */}
                <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-24">
                  <span className="text-6xl lg:text-8xl font-light text-white/50">{panel.number}</span>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
}