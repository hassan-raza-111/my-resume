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
          ? 'glass py-4 shadow-2xl'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <div
              className="text-2xl font-display font-bold text-white cursor-pointer group flex items-center gap-2"
              onClick={() => scrollToTab('home')}
            >
              <span className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">HR</span>
              <span className="hidden sm:block tracking-tight">Hassan Raza</span>
            </div>

            <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/25'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
            <div className="p-6 space-y-4">
              {['home', 'about', 'experience', 'projects', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToTab(id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-colors ${activeTab === id ? 'bg-accent-primary text-white' : 'text-gray-400'
                    }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Immersive Mesh */}
      <section
        id="home"
        ref={setSectionRef('home')}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="mesh-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8 animate-bounce-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            <span className="text-xs font-medium text-accent-primary tracking-wider uppercase">Open for new opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-8">
            <span className="block text-white opacity-90">Building the</span>
            <span className="text-gradient">Future Web</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
            Senior Full Stack Developer specializing in crafting high-performance,
            scalable web applications with <span className="text-white font-medium">Next.js, Node.js, and Modern UI.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:itzhassanraza276@gmail.com"
              className="group relative px-8 py-4 bg-white text-background rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/10"
            >
              <span className="flex items-center gap-2">
                Work With Me
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <button
              onClick={generatePDF}
              className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <span className="flex items-center gap-2">
                <Download size={18} />
                Download CV
              </span>
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToTab('about')}>
            <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={setSectionRef('about')}
        className="py-32 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 relative">
                <span className="text-white">A Bit</span><br />
                <span className="text-gradient">About Me</span>
              </h2>
              <div className="w-20 h-1 bg-accent-primary rounded-full mb-8" />
            </div>

            <div className="space-y-8">
              <p className="text-xl font-light text-gray-300 leading-relaxed font-sans">
                Results-driven Full Stack Developer with <span className="text-white font-medium">4+ years of professional experience</span> in designing, developing, and deploying scalable web applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                {[
                  { label: 'Experience', value: '4+ Years', icon: Briefcase },
                  { label: 'Projects', value: '20+ Delivered', icon: Code },
                  { label: 'Specialty', value: 'MERN Stack', icon: Award },
                  { label: 'Location', value: 'Remote / On-site', icon: MapPin },
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-accent-primary/30 transition-colors">
                    <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">Technical Mastery</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Weapon of choice for building modern, scalable applications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend',
                icon: Code,
                color: 'from-blue-500 to-cyan-400',
                skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React Query'],
              },
              {
                title: 'Backend',
                icon: Briefcase,
                color: 'from-indigo-500 to-violet-500',
                skills: ['Node.js', 'Nest.js', 'Laravel/PHP', 'Express.js', 'REST APIs', 'PostgreSQL'],
              },
              {
                title: 'Infrastructure',
                icon: Award,
                color: 'from-fuchsia-500 to-pink-500',
                skills: ['AWS', 'MongoDB', 'MySQL', 'Git/GitHub', 'Docker', 'Vercel'],
              },
            ].map((category, index) => (
              <div key={index} className="glass-card p-10 rounded-3xl h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-wider">{category.title}</h3>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-accent-primary/50 hover:bg-white/10 transition-all">
                      {skill}
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
        className="py-32 relative bg-background"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Career <span className="text-gradient">Journey</span></h2>
              <p className="text-gray-400 font-sans max-w-xl">Professional experience and key contributions in fast-paced tech environments.</p>
            </div>
            <div className="text-accent-primary font-display font-bold text-8xl opacity-10 hidden lg:block select-none">EXPERIENCE</div>
          </div>

          <div className="space-y-12">
            {[
              {
                title: 'Next.js Developer',
                company: 'KK IT Solutions Pvt LTD',
                period: '2023 - Present',
                tags: ['Team Lead', 'Architecture'],
                description: 'Spearheaded migration of legacy systems to Next.js, improving performance by 60% and leading full-cycle development of automotive platforms.',
              },
              {
                title: 'Senior Laravel Developer',
                company: 'KK IT Solutions Pvt LTD',
                period: '2022 - 2023',
                tags: ['Logistics', 'Real-time'],
                description: 'Architected OrderTik platform with GPS driver tracking and optimized fleet management dashboards.',
              },
              {
                title: 'Software Developer',
                company: 'KK IT Solutions Pvt LTD',
                period: '2021 - Present',
                tags: ['Full Stack', 'Mobile'],
                description: 'Delivered cross-platform solutions using MERN stack and React Native for diverse enterprise clients.',
              },
            ].map((exp, index) => (
              <div key={index} className="glass-card group p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row gap-10 items-start">
                <div className="md:w-1/3">
                  <div className="text-accent-primary font-bold tracking-widest text-sm mb-4 bg-accent-primary/5 inline-block px-4 py-1 rounded-full">{exp.period}</div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-400 font-medium mb-6">{exp.company}</p>
                  <div className="flex gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter text-gray-500 border border-white/5 px-3 py-1 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 border-l border-white/5 md:pl-10">
                  <p className="text-gray-300 text-lg leading-relaxed font-sans mb-8">{exp.description}</p>
                  <div className="w-12 h-1 bg-white/10 rounded-full group-hover:w-24 group-hover:bg-accent-primary transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={setSectionRef('projects')}
        className="py-32 relative overflow-hidden bg-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Featured <span className="text-gradient">Creations</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-sans">A selection of high-impact systems I've built from the ground up.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'University Admission Portal',
                desc: 'Comprehensive system for MNSUET processing thousands of live admissions for the 2025 batch.',
                tech: ['Next.js', 'PostgreSQL'],
                demo: 'https://admissions.mnsuet.edu.pk'
              },
              {
                title: 'JanJapan Cars System',
                desc: 'Automotive marketplace with real-time bidding and performance-optimized inventory management.',
                tech: ['Next.js', 'Nest.js', 'MongoDB'],
                demo: 'https://janjapan.com'
              },
              {
                title: 'OrderTik Management',
                desc: 'Real-time logistics platform for restaurant fleet management and driver tracking.',
                tech: ['Laravel', 'Google Maps API'],
                demo: 'https://jalal.ordertik.com'
              },
              {
                title: 'AI Chatbot System',
                desc: 'Intelligent support system with NLP integration for automated customer engagement.',
                tech: ['Next.js', 'AI APIs'],
              }
            ].map((project, index) => (
              <div key={index} className="glass-card group p-10 rounded-[2.5rem] flex flex-col border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-accent-primary/20 transition-colors">
                  <ExternalLink size={60} />
                </div>
                <div className="flex gap-2 mb-6">
                  {project.tech.map(t => <span key={t} className="text-[10px] font-bold text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-lg uppercase tracking-widest">{t}</span>)}
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 font-sans leading-relaxed mb-10">{project.desc}</p>
                <div className="mt-auto flex items-center gap-6">
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="text-white font-bold flex items-center gap-2 group/link border-b-2 border-white/10 pb-1 hover:border-accent-primary transition-all">
                      Live View
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-32 relative bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
                <GraduationCap className="text-accent-primary" size={32} />
                Education
              </h2>
              <div className="glass-card p-10 rounded-[2rem] border-l-4 border-l-accent-primary">
                <div className="text-accent-primary font-bold text-sm mb-2 uppercase tracking-widest">2021 — 2025</div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">BS in Computer Science</h3>
                <p className="text-gray-400 mb-6">MNS University of Engineering & Technology</p>
                <div className="h-px bg-white/5 mb-6" />
                <p className="text-gray-300 font-sans leading-relaxed">
                  Focusing on software engineering, distributed systems, and modern web architectures.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
                <Award className="text-accent-secondary" size={32} />
                Certifications
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
                  { title: 'React Developer Cert', issuer: 'Meta' },
                  { title: 'Node.js Dev Cert', issuer: 'IBM' },
                ].map((cert, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-colors">
                    <div>
                      <h4 className="text-white font-bold">{cert.title}</h4>
                      <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <ExternalLink size={16} className="text-gray-600 group-hover:text-accent-secondary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal & Elegant */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl font-display font-bold text-gradient mb-20 text-center">Wall of Love</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Hassan's expertise in Next.js transformed our admission workflow completely.",
                author: "Dr. Ahmed Khan",
                role: "Director, MNSUET"
              },
              {
                quote: "The best full-stack partner we've had. Fast, reliable, and technically solid.",
                author: "Muhammad Ali",
                role: "CEO, KK IT Solutions"
              },
              {
                quote: "Exceptional problem solver. His architecture for OrderTik was flawless.",
                author: "Sara Ahmed",
                role: "Project Manager"
              }
            ].map((t, i) => (
              <div key={i} className="glass-card p-10 rounded-[2rem] text-left">
                <div className="text-accent-primary text-4xl mb-6 font-serif opacity-30">“</div>
                <p className="text-gray-300 font-sans italic mb-8 leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-xs font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.author}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={setSectionRef('contact')}
        className="py-32 relative overflow-hidden bg-background"
      >
        <div className="mesh-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto font-sans">Let's build something extraordinary together. I'm currently available for interesting new projects.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Mail, label: 'Email', value: 'itzhassanraza276@gmail.com', href: 'mailto:itzhassanraza276@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+92 309 6185276', href: 'tel:+923096185276' },
              { icon: MapPin, label: 'Location', value: 'Multan, Pakistan', href: '#' },
            ].map((item, i) => (
              <a key={i} href={item.href} className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{item.label}</div>
                <div className="text-white font-medium text-lg">{item.value}</div>
              </a>
            ))}
          </div>

          {/* Socials & Additional Info */}
          <div className="mt-20 flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/hassanraza276" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-accent-primary hover:border-accent-primary transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/hassanraza276" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-background transition-all">
                <Github size={24} />
              </a>
            </div>

            <div className="h-px w-20 bg-white/10 hidden md:block" />

            <div className="flex gap-8 text-sm font-bold tracking-widest uppercase text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-accent-primary" />
                English (Fluent)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-accent-secondary" />
                Urdu (Native)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm font-sans">
            © {new Date().getFullYear()} Hassan Raza. Built with <span className="text-white font-medium">Next.js 15 & Tailwind 4</span>
          </div>
          <div className="flex gap-8">
            <button onClick={() => scrollToTab('home')} className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Back to Top</button>
          </div>
        </div>
      </footer>

      {/* Modern Print Styles */}
      <style jsx global>{`
        @media print {
          nav, footer, .mesh-bg, .animate-ping, .animate-bounce { display: none !important; }
          body { background: white !important; color: black !important; }
          .glass-card { background: white !important; border: 1px solid #ddd !important; box-shadow: none !important; color: black !important; }
          .text-gradient { background: none !important; -webkit-text-fill-color: black !important; color: black !important; font-weight: bold; }
          .text-gray-400, .text-gray-500 { color: #666 !important; }
          .glass { background: white !important; border: 1px solid #ddd !important; }
        }
      `}</style>
    </div>
  );
}
