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
          <div className="mb-12 relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/WhatsApp Image 2026-01-17 at 01.33.33.jpeg"
                alt="Hassan Raza"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-12 md:h-12 bg-background border-2 border-white/10 rounded-2xl flex items-center justify-center text-accent-primary shadow-xl">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent-primary animate-pulse" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8 animate-bounce-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            <span className="text-xs font-medium text-accent-primary tracking-wider uppercase">Available for freelance & full-time</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-8">
            <span className="block text-white opacity-90">Hassan</span>
            <span className="text-gradient">Raza</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
            Senior Full Stack Developer | <span className="text-white font-medium">MERN Stack Specialist</span><br />
            Crafting high-performance, scalable web applications for global clients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:itzhassanraza276@gmail.com"
              className="group relative px-8 py-4 bg-white text-background rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/10"
            >
              <span className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <button
              onClick={generatePDF}
              className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <span className="flex items-center gap-2">
                <Download size={18} />
                Download PDF
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
          <div className="grid lg:grid-cols-1 gap-12 text-center">
            <div className="relative group mx-auto max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 relative">
                <span className="text-gradient uppercase tracking-tighter">Professional Summary</span>
              </h2>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-xl font-light text-gray-300 leading-relaxed font-sans text-center">
                Results-driven Full Stack Developer with <span className="text-white font-medium">4+ years of professional experience</span> in designing, developing, and deploying scalable web applications. Expert in modern JavaScript frameworks (<span className="text-white">React.js, Next.js, Node.js, Nest.js</span>) and full MERN stack development. Proven track record of successfully delivering complex enterprise-level projects including ERP systems, admission portals, e-commerce platforms, and real-time management systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-12">
                {[
                  { label: 'Experience', value: '4+ Years', icon: Briefcase },
                  { label: 'Project Success', value: 'Enterprise Level', icon: Award },
                  { label: 'Specialty', value: 'MERN Stack', icon: Code },
                  { label: 'Location', value: 'Remote / On-site', icon: MapPin },
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-accent-primary/30 transition-all hover:scale-105">
                    <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                      <div className="text-white font-medium text-sm">{item.value}</div>
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
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6 uppercase tracking-tighter">Technical Arsenal</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Precise expertise across the full development lifecycle.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Redux.js', 'React Query', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'AJAX'],
              },
              {
                title: 'Backend Development',
                skills: ['Node.js', 'Nest.js', 'PHP', 'Laravel', 'REST APIs', 'Express.js'],
              },
              {
                title: 'Databases',
                skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
              },
              {
                title: 'Tools & Technologies',
                skills: ['AWS', 'Git/GitHub', 'Adobe Photoshop', 'React Native'],
              },
              {
                title: 'Specializations',
                skills: ['MERN Stack', 'Full Stack Development', 'Software Quality Assurance'],
              },
              {
                title: 'Programming Languages',
                skills: ['JavaScript', 'TypeScript', 'PHP', 'C', 'C++'],
              },
            ].map((category, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl flex flex-col border border-white/5 hover:border-accent-primary/20 transition-all">
                <h3 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs hover:text-white hover:border-accent-primary/50 hover:bg-white/10 transition-all">
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
              <p className="text-gray-400 font-sans max-w-xl text-lg">Detailed history of professional growth and technical leadership.</p>
            </div>
            <div className="text-accent-primary font-display font-bold text-8xl opacity-10 hidden lg:block select-none">JOURNEY</div>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Next.js Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Punjab, Pakistan (On-site)',
                period: 'October 2023 - Present',
                bullets: [
                  'Spearheaded migration of legacy PHP systems to modern Next.js architecture, improving performance by 60%',
                  'Led development of JanJapan Cars System using Next.js and Nest.js, implementing inventory management and live auction features',
                  'Developed AI-powered chatbot system integrated with Next.js for client engagement and automated customer support',
                  'Architected and deployed scalable REST APIs with optimized database queries for high-traffic applications',
                  'Implemented real-time features using WebSockets for live auction bidding and inventory updates',
                ],
              },
              {
                title: 'Senior Laravel Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Punjab, Pakistan (On-site)',
                period: 'April 2022 - September 2023',
                bullets: [
                  'Developed OrderTik platform (jalal.ordertik.com) with comprehensive order management and driver tracking system',
                  'Built driver management system with real-time location tracking and route optimization',
                  'Created responsive admin dashboards for fleet management and analytics reporting',
                  'Implemented secure authentication and role-based access control systems',
                  'Optimized database queries resulting in 40% faster page load times',
                ],
              },
              {
                title: 'Software Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Punjab, Pakistan (On-site)',
                period: 'August 2021 - Present',
                bullets: [
                  'Full-stack development using MERN stack for diverse client projects',
                  'Developed React Native mobile application with cross-platform compatibility',
                  'Collaborated with cross-functional teams to deliver projects within tight deadlines',
                  'Conducted code reviews and mentored junior developers on best practices',
                ],
              },
              {
                title: 'PHP Developer (Part-time)',
                company: 'Pro Tech Giant (Pvt.) Ltd.',
                location: 'Multan, Punjab, Pakistan (On-site)',
                period: 'March 2021 - July 2021',
                bullets: [
                  'Developed custom PHP solutions and dynamic web applications',
                  'Integrated MySQL databases with secure backend systems',
                  'Implemented RESTful APIs for third-party integrations',
                ],
              },
              {
                title: 'Graphic Designer',
                company: 'Pro Tech Giant (Pvt.) Ltd.',
                location: 'Multan, Punjab, Pakistan (On-site)',
                period: 'January 2021 - February 2021',
                bullets: [
                  'Created visual designs and marketing materials using Adobe Photoshop',
                  'Designed UI/UX mockups for web applications',
                ],
              },
            ].map((exp, index) => (
              <div key={index} className="glass-card group p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row gap-10 items-start hover:border-accent-primary/20 transition-all">
                <div className="md:w-1/3">
                  <div className="text-accent-primary font-bold tracking-widest text-xs mb-4 bg-accent-primary/5 inline-block px-4 py-1.5 rounded-full uppercase">{exp.period}</div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-400 font-medium text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs font-sans italic">{exp.location}</p>
                </div>
                <div className="md:w-2/3 border-l border-white/5 md:pl-10 space-y-4">
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-300 text-base leading-relaxed font-sans flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">Key <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-sans text-lg">A selection of high-impact systems built for enterprise and academic institutions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'University Online Admission Portal (2025)',
                desc: 'Comprehensive system for MNSUET processing live admissions for 2025 batch.',
                features: [
                  'Multi-application support with user and admin panels',
                  'Integrated online fee payment with unique challan generation',
                  'Receipt upload and verification system',
                  'Role-based dashboards for administrators and applicants'
                ],
                tech: ['Next.js', 'Node.js', 'PostgreSQL'],
                demo: 'https://admissions.mnsuet.edu.pk'
              },
              {
                title: 'University Class Management System',
                desc: 'Enterprise-level ERP system for academic institution management with OBE compliance.',
                features: [
                  'Implemented OBE (Outcome-Based Education) framework',
                  'Real-time attendance tracking and class scheduling',
                  'Multi-role architecture: Super Admin, Teacher, Student',
                  'Comprehensive reporting and analytics modules'
                ],
                tech: ['Next.js', 'Nest.js', 'PostgreSQL'],
              },
              {
                title: 'JanJapan Cars System',
                desc: 'Complete system migration for automotive marketplace.',
                features: [
                  'Full-featured inventory management system',
                  'Real-time auction system with live bidding',
                  'Advanced search and filtering capabilities',
                  '3x faster load times after migration'
                ],
                tech: ['Next.js', 'Nest.js', 'MongoDB'],
                demo: 'https://janjapan.com'
              },
              {
                title: 'Venbid - Service Provider Platform',
                desc: 'UK-based marketplace for home services.',
                features: [
                  'Three-tier system: Customer, Vendor, and Admin portals',
                  'Multiple service categories support',
                  'Real-time booking and scheduling system',
                  'Rating and review management'
                ],
                tech: ['React.js', 'Node.js', 'MongoDB'],
              },
              {
                title: 'Asan Umrah Committee Management',
                desc: 'Digital platform for committee operations.',
                features: [
                  'Member registration and payment tracking',
                  'Automated installment calculations',
                  'Financial reporting and transparency features'
                ],
                tech: ['Laravel', 'MySQL'],
              },
              {
                title: 'OrderTik - Restaurant Management',
                desc: 'Complete order management with driver tracking.',
                features: [
                  'Real-time order processing and kitchen management',
                  'Driver assignment and live GPS tracking',
                  'Admin dashboard with analytics and reporting'
                ],
                tech: ['Laravel', 'MySQL', 'Google Maps API'],
                demo: 'https://jalal.ordertik.com'
              },
              {
                title: 'AI Chatbot System',
                desc: 'Intelligent chatbot for automated customer engagement.',
                features: [
                  'Natural language processing integration',
                  'Contextual conversation management',
                  'Admin panel for training and analytics'
                ],
                tech: ['Next.js', 'Node.js', 'AI APIs'],
              }
            ].map((project, index) => (
              <div key={index} className="glass-card group p-10 rounded-[2.5rem] flex flex-col border border-white/5 relative overflow-hidden hover:border-accent-primary/20 transition-all">
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-accent-primary/20 transition-colors">
                  <ExternalLink size={60} />
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => <span key={t} className="text-[10px] font-bold text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-lg uppercase tracking-widest">{t}</span>)}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 font-sans leading-relaxed mb-6 text-sm">{project.desc}</p>

                <ul className="mb-8 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-xs text-gray-500 font-sans flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-white/5">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" className="text-white font-bold text-sm flex items-center gap-2 group/link hover:text-accent-primary transition-all">
                      Live Project
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Enterprise Internal System</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-32 relative bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4 uppercase tracking-tighter">
                <GraduationCap className="text-accent-primary" size={32} />
                Education
              </h2>
              <div className="glass-card p-10 rounded-[2rem] border-l-4 border-l-accent-primary">
                <div className="text-accent-primary font-bold text-sm mb-2 uppercase tracking-widest">2021 — 2025</div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Bachelor of Science in Computer Science (BSCS)</h3>
                <p className="text-gray-400 mb-6">Muhammad Nawaz Sharif University of Engineering & Technology, Multan</p>
                <div className="h-px bg-white/5 mb-6" />
                <p className="text-gray-300 font-sans leading-relaxed text-sm">
                  Comprehensive computer science education covering software engineering, data structures, algorithms, database systems, and web technologies.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4 uppercase tracking-tighter">
                  <Globe className="text-accent-secondary" size={32} />
                  Languages
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { lang: 'English', level: 'Professional Working Proficiency' },
                    { lang: 'Urdu', level: 'Native Proficiency' },
                  ].map((l, i) => (
                    <div key={i} className="glass p-6 rounded-2xl">
                      <div className="text-white font-bold mb-1">{l.lang}</div>
                      <div className="text-xs text-gray-500">{l.level}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-4 uppercase tracking-tighter">
                  Hobbies & Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  {['Learning New Technologies', 'Hardware Repair', 'Movies', 'Music Listening'].map((hobby) => (
                    <span key={hobby} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-medium uppercase tracking-wider">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto font-sans">Available for freelance projects and full-time opportunities. Let's build something extraordinary.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Mail, label: 'Email', value: 'itzhassanraza276@gmail.com', href: 'mailto:itzhassanraza276@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+92 329 7901828', href: 'tel:+923297901828' },
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

          <div className="mt-20 flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://linkedin.com/in/hassan-raza-42280221b" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-accent-primary hover:border-accent-primary transition-all">
                <Linkedin size={20} />
                <span className="text-sm font-bold tracking-widest">LINKEDIN</span>
              </a>
              <a href="https://github.com/hassan-raza-111" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-background transition-all">
                <Github size={20} />
                <span className="text-sm font-bold tracking-widest">PRIMARY GITHUB</span>
              </a>
              <a href="https://github.com/hassan-raza123" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-background transition-all">
                <Github size={20} />
                <span className="text-sm font-bold tracking-widest">SECONDARY GITHUB</span>
              </a>
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
