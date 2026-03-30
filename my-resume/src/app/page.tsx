'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Globe,
  Menu,
  X,
  ExternalLink,
  Download,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const setSectionRef = (key: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[key] = el;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active tab based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTab = (tabId: string) => {
    const element = sectionRefs.current[tabId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent-primary/30">
      {/* Navigation Bar - Premium Glass */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass py-4 shadow-sm'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <div
              className="text-xl font-display font-black text-white cursor-pointer tracking-tighter hover:opacity-70 transition-opacity"
              onClick={() => scrollToTab('home')}
            >
              HASSAN <span className="text-accent-primary">RAZA.</span>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              {[
                { id: 'home', label: 'INDEX' },
                { id: 'about', label: 'BIO' },
                { id: 'experience', label: 'HISTORY' },
                { id: 'projects', label: 'WORK' },
                { id: 'contact', label: 'INQUIRE' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToTab(tab.id)}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${activeTab === tab.id
                    ? 'text-accent-primary'
                    : 'text-white/40 hover:text-white'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass absolute top-full left-0 right-0 animate-in fade-in slide-in-from-top-4">
            <div className="p-8 space-y-6">
              {['home', 'about', 'experience', 'projects', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToTab(id)}
                  className={`block w-full text-left text-[10px] font-black uppercase tracking-[0.3em] ${activeTab === id ? 'text-accent-primary' : 'text-white/40'
                    }`}
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Monochromatic Studio */}
      <section
        id="home"
        ref={setSectionRef('home')}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="w-12 h-[1px] bg-accent-primary" />
              <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase">FULL STACK ARCHITECT</span>
            </div>

            <h1 className="text-[15vw] md:text-[12vw] font-display font-black tracking-tighter leading-[0.8] mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              <span className="block text-white">HASSAN</span>
              <span className="block text-white/10 hover:text-accent-primary transition-colors duration-700 cursor-default uppercase">RAZA.</span>
            </h1>

            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-end w-full">
              <div className="order-2 md:order-1 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                <p className="text-lg md:text-2xl text-white/50 max-w-md leading-relaxed mb-12 font-light">
                  Crafting high-performance digital systems for global enterprises. Based in Pakistan, working worldwide.
                </p>
                <div className="flex flex-wrap gap-12">
                  <a
                    href="mailto:itzhassanraza276@gmail.com"
                    className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-accent-primary transition-colors"
                  >
                    START PROJECT
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                  <button
                    onClick={generatePDF}
                    className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
                  >
                    GET RESUME
                    <Download size={14} className="group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-end animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                <div className="relative w-64 h-80 md:w-96 md:h-[30rem] grayscale hover:grayscale-0 transition-all duration-1000">
                  <div className="absolute inset-x-0 inset-y-0 border border-white/10 -translate-x-4 -translate-y-4 z-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                  <Image
                    src="/profile.jpg"
                    alt="Hassan Raza"
                    fill
                    className="object-cover z-10"
                    priority
                  />
                  <div className="absolute bottom-0 right-0 p-8 z-20">
                    <div className="bg-accent-primary text-white p-4 text-[10px] font-black uppercase tracking-widest rotate-90 origin-bottom-right">AVAILABLE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={setSectionRef('about')}
        className="py-40 relative border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
            <div className="flex flex-col items-start pt-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase mb-12">01. BIOGRAPHY</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter">
                A COMMITMENT TO <span className="text-white/20">SYSTEMS.</span>
              </h2>
            </div>

            <div className="space-y-12">
              <p className="text-2xl md:text-4xl font-light text-white leading-relaxed tracking-tight">
                Results-driven Full Stack Developer with <span className="text-accent-primary font-medium">4+ years of clinical experience</span> in designing, developing, and deploying high-stakes web applications.
              </p>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                Expert in modern JavaScript architecture (React, Next.js, Node.js) and the full MERN stack. I specialize in bridging the gap between sophisticated aesthetics and high-performance engineering.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-white/10">
                {[
                  { label: 'TENURE', value: '4+ YRS' },
                  { label: 'SECTOR', value: 'E-COMM' },
                  { label: 'FOCUS', value: 'MERN' },
                  { label: 'BASE', value: 'PK/WW' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-[10px] text-white/30 font-black tracking-widest uppercase">{item.label}</span>
                    <span className="text-white font-bold text-sm tracking-widest">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-40 relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
          <div className="flex flex-col items-start mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase mb-12">02. CAPABILITIES</span>
            <div className="grid md:grid-cols-2 gap-12 w-full">
              <h2 className="text-4xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.8]">
                CORE <br /> <span className="text-white/10">POWER.</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl font-light self-end">
                A strictly curated technical arsenal optimized for reliability, safety, and performance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {[
              {
                title: 'FRONTEND ARCH',
                skills: ['React.js', 'Next.js 15', 'TypeScript', 'Tailwind 4', 'Redux', 'GSAP'],
              },
              {
                title: 'BACKEND SYSTEMS',
                skills: ['Node.js', 'Nest.js', 'PHP', 'Laravel', 'Express'],
              },
              {
                title: 'DATA INFRA',
                skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Redis'],
              },
            ].map((category, index) => (
              <div key={index} className="p-12 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
                <h3 className="text-[10px] font-black text-white/40 mb-12 uppercase tracking-[0.3em] group-hover:text-accent-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-xs font-bold text-white tracking-widest hover:translate-x-1 transition-transform cursor-pointer">
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={setSectionRef('experience')}
        className="py-40 relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-start mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase mb-12">03. HISTORY</span>
            <h2 className="text-4xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.8]">
              PROFESSIONAL <br /> <span className="text-white/10">CHRONICLE.</span>
            </h2>
          </div>

          <div className="space-y-0 border-t border-white/10">
            {[
              {
                company: 'Soft Solutions',
                role: 'Senior Full Stack Developer',
                period: '2022 — PRESENT',
                location: 'MULTAN, PK',
                description: 'Engineering large-scale enterprise systems with a focus on React and Node.js. Implementing microservices and optimising data pipelines.',
              },
              {
                company: 'Upwork (Freelance)',
                role: 'Senior Web Architect',
                period: '2021 — PRESENT',
                location: 'REMOTE / GLOBAL',
                description: 'Delivering high-stakes digital solutions for international clients. Specialising in custom CMS and complex API integrations.',
              },
              {
                company: 'Fiverr (Freelance)',
                role: 'Full Stack Engineer',
                period: '2019 — 2021',
                location: 'REMOTE / GLOBAL',
                description: 'Developed 50+ diverse web projects, focusing on performance and user experience across various industries.',
              },
            ].map((exp, i) => (
              <div key={i} className="group grid md:grid-cols-[1fr_2fr_1fr] gap-12 py-16 border-b border-white/10 transition-colors hover:bg-white/[0.01]">
                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] pt-2">{exp.period}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-accent-primary transition-colors">{exp.role.toUpperCase()}</h3>
                  <div className="text-sm font-bold text-white/40 mb-6 tracking-widest">{exp.company.toUpperCase()}</div>
                  <p className="text-white/50 leading-relaxed font-light max-w-xl">{exp.description}</p>
                </div>
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] md:text-right pt-2">{exp.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={setSectionRef('projects')}
        className="py-40 relative bg-white/[0.01] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-start mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase mb-12">04. WORKS</span>
            <div className="grid md:grid-cols-2 gap-12 w-full">
              <h2 className="text-4xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.8]">
                SELECTED <br /> <span className="text-white/10">IMPACT.</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl font-light self-end md:text-right">
                Engineering excellence through code and strategy.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-l border-t border-white/10">
            {[
              {
                title: 'Drip & Draft',
                description: 'A custom high-performance e-commerce engine for luxury apparel.',
                tech: ['NEXT.JS', 'PRISMA', 'STRIPE'],
                link: '#'
              },
              {
                title: 'Estate Flow',
                description: 'Real-estate management system for enterprise agencies.',
                tech: ['NEST.JS', 'POSTGRES', 'DOCKER'],
                link: '#'
              },
              {
                title: 'Sonic Lab',
                description: 'High-availability audio processing API with edge computing.',
                tech: ['NODE.JS', 'REDIS', 'AWS'],
                link: '#'
              },
              {
                title: 'Oryx Cloud',
                description: 'B2B infrastructure monitoring platform with real-time analytics.',
                tech: ['REACT', 'MONGODB', 'SOCKET.IO'],
                link: '#'
              },
            ].map((project, i) => (
              <a key={i} href={project.link} className="group p-16 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors flex flex-col justify-between aspect-square">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-black text-accent-primary tracking-[0.4em]">PROJECT {i + 1}</span>
                    <ExternalLink size={20} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tighter leading-none group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/40 font-light text-lg leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-6 pt-12 border-t border-white/10">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-black text-white/20 tracking-widest">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Personal */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase mb-12 block">05. EDUCATION</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter mb-16">
                SCHOLARLY <span className="text-white/20">PURSUIT.</span>
              </h2>
              <div className="p-12 border border-white/10 hover:border-accent-primary transition-colors group">
                <div className="text-accent-primary font-black text-[10px] mb-4 uppercase tracking-[0.2em]">2021 — 2025</div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">BS in Computer Science</h3>
                <p className="text-white/40 font-bold text-sm mb-8 uppercase tracking-widest">MNS University of Engineering & Tech</p>
                <p className="text-white/50 font-light leading-relaxed">
                  Rigorous focus on software architecture and distributed systems.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase mb-12 block">06. PERSONAL</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter mb-16">
                BEYOND THE <span className="text-white/20">STACK.</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {['Tech Research', 'Hardware Craft', 'Cinematics', 'Sonic Arts'].map((item) => (
                  <div key={item} className="p-8 border border-white/5 hover:border-white/20 transition-colors text-center text-white/40 text-[10px] font-black uppercase tracking-widest">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={setSectionRef('contact')}
        className="py-40 relative border-t border-white/10 bg-white/[0.01]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-32">
            <span className="text-[10px] font-black tracking-[0.4em] text-accent-primary uppercase mb-12">07. INQUIRE</span>
            <h2 className="text-5xl md:text-9xl font-display font-black text-white mb-12 tracking-tighter uppercase leading-[0.8]">
              START A <br /> <span className="text-white/10">DIALOGUE.</span>
            </h2>
            <a href="mailto:itzhassanraza276@gmail.com" className="text-xl md:text-2xl font-light text-white hover:text-accent-primary transition-colors border-b border-white/20 pb-2">
              itzhassanraza276@gmail.com
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-l border-white/10 max-w-5xl mx-auto">
            {[
              { icon: Linkedin, label: 'LINKEDIN', href: 'https://linkedin.com/in/hassan-raza-42280221b' },
              { icon: Github, label: 'PRIMARY HUB', href: 'https://github.com/hassan-raza-111' },
              { icon: Github, label: 'SECONDARY HUB', href: 'https://github.com/hassan-raza123' },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" className="p-12 border-r border-b border-white/10 hover:bg-white/5 flex items-center justify-center gap-4 transition-colors group">
                <social.icon size={20} className="text-white/20 group-hover:text-accent-primary transition-colors" />
                <span className="text-[10px] font-black text-white/40 tracking-[0.2em] group-hover:text-white transition-colors">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} HASSAN RAZA. BUILT WITH INTENTION.
          </div>
          <button onClick={() => scrollToTab('home')} className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em] font-black">
            BACK TO INDEX
          </button>
        </div>
      </footer>

      {/* Modern Print Styles */}
      <style jsx global>{`
        @media print {
          nav, footer, .mesh-bg, .animate-bounce { display: none !important; }
          body { background: white !important; color: black !important; font-family: 'Inter', sans-serif !important; }
          .border, .border-l, .border-t, .border-r, .border-b, .border-y { border-color: #eee !important; }
          .text-white, h1, h2, h3 { color: black !important; }
          .text-white\/10, .text-white\/20, .text-white\/30, .text-white\/40, .text-white\/50 { color: #666 !important; }
          .text-accent-primary { color: #000 !important; text-decoration: underline !important; }
          section { page-break-inside: avoid; py-10 !important; }
        }
      `}</style>
    </div>
  );
}
