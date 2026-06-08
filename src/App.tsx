import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Code2, 
  Network, 
  Settings, 
  Zap,
  Mail, 
  Linkedin, 
  Github,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  ExternalLink,
  CpuIcon,
  Bot,
  X,
  Menu
} from 'lucide-react';

// --- Components ---

const Nav = ({ activeTab, setTab }: { activeTab: string, setTab: (t: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-[0_0_30px_rgba(199,243,0,0.05)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 h-16">
        <div className="flex items-center h-full">
          <div className="text-[10px] md:text-[11px] lg:text-sm font-black tracking-[0.1em] md:tracking-[0.2em] border-r border-white/10 pr-4 md:pr-6 mr-4 md:mr-6 uppercase font-sans whitespace-nowrap bg-gradient-to-r from-white via-[#c7f300] to-white bg-clip-text text-transparent">
            HAMZA_COMMAND_CENTER
          </div>
          <div className="hidden lg:flex h-full">
            {['HOME', 'TECH_STACK', 'PROJECTS', 'CERTIFICATIONS', 'CONTACT'].map((tab) => (
              <button
                key={tab}
                onClick={() => setTab(tab)}
                className={`px-4 h-full font-sans uppercase tracking-[0.12em] text-[10px] font-bold transition-all duration-300 relative ${
                  activeTab === tab ? 'text-[#c7f300]' : 'text-zinc-600 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c7f300] shadow-[0_0_12px_#c7f300]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
            <a href="https://www.linkedin.com/in/hamza-almughrabi/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#c7f300] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/HamzaAlmughrabi02" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#c7f300] transition-colors">
              <Github size={18} />
            </a>
          </div>
          <button 
            onClick={() => setTab('CONTACT')} 
            className="bg-[#c7f300] text-black font-black px-4 md:px-6 py-2 uppercase tracking-widest text-[9px] hover:bg-white transition-all active:scale-95 shadow-[0_0_15px_rgba(199,243,0,0.2)]"
          >
            ENGAGE_NOW
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#c7f300] p-2 flex items-center gap-2 border border-[#c7f300]/20 bg-[#c7f300]/5 rounded-sm"
          >
            <span className="text-[10px] font-bold tracking-widest hidden sm:inline">MENU</span>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-[#050505] border-b border-[#c7f300]/20 p-6 flex flex-col gap-3 lg:hidden z-50"
          >
            {['HOME', 'TECH_STACK', 'PROJECTS', 'CERTIFICATIONS', 'CONTACT'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setTab(tab);
                  setIsOpen(false);
                }}
                className={`py-4 text-left px-6 border-l-2 font-black uppercase tracking-[0.15em] text-[11px] transition-all active:bg-[#c7f300]/10 ${
                  activeTab === tab ? 'text-[#c7f300] border-[#c7f300] bg-white/5' : 'text-zinc-500 border-transparent hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Sidebar = ({ activeTab, setTab }: { activeTab: string, setTab: (t: string) => void }) => (
  <aside className="h-full w-20 border-r border-white/10 bg-[#050505] hidden lg:flex flex-col items-center py-8 gap-12 z-40 shrink-0">
    <div className="flex flex-col gap-8">
      {[
        { id: 'HOME', icon: Terminal, label: 'SYSTEM_DASH' },
        { id: 'TECH_STACK', icon: Cpu, label: 'CORE_ROOT' },
        { id: 'PROJECTS', icon: Database, label: 'LOG_FILES' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setTab(item.id)}
          className={`flex flex-col items-center gap-1 p-3 transition-all duration-300 group ${
            activeTab === item.id ? 'bg-[#c7f300] text-black shadow-[0_0_15px_rgba(199,243,0,0.4)]' : 'text-zinc-600 hover:text-[#c7f300]'
          }`}
        >
          <item.icon size={20} />
          <span className="text-[8px] font-bold uppercase tracking-tighter">{item.label}</span>
        </button>
      ))}
    </div>
    <div className="mt-auto flex flex-col gap-8 pb-4">
      <button className="text-zinc-600 hover:text-[#c7f300] transition-all"><Code2 size={20} /></button>
      <button className="text-zinc-600 hover:text-[#c7f300] transition-all"><Network size={20} /></button>
    </div>
  </aside>
);

const SectionHeader = ({ title, subtitle, info }: { title: string, subtitle: string, info?: string }) => (
  <header className="mb-8 md:mb-16 border-l-2 border-[#c7f300]/40 pl-4 md:pl-8 relative">
    <div className="absolute -left-[1px] top-0 w-0.5 h-full bg-[#c7f300] shadow-[0_0_15px_#c7f300]" />
    <span className="text-[#c7f300] font-mono text-[9px] md:text-xs mb-2 md:mb-3 block tracking-[0.3em] uppercase opacity-60">
      // {subtitle}
    </span>
    <h2 className="text-xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6 break-words leading-[1] md:leading-[0.9]">
      {title}
    </h2>
    {info && <p className="text-zinc-500 max-w-2xl text-[10px] md:text-sm font-medium leading-relaxed tracking-wide opacity-80">{info}</p>}
  </header>
);

// --- Sections ---

const Home = ({ setTab }: { setTab: (t: string) => void }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <section className="flex-grow relative flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-10 sm:py-16 overflow-hidden terminal-grid">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none border-l border-white/5">
        <div className="h-full w-full terminal-grid"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-2 h-2 bg-[#c7f300] shadow-[0_0_10px_#c7f300] animate-pulse flex-shrink-0"></div>
          <div className="font-mono text-[#c7f300] tracking-[0.2em] md:tracking-[0.4em] uppercase text-[7px] md:text-[10px]">
            SYSTEM STATUS: OPERATIONAL // KERNEL_LOADED: 100%
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-black text-[#c7f300] text-[10px] sm:text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap uppercase">HAMZA ALMUGHRABI</span>
              <div className="h-[1px] flex-grow bg-[#c7f300]/20"></div>
              <span className="text-zinc-500 font-mono text-[7px] md:text-[9px] whitespace-nowrap shrink-0">SR_ENGINEER // ID_7734</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tight uppercase break-words">
              TRANSFORMING DATA INTO <span className="text-[#c7f300]">STRATEGIC</span> INTELLIGENCE.
            </h1>
            <div className="flex flex-col gap-6 max-w-2xl">
              <p className="text-zinc-500 text-[10px] sm:text-xs md:text-base leading-relaxed font-medium opacity-90 border-l-2 border-[#c7f300]/30 pl-4 md:pl-6">
                Engineering advanced machine learning architectures and autonomous control systems. Solving industrial complexity through mathematical precision.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <button 
                  onClick={() => setTab('PROJECTS')}
                  className="flex-grow sm:flex-none min-w-[130px] bg-[#c7f300] text-black font-black px-4 sm:px-6 md:px-10 py-3 md:py-4 uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[11px] hover:bg-white transition-all shadow-[0_0_15px_rgba(199,243,0,0.2)] hover:-translate-y-1 active:scale-95"
                >
                  VIEW_PROJECTS
                </button>
                <button 
                  onClick={() => setShowSpecs(true)}
                  className="flex-grow sm:flex-none min-w-[130px] border-2 border-[#fe00fe] text-[#fe00fe] font-black px-4 sm:px-6 md:px-10 py-3 md:py-4 uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[11px] hover:bg-[#fe00fe]/10 transition-all hover:-translate-y-1 active:scale-95"
                >
                  DECRYPT_SPECS
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative group p-3 md:p-4 border border-white/5 w-full max-w-[200px] sm:max-w-[240px] md:max-w-xs lg:max-w-sm transition-all duration-500">
              <div className="absolute -top-3 -left-3 bg-[#c7f300] text-black px-3 py-1.5 text-[8px] md:text-[9px] font-black z-20 shadow-[3px_3px_0px_white]">ROOT_USER</div>
              <div className="absolute -bottom-3 -right-3 border-2 border-[#c7f300] text-[#c7f300] px-3 py-1.5 text-[8px] md:text-[9px] font-black z-20 bg-[#050505]">HASH: XA-77</div>
              
              <div className="aspect-[4/5] w-full overflow-hidden shadow-[0_0_40px_rgba(199,243,0,0.1)] border border-white/10 relative">
                <img 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  src="/image.jpg" 
                />
                <div className="absolute inset-0 pointer-events-none opacity-20 terminal-grid"></div>
              </div>
              
              <div className="absolute top-8 right-8 flex flex-col gap-2 items-end opacity-90 z-20">
                <div className="font-mono text-[8px] md:text-[10px] text-[#c7f300] font-bold flex items-center gap-2 uppercase">
                  <span className="w-1.5 h-1.5 bg-[#c7f300] rounded-full animate-ping"></span>
                  SCANNING
                </div>
                <div className="w-20 md:w-24 h-1.5 bg-white/5 border border-white/10 overflow-hidden relative">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-[#c7f300] shadow-[0_0_10px_#c7f300]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSpecs && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050505]/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a0a0a] border-2 border-[#fe00fe]/30 w-full max-w-lg p-8 relative overflow-hidden shadow-[0_0_50px_rgba(254,0,254,0.1)]"
            >
              <div className="absolute top-0 right-0 p-4">
                <button 
                  onClick={() => setShowSpecs(false)}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#fe00fe] shadow-[0_0_10px_#fe00fe]"></div>
                  <span className="text-[#fe00fe] font-mono text-[10px] tracking-widest uppercase">System_Core_Decrypted</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Laboratory Specifications</h3>
                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed font-medium">
                  <p>
                    <span className="text-white">CORE ARCHITECTURE:</span> Distributed neural network processing with edge-computing capability. Optimized for high-throughput data pipelines and real-time robotic feedback loops.
                  </p>
                  <p>
                    <span className="text-white">INTELLIGENCE LAYER:</span> Custom XGBoost implementations combined with computer vision transformers for multi-modal environment perception.
                  </p>
                  <p>
                    <span className="text-white">SECURITY PROTOCOLS:</span> Hardened systems deployment with isolated kernel processing and hardware-level automation via ESP32/Arduino clusters.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-8">
                <a 
                  href="https://github.com/HamzaAlmughrabi02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black font-black px-6 py-4 uppercase tracking-widest text-[10px] text-center hover:bg-[#c7f300] transition-all flex items-center justify-center gap-3"
                >
                  <Github size={16} />
                  ACCESS_REPOSITORY
                </a>
                <button 
                  onClick={() => setShowSpecs(false)}
                  className="flex-1 border border-white/20 text-white font-black px-6 py-4 uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all outline-none"
                >
                  ABORT_SESSION
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fe00fe] to-transparent opacity-30"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GOLD_PROJECTS = [
  {
    id: "GP_01",
    title: "Intelligent Sales Prediction",
    tags: ['TECH: XGBoost', 'METRIC: R2=0.999', 'DEPLOY: K8S_CLUSTER'],
    desc: "High-frequency predictive modeling utilizing XGBoost for precise revenue forecasting. Optimized for real-time inference with sub-20ms latency across global nodes.",
    image: "/download_1.jpg",
    fidelity: "92%",
    specs: [
      "Core architecture utilizing XGBoost ensemble methods for robust regression models.",
      "Automated feature engineering pipeline with real-time stream processing capabilities.",
      "Deployed on high-availability Kubernetes clusters with dynamic auto-scaling protocols."
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "GP_02",
    title: "Autonomous Robotics Navigator",
    tags: ['TECH: C++', 'SLAM: LIDAR', 'OS: ROS2'],
    desc: "A full-stack navigation system for autonomous ground vehicles. Implements advanced SLAM algorithms and real-time path planning in complex industrial environments.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    fidelity: "98%",
    specs: [
      "LIDAR-based SLAM (Simultaneous Localization and Mapping) for precision environment mapping.",
      "Full stack navigation utilizing ROS2 for low-latency inter-process communication.",
      "Path planning algorithms optimized for complex dynamic obstacle avoidance."
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "GP_03",
    title: "Neural Industrial Optimization",
    tags: ['AI: PyTorch', 'ARCH: Transformers', 'OPT: TensorRT'],
    desc: "Deep learning architecture for optimizing factory throughput. Utilizes vision transformers to detect bottlenecks and predict maintenance cycles with high precision.",
    image: "/The_New_Rules_of_Wealth_in_the_AI_Era.jpg.jpg",
    fidelity: "95%",
    specs: [
      "Industrial vision transformers for high-accuracy bottleneck detection systems.",
      "Predictive maintenance models trained on multi-modal sensor fusion data streams.",
      "Quantized hardware-level optimization using NVIDIA TensorRT for edge deployment."
    ],
    githubUrl: "https://github.com"
  }
];

const Projects = () => {
  const [currentGoldIndex, setGoldIndex] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);
  const project = (GOLD_PROJECTS as any)[currentGoldIndex];

  const nextProject = () => {
    setGoldIndex((prev) => (prev + 1) % GOLD_PROJECTS.length);
    setShowSpecs(false);
  };
  const prevProject = () => {
    setGoldIndex((prev) => (prev - 1 + GOLD_PROJECTS.length) % GOLD_PROJECTS.length);
    setShowSpecs(false);
  };

  return (
    <section className="min-h-[calc(100vh-64px)] px-6 sm:px-8 md:px-12 py-12 sm:py-16 bg-[#050505] relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col">
        <SectionHeader 
          title="Medallion_Architecture" 
          subtitle="PROJECTS" 
          info="A multi-layered data strategy for refined project delivery."
        />
        
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Gold Tier */}
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2 mb-6 uppercase">
              <span className="text-[#c7f300] font-bold tracking-widest text-xs">01 // GOLD_TIER</span>
              <div className="hidden md:block h-[1px] flex-grow bg-white/10"></div>
              <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                 {GOLD_PROJECTS.map((_, i) => (
                   <button 
                    key={i}
                    onClick={() => {
                      setGoldIndex(i);
                      setShowSpecs(false);
                    }}
                    className={`h-1 min-w-[2rem] md:w-8 transition-all flex-shrink-0 ${currentGoldIndex === i ? 'bg-[#c7f300] shadow-[0_0_8px_#c7f300]' : 'bg-white/10'}`} 
                   />
                 ))}
              </div>
              <span className="text-zinc-500 font-mono text-[10px] md:ml-4">Refined_Asset_{currentGoldIndex + 1}</span>
            </div>
            
            <div className="glass-panel p-4 sm:p-6 md:p-8 relative overflow-hidden group border-t-2 border-[#c7f300] shadow-[0_0_20px_rgba(199,243,0,0.1)]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentGoldIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
                >
                  <div className="order-2 lg:order-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="inline-block px-2 py-1 bg-[#c7f300] text-black text-[9px] font-bold">CRITICAL_ASSET</div>
                      <div className="flex gap-3">
                         <button onClick={prevProject} className="w-10 h-10 md:w-8 md:h-8 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-[#c7f300] hover:border-[#c7f300] transition-all bg-white/5 active:scale-90">
                            <ChevronRight className="rotate-180" size={20} />
                         </button>
                         <button onClick={nextProject} className="w-10 h-10 md:w-8 md:h-8 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-[#c7f300] hover:border-[#c7f300] transition-all bg-white/5 active:scale-90">
                            <ChevronRight size={20} />
                         </button>
                      </div>
                    </div>
                    
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tight uppercase">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8 uppercase">
                      {(project.tags as string[]).map(tag => (
                        <span key={tag} className="border border-white/5 px-2.5 py-1 text-[9px] font-bold font-mono bg-white/2 text-zinc-400 hover:border-[#c7f300]/30 transition-colors uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <p className="text-zinc-500 mb-8 md:mb-10 border-l border-[#c7f300]/20 pl-4 md:pl-6 text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed italic opacity-80">
                      {project.desc}
                    </p>
                    <button 
                      onClick={() => setShowSpecs(true)}
                      className="group/btn relative border border-[#c7f300] text-[#c7f300] px-6 sm:px-8 py-3 font-bold uppercase tracking-widest text-[9px] md:text-[10px] overflow-hidden transition-all w-fit"
                    >
                      <span className="relative z-10 group-hover/btn:text-black transition-colors">DECRYPT_SPECIFICATIONS</span>
                      <div className="absolute inset-0 bg-[#c7f300] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  <div className="relative aspect-video lg:h-full min-h-[250px] md:min-h-[300px] border border-white/10 overflow-hidden bg-black/40 group/img order-1 lg:order-2">
                    <img 
                      src={project.image} 
                      className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-700 scale-110 group-hover/img:scale-100"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                      <div className="font-mono text-[8px] text-zinc-500 mb-2 uppercase tracking-widest">SIGNAL_INTEGRITY</div>
                      <div className="flex gap-1 mb-2">
                        {[1,1,1,1,1,1,0,0].map((v, i) => (
                          <div key={i} className={`h-1 md:h-1.5 w-2 md:w-3 ${v ? 'bg-[#c7f300]' : 'bg-white/10'}`} />
                        ))}
                      </div>
                      <span className="text-[8px] md:text-[10px] font-mono text-[#c7f300]">DATA_FIDELITY: {project.fidelity}</span>
                    </div>
                    <div className="absolute top-4 md:top-6 right-4 md:right-6 font-mono text-[8px] md:text-[10px] text-zinc-500 uppercase">
                      LOCKED_COORD: {31.94 + currentGoldIndex}°N
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showSpecs && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050505]/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a0a0a] border-2 border-[#c7f300]/30 w-full max-w-lg p-8 relative overflow-hidden shadow-[0_0_50px_rgba(199,243,0,0.1)]"
            >
              <div className="absolute top-0 right-0 p-4">
                <button 
                  onClick={() => setShowSpecs(false)}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#c7f300] shadow-[0_0_10px_#c7f300]"></div>
                  <span className="text-[#c7f300] font-mono text-[10px] tracking-widest uppercase">Project_Decrypted // {project.id}</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{project.title}</h3>
                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed font-medium">
                  {(project.specs as string[]).map((spec, i) => (
                    <p key={i}>
                      <span className="text-white">TECH_{i + 1}:</span> {spec}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-8">
                <a 
                  href={project.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#c7f300] text-black font-black px-6 py-4 uppercase tracking-widest text-[10px] text-center hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  <Github size={16} />
                  VIEW_CODEBASE
                </a>
                <button 
                  onClick={() => setShowSpecs(false)}
                  className="flex-1 border border-white/20 text-white font-black px-6 py-4 uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all outline-none"
                >
                  TERMINATE
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c7f300]/30 animate-pulse"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <div className="grid grid-cols-12 gap-8 mt-12">
        {/* Silver Tier */}
        <div className="col-span-12 md:col-span-8">
          <div className="flex items-center gap-2 mb-6 uppercase">
            <span className="text-zinc-300 font-bold tracking-widest text-xs">02 // SILVER_TIER</span>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Customer Response Prediction", id: "REF_ML_01", desc: "Automated classification systems for customer engagement sentiment analysis." },
              { title: "NLP Prompt Engineering", id: "NLP_PR_04", desc: "Advanced prompt orchestration for LLMs in robotics control contexts." }
            ].map(p => (
              <div key={p.id} className="glass-panel p-5 sm:p-8 border-l-2 border-white/20 hover:border-[#c7f300] transition-colors group">
                <div className="flex justify-between mb-4">
                  <Bot size={18} className="text-[#c7f300]" />
                  <span className="text-[10px] text-zinc-600 font-mono">ID: {p.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase">{p.title}</h3>
                <p className="text-zinc-500 text-sm mb-8">{p.desc}</p>
                <div className="flex gap-2">
                  <div className="h-1 w-8 bg-[#c7f300]/20"></div>
                  <div className="h-1 w-8 bg-zinc-800"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Tier */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-2 mb-6 uppercase">
            <span className="text-zinc-600 font-bold tracking-widest text-xs">03 // BRONZE_TIER</span>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>
          <div className="glass-panel p-5 sm:p-8 h-full border-dashed">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Academic Foundations</h3>
            <p className="text-zinc-600 text-sm mb-8 font-light italic">Raw datasets and early-stage experimental logs that form the bedrock of the architecture.</p>
            <ul className="space-y-4">
              {['LINEAR_ALGEBRA_VOL1', 'STAT_METHODS_CORE', 'DATA_STRUCT_ROOT'].map(item => (
                <li key={item} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-zinc-500 font-mono text-[10px]">{item}</span>
                  <CheckCircle2 size={14} className="text-[#c7f300]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  </section>
  );
};

const TechStack = () => (
  <section className="min-h-[calc(100vh-64px)] px-6 sm:px-8 md:px-12 py-10 sm:py-16 terminal-grid flex flex-col justify-center">
    <div className="max-w-7xl mx-auto w-full z-10 flex flex-col">
      <header className="mb-10 md:mb-12 relative flex items-baseline gap-4">
        <span className="text-[#c7f300] font-mono text-lg md:text-xl tracking-tighter">&gt;&gt;</span>
        <h1 className="text-[22px] sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.2]">TECH_STACK_OVERRIDE</h1>
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, step: 'end' }}
          className="w-3 h-8 md:h-10 bg-[#c7f300]" 
        />
      </header>

      <div className="grid grid-cols-12 gap-6 md:gap-8 mb-12">
        {/* Domain AI */}
        <div className="col-span-12 lg:col-span-7 glass-panel p-5 sm:p-8 border-t-2 border-[#c7f300] shadow-[0_0_20px_rgba(199,243,0,0.15)]">
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <div>
                <span className="text-[#c7f300] text-[9px] md:text-[10px] font-bold block mb-1 uppercase tracking-widest">DOMAIN_01</span>
                <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-tight">AI & DEEP_LEARNING</h2>
              </div>
              <Zap size={18} className="text-[#c7f300]" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['TENSORFLOW', 'PYTORCH'].map((t, i) => (
                <div key={t} className="border border-white/10 p-4 group hover:border-[#c7f300] transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">ENGINE_0{i+1}</span>
                    <div className="w-2 h-2 bg-[#c7f300] shadow-[0_0_8px_#c7f300]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{t}</h3>
                  <div className="flex gap-1">
                    {[1,1,1,1,0].map((v, idx) => (
                      <div key={idx} className={`h-2 w-4 ${v ? 'bg-[#c7f300]' : 'bg-white/5'}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-4 bg-[#c7f300]"></div>
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">MACHINE_LEARNING_HIERARCHY</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  type: 'SUPERVISED', 
                  libs: ['LIN_REGRESSION', 'XGBOOST', 'SVM', 'RANDOM_FOREST'],
                  color: 'text-[#c7f300]'
                },
                { 
                  type: 'UNSUPERVISED', 
                  libs: ['K-MEANS', 'PCA', 'ANOMALY_DET', 'T-SNE'],
                  color: 'text-zinc-400'
                },
                { 
                  type: 'REINFORCEMENT', 
                  libs: ['Q-LEARNING', 'DEEP_RL', 'SARSA'],
                  color: 'text-[#fe00fe]'
                },
                { 
                  type: 'DIM_REDUCTION', 
                  libs: ['LDA', 'ISOMAP', 'UMAP', 'SVD'],
                  color: 'text-blue-400'
                }
              ].map((category) => (
                <div key={category.type} className="border border-white/5 bg-black/40 p-4 relative group overflow-hidden">
                  <div className={`text-[8px] font-black mb-2 tracking-widest ${category.color}`}>// {category.type}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.libs.map(algo => (
                      <span key={algo} className="text-[9px] font-mono text-zinc-500 flex items-center gap-1">
                        <span className="text-[10px] font-bold text-zinc-600 bg-white/5 px-1">{algo}</span>
                      </span>
                    ))}
                  </div>
                  {/* Subtle terminal-like corner */}
                  <div className="absolute top-0 right-0 w-1 h-1 bg-white/10" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 h-48 bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
             <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-20" alt="Tech" />
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
             <div className="relative text-[#c7f300]/40 font-mono text-[80px] font-black pointer-events-none opacity-20">CORE_V1</div>
          </div>
      </div>

      {/* Analysis & Viz - Most Important */}
      <div className="col-span-12 lg:col-span-5 glass-panel p-5 sm:p-8 border-t-2 border-[#fe00fe] shadow-[0_0_20px_rgba(254,0,254,0.15)]">
        <div className="flex justify-between items-start mb-8">
          <div>
            <span className="text-[#fe00fe] text-[10px] font-bold block mb-1 uppercase tracking-widest">DOMAIN_02</span>
            <h2 className="text-3xl font-bold uppercase tracking-tight">ANALYSIS & VIZ</h2>
          </div>
          <Zap size={20} className="text-[#fe00fe] shadow-[0_0_15px_#fe00fe]" />
        </div>
        <div className="space-y-6">
          {[
            { l: 'POWER_BI_ARCH', p: 95 },
            { l: 'PANDAS_ECOSYSTEM', p: 98 },
            { l: 'MATPLOTLIB/SEABORN', p: 92 },
            { l: 'GEN_AI_VIZ_ENGINE', p: 88 },
          ].map(s => (
            <div key={s.l}>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">{s.l}</span>
                <span className="text-[#fe00fe] text-xs font-bold">{s.p}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${s.p}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#fe00fe] shadow-[0_0_10px_#fe00fe]" 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex items-center gap-2 mb-4">
             <div className="h-[1px] w-4 bg-[#fe00fe]"></div>
             <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">ARCHITECTURE_&_PROCESSING</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              'ETL / ELT', 
              'DATA_MODELING', 
              'NUMPY_MATH', 
              'DASHBOARDS', 
              'WAREHOUSING',
              'DATA_CLEANING',
              'DECISION_MAKING',
              'INSIGHT_EXTRACTION',
              'BUSINESS_INTEL'
            ].map((item) => (
              <div key={item} className="border border-white/5 bg-white/2 p-2 flex flex-col hover:border-[#fe00fe]/50 transition-all group cursor-default">
                <span className="text-[9px] font-bold text-zinc-500 group-hover:text-[#fe00fe] transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
           <span className="text-[10px] text-zinc-500 font-mono">INSIGHT_FIDELITY</span>
           <span className="text-[#fe00fe] font-mono text-[10px]">ULTRA_HIGH</span>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-8 glass-panel p-6 md:p-8 border-l-4 border-l-[#c7f300]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <Code2 size={20} className="text-[#c7f300]" />
          <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-tight leading-tight">DATA_ENGINEERING // MEDALLION_ARCH</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8 uppercase">
          {[
            { l: 'BRONZE', v: 'SQL', bg: 'bg-zinc-900 border-zinc-800' },
            { l: 'SILVER', v: 'PANDAS', bg: 'bg-zinc-800 border-zinc-700' },
            { l: 'GOLD', v: 'DATABRICKS', bg: 'bg-[#c7f300]/20 border-[#c7f300]/40' },
            { l: 'CLOUD', v: 'GCP', bg: 'bg-[#c7f300] text-black border-transparent' },
          ].map(t => (
            <div key={t.l} className={`${t.bg} p-2 md:p-4 border flex flex-col items-center justify-center text-center`}>
              <span className="text-[8px] md:text-[10px] font-bold mb-1 md:mb-2 opacity-60 uppercase">{t.l}</span>
              <span className="font-bold text-[10px] md:text-sm">{t.v}</span>
            </div>
          ))}
        </div>
        <div className="bg-black/60 border border-white/5 p-4 font-mono text-xs text-zinc-500 overflow-hidden whitespace-nowrap">
           [INFO] INGESTING DATA FROM SOURCE_NODE_X9... <span className="text-[#c7f300]">COMPLETE</span><br/>
           [INFO] TRANSFORMING LAYER_02_SILVER... <span className="text-[#c7f300]">COMPLETE</span><br/>
           [INFO] SYNCING TO CLOUD_WAREHOUSE... <span className="text-[#c7f300]">SYNC_PENDING</span>
        </div>
      </div>

      {/* Automation */}
      <div className="col-span-12 lg:col-span-4 glass-panel p-8 border-l-4 border-l-[#fe00fe] bg-[#fe00fe]/5">
        <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">AUTOMATION</h2>
        <div className="space-y-3">
          {[
            { label: 'PYTHON_OS', meta: 'CORE' },
            { label: 'N8N_WORK', meta: 'INTG' },
            { label: 'C++_KERN', meta: 'HW' },
            { label: 'ARDUINO', meta: 'MCU' },
            { label: 'ESP32_IOT', meta: 'WIFI' },
          ].map(item => (
            <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-1">
              <span className="font-bold text-zinc-300 text-[10px] uppercase">{item.label}</span>
              <span className="text-[#fe00fe] text-[8px] font-bold uppercase tracking-widest">{item.meta}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-3 bg-black border border-[#fe00fe]/30 font-mono text-[9px] text-[#fe00fe]">
          EXEC: system.auto_pilot()<br/>
          STATUS: ACTIVE
        </div>
      </div>
    </div>
  </div>
  </section>
);

const Contact = () => (
  <section className="min-h-[calc(100vh-64px)] px-6 lg:px-12 py-12 lg:py-20 relative overflow-hidden flex flex-col justify-center">
    <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#c7f300] animate-pulse opacity-5 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#fe00fe] opacity-5 blur-[120px] pointer-events-none" />

    <div className="max-w-7xl mx-auto w-full z-10 flex flex-col">
      <header className="mb-10 lg:mb-16">
        <div className="text-[#c7f300] text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#c7f300] shadow-[0_0_8px_#c7f300]" />
          TRANSMISSION_PROTOCOL_ACTIVE
        </div>
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold uppercase leading-tight lg:leading-none tracking-tighter">INITIATE<br/>CONNECTION</h1>
      </header>

    <div className="grid grid-cols-12 gap-8 relative z-10">
      <div className="col-span-12 lg:col-span-7 glass-panel p-5 sm:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-2 uppercase tracking-tighter">
          <Network size={20} className="text-[#c7f300]" />
          DATA_TRANSMISSION
        </h2>
        <form className="space-y-6 md:space-y-8" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">// IDENTIFIER_NAME</label>
              <input 
                className="bg-zinc-900/50 border border-white/10 p-4 focus:border-[#c7f300] outline-none transition-all font-mono text-sm text-white" 
                placeholder="TYPE_HERE..." 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">// UPLINK_EMAIL</label>
              <input 
                className="bg-zinc-900/50 border border-white/10 p-4 focus:border-[#c7f300] outline-none transition-all font-mono text-sm text-white" 
                placeholder="USER@NODE.SYS" 
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 relative">
            <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">// TRANSMISSION_SUBJECT</label>
            <select className="bg-zinc-900 border border-white/10 p-4 focus:border-[#c7f300] outline-none transition-all font-mono text-sm appearance-none text-white w-full">
              <option>PROJECT_INQUIRY</option>
              <option>SYSTEM_COLLABORATION</option>
              <option>DATA_AUDIT</option>
            </select>
            <ChevronRight className="absolute right-4 bottom-4 rotate-90 text-zinc-500" size={16} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">// ENCRYPTED_MESSAGE</label>
            <textarea 
              rows={3}
              className="bg-zinc-900/50 border border-white/10 p-3 md:p-4 focus:border-[#c7f300] outline-none transition-all font-mono text-sm resize-none text-white" 
              placeholder="ENTER_DATA_STRING..." 
            />
          </div>
          <button className="w-full bg-[#c7f300] text-black font-bold py-4 sm:py-6 uppercase tracking-widest text-base sm:text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(199,243,0,0.3)]">
            <div className="text-[10px] tracking-[0.3em] font-black opacity-60 mb-1 leading-none">STATUS: SYSTEM_READY</div>
            TRANSMIT &gt;&gt;
          </button>
        </form>
      </div>

      <div className="col-span-12 lg:col-span-5 space-y-8">
        <div className="glass-panel p-5 sm:p-8 group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
            <MapPin size={60} md:size={80} className="text-[#c7f300]" />
          </div>
          <div className="flex justify-between mb-8 relative z-10">
            <div>
              <h3 className="text-[#c7f300] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4">NODE_LOCATION</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter uppercase">AMMAN</p>
              <p className="font-mono text-[10px] md:text-xs text-zinc-500">JORDAN // 31.94° N, 35.92° E</p>
            </div>
            <div className="px-2 md:px-3 py-1 bg-[#c7f300]/10 border border-[#c7f300]/20 h-fit flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#c7f300] animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black text-[#c7f300]">SYNC</span>
            </div>
          </div>
          <div className="h-32 sm:h-40 md:h-48 w-full bg-zinc-900/50 border border-white/5 relative overflow-hidden flex items-center justify-center">
             <div className="relative">
                <MapPin size={48} className="text-[#c7f300]/20" />
                <motion.div 
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#c7f300] rounded-full" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#c7f300] rounded-full shadow-[0_0_15px_#c7f300]" />
             </div>
             <div className="absolute bottom-2 left-2 flex gap-1">
                <div className="w-1 h-3 bg-[#c7f300]/20" />
                <div className="w-1 h-3 bg-[#c7f300]/40" />
                <div className="w-1 h-3 bg-[#c7f300]" />
             </div>
          </div>
        </div>

        <div className="glass-panel p-8">
          <h3 className="text-[#c7f300] text-[10px] font-black uppercase tracking-[0.2em] mb-6">SYSTEM_METADATA</h3>
          <div className="space-y-6">
            {[
              { label: 'RESPONSE_LATENCY', val: '< 24H_CYCLES' },
              { label: 'UPLINK_STATUS', val: 'OPERATIONAL', active: true },
              { label: 'ENCRYPTION', val: 'AES-256_ACTIVE' },
            ].map(m => (
              <div key={m.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">{m.label}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${m.active ? 'text-[#c7f300]' : 'text-white'}`}>{m.val}</span>
                  {m.active && <div className="w-1.5 h-1.5 bg-[#c7f300] animate-pulse shadow-[0_0_10px_#c7f300]" />}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-4">AVAILABILITY_INDEX // 70%</span>
            <div className="flex gap-1">
              {[1,1,1,1,1,1,1,0,0,0].map((v, i) => (
                <div key={i} className={`h-2 flex-grow ${v ? 'bg-[#c7f300] shadow-[0_0_5px_#c7f300]' : 'bg-white/5'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="mt-12 md:mt-16 pb-12">
      <h3 className="text-[#c7f300] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-8">NODE_NETWORK_LINKS</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { label: 'LINKEDIN_UPLINK', meta: '/professional_node', icon: Linkedin },
          { label: 'GITHUB_REPOSITORY', meta: '/source_control', icon: Github },
          { label: 'DIRECT_PROTOCOL', meta: '/email_relay', icon: Mail },
        ].map(link => (
          <a key={link.label} href="#" className="group relative glass-panel p-6 md:p-8 overflow-hidden border-l-4 border-l-zinc-800 hover:border-l-[#fe00fe] transition-all">
            <div className="absolute inset-0 bg-[#fe00fe]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10 flex items-center gap-4">
              <link.icon size={24} className="text-[#fe00fe]" />
              <div>
                <p className="text-[#fe00fe] text-xs font-bold uppercase tracking-widest leading-none mb-1">{link.label}</p>
                <p className="text-zinc-500 font-mono text-[10px] leading-none">{link.meta}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
   </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-6 md:py-8 px-4 md:px-12 bg-[#050505] border-t border-white/5 text-[7px] md:text-[10px] uppercase font-sans tracking-[0.2em] gap-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-4">
      <div className="text-zinc-500 text-center md:text-left">
        © 2024 HAMZA_COMMAND_CENTER // [NODE_01]
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
        <a href="#" className="hover:text-[#c7f300] transition-colors text-zinc-600">ENCRYPTION_POLICY</a>
        <a href="#" className="hover:text-[#c7f300] transition-colors text-zinc-600">LEGAL_DOCS</a>
        <div className="flex items-center gap-2 text-[#c7f300] font-bold">
          <Clock size={14} className="animate-spin duration-[10s]" />
          LATENCY: 12ms
        </div>
      </div>
    </div>
  </footer>
);

const Certifications = () => (
  <section className="px-6 sm:px-8 md:px-12 py-10 sm:py-16 min-h-[calc(100vh-64px)] flex flex-col justify-center">
    <div className="max-w-7xl mx-auto w-full flex flex-col">
      <SectionHeader title="Academic_Foundations" subtitle="COLLEGE" />
       <div className="glass-panel p-5 sm:p-8 mb-12 flex flex-col md:flex-row gap-6 md:gap-8 group hover:border-[#c7f300] transition-all">
         <div className="w-14 h-14 md:w-20 md:h-20 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Bot className="text-[#c7f300]" size={18} />
         </div>
         <div className="flex-grow">
            <div className="mb-6 group-hover:pl-2 transition-all duration-300">
              <span className="text-[8px] md:text-[9px] text-[#c7f300] font-bold uppercase tracking-widest block mb-1 md:mb-2 opacity-70">// Al-Balqa Applied University</span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-white leading-[1.1]">
                Associate Degree in <span className="text-[#c7f300]">Artificial Intelligence</span> 
                <br className="hidden md:block" /> & Robotics Engineering
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-y-4 gap-x-8 uppercase">
               {[
                 'CORE AI ALGORITHMS', 'ROBOTIC KINEMATICS', 'EMBEDDED SYSTEMS',
                 'DIGITAL LOGIC DESIGN', 'CONTROL SYSTEMS'
               ].map(skill => (
                 <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#c7f300] shadow-[0_0_5px_#c7f300]" />
                    <span className="text-[11px] font-bold text-zinc-300">{skill}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <SectionHeader title="Credentials_Secure" subtitle="CERTIFICATIONS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { l: 'MICROSOFT_CERTIFIED', t: 'PL-300: POWER BI', i: ShieldCheck },
          { l: 'GCP_ARCHITECT', t: 'CLOUD_WAREHOUSING', i: Database },
          { l: 'ENGINEERING_CORE', t: 'ADV_SYSTEMS_ROOT', i: Terminal },
          { l: 'SYSTEM_SPECIALIST', t: 'MACHINE_LEARNING', i: CpuIcon },
          { l: 'CORE_ARCHITECTURE', t: 'DEEP_LEARNING_SPEC', i: Network },
          { l: 'LLM_OPTIMIZATION', t: 'PROMPT_ENGINEERING', i: Zap },
        ].map((cert) => (
          <div key={cert.t} className="glass-panel p-4 md:p-6 flex items-center gap-4 md:gap-6 group hover:border-[#c7f300] transition-all cursor-help">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#c7f300]/10 transition-colors shrink-0">
              <cert.i className="text-[#c7f300]" size={18} />
            </div>
            <div>
              <span className="text-[9px] text-[#c7f300] font-bold uppercase tracking-widest block mb-1 opacity-70">// {cert.l}</span>
              <h4 className="font-bold text-white uppercase text-[10px] md:text-xs group-hover:text-[#c7f300] transition-colors">{cert.t}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const [activeTab, setTab] = useState('HOME');

  return (
    <div className="h-screen bg-[#050505] text-white selection:bg-[#c7f300] selection:text-black overflow-hidden flex flex-col">
      <Nav activeTab={activeTab} setTab={setTab} />
      
      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar activeTab={activeTab} setTab={setTab} />
        
        <main className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden relative">
          <div className="flex-grow flex flex-col pt-2 md:pt-8 lg:pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-grow flex flex-col min-h-0"
              >
                {activeTab === 'HOME' && <Home setTab={setTab} />}
                {activeTab === 'PROJECTS' && <Projects />}
                {activeTab === 'TECH_STACK' && <TechStack />}
                {activeTab === 'CONTACT' && <Contact />}
                {activeTab === 'CERTIFICATIONS' && <Certifications />}
              </motion.div>
            </AnimatePresence>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
