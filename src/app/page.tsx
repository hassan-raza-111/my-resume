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
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Bar - Clean Modern */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700'
            : 'bg-slate-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-[60px]">
          <div className="flex justify-between items-center h-[80px]">
            <div
              className="text-[28px] font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors"
              onClick={() => scrollToTab('home')}
            >
              HR
            </div>
            <div className="hidden md:flex items-center space-x-[40px]">
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
                  className={`text-[14px] font-medium tracking-[0.5px] transition-colors ${
                    activeTab === tab.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-[60px] py-6 space-y-4">
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
                  className={`block w-full text-left text-[14px] font-medium py-2 transition-colors ${
                    activeTab === tab.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Page/Tab - Clean Hero */}
      <div
        id="home"
        ref={setSectionRef('home')}
        className="min-h-screen flex items-center justify-center relative bg-slate-900"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>

        <div className="max-w-[1920px] mx-auto px-[60px] w-full text-center relative z-10">
          <div className="space-y-[40px]">
            <h1 className="text-[120px] md:text-[140px] font-bold leading-[1.1] tracking-[-2px] text-white">
              <span className="text-cyan-400">Hassan</span>
              <br />
              <span className="text-gray-300 font-light">Raza</span>
            </h1>
            <div className="w-[80px] h-[2px] bg-cyan-400 mx-auto" />
            <p className="text-[32px] md:text-[40px] font-light text-gray-300 mt-[60px] tracking-[-0.5px]">
              Full Stack Developer
            </p>
            <p className="text-[18px] md:text-[20px] font-light text-gray-400 max-w-[600px] mx-auto mt-[30px] leading-relaxed">
              Crafting digital experiences with modern technologies and turning ideas into reality
            </p>
            <div className="flex flex-wrap justify-center gap-[20px] mt-[80px]">
              <a
                href="mailto:itzhassanraza276@gmail.com"
                className="inline-flex items-center gap-[12px] bg-cyan-500 hover:bg-cyan-600 text-white px-[40px] py-[16px] transition-colors duration-300 text-[14px] font-medium tracking-[1px] uppercase shadow-lg"
              >
                Get In Touch
                <ArrowRight size={18} />
              </a>
              <button
                onClick={generatePDF}
                className="inline-flex items-center gap-[12px] border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-[40px] py-[16px] transition-all duration-300 text-[14px] font-medium tracking-[1px] uppercase"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
            <div className="flex justify-center mt-[100px]">
              <button
                onClick={() => scrollToTab('about')}
                className="text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
              >
                <ChevronDown size={40} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Page/Tab */}
      <div
        id="about"
        ref={setSectionRef('about')}
        className="min-h-screen flex items-center py-[120px] bg-slate-800"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="grid md:grid-cols-2 gap-[120px] items-center">
            <div>
              <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[60px] tracking-[-2px]">
                About
              </h2>
              <div className="w-[80px] h-[2px] bg-cyan-400 mb-[60px]" />
            </div>
            <div className="space-y-[30px]">
              <p className="text-[20px] font-light text-gray-300 leading-[1.8]">
                Results-driven Full Stack Developer with 4+ years of
                professional experience in designing, developing, and deploying
                scalable web applications that drive business growth.
              </p>
              <p className="text-[20px] font-light text-gray-300 leading-[1.8]">
                Expert in modern JavaScript frameworks (React.js, Next.js,
                Node.js, Nest.js) and full MERN/PERN stack development. Proven
                track record of successfully delivering complex enterprise-level
                projects including ERP systems, admission portals, e-commerce
                platforms, and real-time management systems.
              </p>
              <div className="pt-[40px] space-y-[20px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-cyan-400 rounded-full" />
                  <span className="text-gray-300 font-light text-[18px]">
                    4+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-cyan-400 rounded-full" />
                  <span className="text-gray-300 font-light text-[18px]">
                    20+ Projects Completed
                  </span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-cyan-400 rounded-full" />
                  <span className="text-gray-300 font-light text-[18px]">
                    MERN & PERN Stack Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-screen flex items-center py-[120px] bg-slate-900">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="text-center mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Skills & Expertise
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[80px]">
            {[
              {
                title: 'Frontend Development',
                icon: Code,
                skills: [
                  { name: 'React.js', level: 95 },
                  { name: 'Next.js', level: 90 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'JavaScript', level: 95 },
                  { name: 'Tailwind CSS', level: 90 },
                  { name: 'HTML5/CSS3', level: 95 },
                ],
              },
              {
                title: 'Backend Development',
                icon: Briefcase,
                skills: [
                  { name: 'Node.js', level: 90 },
                  { name: 'Nest.js', level: 85 },
                  { name: 'Laravel/PHP', level: 85 },
                  { name: 'Express.js', level: 90 },
                  { name: 'REST APIs', level: 95 },
                  { name: 'GraphQL', level: 75 },
                ],
              },
              {
                title: 'Database & DevOps',
                icon: Award,
                skills: [
                  { name: 'PostgreSQL', level: 85 },
                  { name: 'MongoDB', level: 90 },
                  { name: 'MySQL', level: 85 },
                  { name: 'AWS', level: 80 },
                  { name: 'Git/GitHub', level: 95 },
                  { name: 'Docker', level: 75 },
                ],
              },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="space-y-[30px] bg-slate-800 p-[40px] rounded-lg border border-slate-700">
                  <div className="flex items-center gap-[16px] border-b border-slate-600 pb-[20px]">
                    <div className="p-3 rounded-lg bg-cyan-500">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <h3 className="text-[28px] font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-[20px]">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-[8px]">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-light text-[16px]">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 font-light text-[14px]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 h-[6px] rounded-full overflow-hidden">
                          <div
                            className="bg-cyan-500 h-[6px] rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-[100px] text-center">
            <div className="inline-flex flex-wrap justify-center gap-[20px] max-w-[1000px]">
              {[
                'Agile/Scrum',
                'Test-Driven Development',
                'CI/CD',
                'Microservices',
                'System Design',
                'Code Review',
                'Team Leadership',
                'Problem Solving',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 border border-slate-600 text-gray-300 px-[20px] py-[10px] text-[14px] font-light hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Page/Tab */}
      <div
        id="experience"
        ref={setSectionRef('experience')}
        className="min-h-screen flex items-center py-[120px] bg-slate-800"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Experience
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400" />
          </div>
          <div className="space-y-[80px]">
            {[
              {
                title: 'Next.js Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Pakistan',
                period: 'Oct 2023 - Present',
                highlights: ['Team Lead', 'Full-Stack', 'Migration Expert'],
                description: [
                  'Led migration of 3+ legacy PHP systems to modern Next.js, improving performance by 300%',
                  'Architected and developed JanJapan Cars System serving 5000+ daily users',
                  'Built AI-powered chatbot system reducing customer service queries by 60%',
                  'Designed scalable REST APIs handling 10,000+ concurrent requests',
                  'Mentored 4 junior developers and established coding standards',
                ],
              },
              {
                title: 'Senior Laravel Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Pakistan',
                period: 'Apr 2022 - Sep 2023',
                highlights: ['Senior Developer', 'System Architecture', 'Performance Optimization'],
                description: [
                  'Developed OrderTik platform processing 2000+ daily orders with 99.9% uptime',
                  'Built real-time GPS tracking system for 100+ drivers with live location updates',
                  'Created comprehensive admin dashboard reducing manual reporting by 80%',
                  'Optimized database queries achieving 40% faster load times and 50% reduced server costs',
                  'Implemented automated testing reducing production bugs by 70%',
                ],
              },
              {
                title: 'Software Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Pakistan',
                period: 'Aug 2021 - Mar 2022',
                highlights: ['Full-Stack', 'Mobile Development', 'Cross-functional'],
                description: [
                  'Developed 5+ full-stack applications using MERN/PERN stack technologies',
                  'Built React Native mobile app deployed to 500+ users within 3 months',
                  'Collaborated with 8-member cross-functional team using Agile methodologies',
                  'Conducted 50+ code reviews and mentored 3 junior developers',
                  'Implemented CI/CD pipelines reducing deployment time by 75%',
                ],
              },
              {
                title: 'PHP Developer',
                company: 'Pro Tech Giant (Pvt.) Ltd.',
                location: 'Multan, Pakistan',
                period: 'Mar 2021 - Jul 2021',
                highlights: ['Backend Development', 'API Integration', 'Database Design'],
                description: [
                  'Developed 10+ custom PHP web applications with secure authentication',
                  'Integrated MySQL databases with optimized queries for 1000+ concurrent users',
                  'Built RESTful APIs enabling seamless third-party integrations',
                  'Implemented payment gateways processing $50K+ monthly transactions',
                  'Reduced application load time by 60% through performance optimization',
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-cyan-400 pl-[60px] relative"
              >
                <div className="absolute -left-[7px] top-0 w-[14px] h-[14px] bg-cyan-400 rounded-full" />
                <div className="bg-slate-800 p-[40px] rounded-lg border border-slate-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-[30px]">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:gap-[20px] mb-[12px]">
                        <h3 className="text-[36px] font-bold text-white">
                          {exp.title}
                        </h3>
                        {exp.highlights && (
                          <div className="flex flex-wrap gap-[8px] mt-[8px] md:mt-0">
                            {exp.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="bg-cyan-500/20 text-cyan-400 px-[12px] py-[4px] text-[12px] font-medium uppercase tracking-[1px] border border-cyan-400/30"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-[24px] text-gray-300 font-light mb-[8px]">
                        {exp.company}
                      </p>
                      <p className="text-[16px] text-gray-400 font-light flex items-center gap-[8px]">
                        <MapPin size={16} className="text-cyan-400" />
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-[16px] text-gray-400 font-light mt-[20px] md:mt-0 md:text-right bg-slate-700 px-3 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-[12px] mt-[30px]">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-300 font-light text-[18px] flex items-start gap-[16px]"
                      >
                        <div className="w-[6px] h-[6px] bg-cyan-400 rounded-full mt-[8px] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Page/Tab */}
      <div
        id="projects"
        ref={setSectionRef('projects')}
        className="min-h-screen flex items-center py-[120px] bg-slate-900"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px] text-center">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Projects
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-[40px]">
            {[
              {
                title: 'University Admission Portal',
                description:
                  'Comprehensive admission management system for MNSUET processing live admissions for 2025 batch.',
                tech: 'Next.js, Node.js, PostgreSQL',
                features: [
                  'Multi-application support',
                  'Online fee payment integration',
                  'Automated challan generation',
                  'Real-time admission tracking',
                ],
                links: {
                  github: 'https://github.com/hassan-raza-111/mnsuet-admission-portal',
                  demo: 'https://admissions.mnsuet.edu.pk',
                },
              },
              {
                title: 'Class Management System',
                description:
                  'Enterprise-level ERP system with OBE compliance for academic institution management.',
                tech: 'Next.js, Nest.js, PostgreSQL',
                features: [
                  'OBE framework implementation',
                  'Automated attendance tracking',
                  'Multi-role dashboards',
                  'Performance analytics',
                ],
                links: {
                  github: 'https://github.com/hassan-raza-111/class-management-erp',
                  demo: null,
                },
              },
              {
                title: 'JanJapan Cars System',
                description:
                  'Complete migration from PHP to Next.js/Nest.js for automotive marketplace with live auctions.',
                tech: 'Next.js, Nest.js, MongoDB',
                features: [
                  'Advanced inventory management',
                  'Real-time auction system',
                  '3x performance improvement',
                  'Mobile-responsive design',
                ],
                links: {
                  github: 'https://github.com/hassan-raza-111/janjapan-cars',
                  demo: 'https://janjapan.com',
                },
              },
              {
                title: 'Venbid - Service Platform',
                description:
                  'On-demand home services marketplace connecting customers with service providers.',
                tech: 'React.js, Node.js, MongoDB',
                features: [
                  'Three-tier booking system',
                  'Real-time notifications',
                  'Rating and review system',
                  'Secure payment processing',
                ],
                links: {
                  github: 'https://github.com/hassan-raza-111/venbid-platform',
                  demo: null,
                },
              },
              {
                title: 'Asan Umrah Committee',
                description:
                  'Digital platform for managing online committee operations and member services.',
                tech: 'Laravel, MySQL',
                features: [
                  'Secure member registration',
                  'Online payment tracking',
                  'Financial reporting dashboard',
                  'Document management',
                ],
                links: {
                  github: 'https://github.com/hassan-raza-111/asan-umrah-committee',
                  demo: null,
                },
              },
              {
                title: 'OrderTik Restaurant',
                description:
                  'Complete restaurant order management system with real-time driver tracking.',
                tech: 'Laravel, MySQL, Google Maps API',
                features: [
                  'Real-time order processing',
                  'GPS driver tracking',
                  'Advanced analytics dashboard',
                  'Multi-restaurant support',
                ],
                links: {
                  github: 'https://github.com/hassan-raza-111/ordertik-restaurant',
                  demo: 'https://jalal.ordertik.com',
                },
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 p-[50px] border border-slate-700 hover:border-cyan-400 transition-colors rounded-lg"
              >
                <h3 className="text-[32px] font-bold text-white mb-[20px] hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-light mb-[30px] leading-[1.8] text-[18px]">
                  {project.description}
                </p>
                <div className="mb-[30px]">
                  <p className="text-[12px] font-light text-gray-400 uppercase tracking-[2px] mb-[12px]">
                    Tech Stack
                  </p>
                  <p className="text-[16px] text-cyan-400 font-medium">
                    {project.tech}
                  </p>
                </div>
                <ul className="space-y-[12px]">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-300 font-light text-[16px] flex items-center gap-[12px]"
                    >
                      <div className="w-[4px] h-[4px] bg-cyan-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {project.links && (project.links.github || project.links.demo) && (
                  <div className="flex gap-[16px] mt-[30px] pt-[20px] border-t border-slate-600">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[8px] text-gray-400 hover:text-cyan-400 transition-colors text-[14px] font-light"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[8px] text-gray-400 hover:text-cyan-400 transition-colors text-[14px] font-light"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="min-h-screen flex items-center py-[120px] bg-slate-800">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Education
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400" />
          </div>
          <div className="max-w-[1000px]">
            <div className="border-l-2 border-cyan-400 pl-[60px] relative">
              <div className="absolute -left-[7px] top-0 w-[14px] h-[14px] bg-cyan-400 rounded-full" />
              <div className="bg-slate-900 p-[40px] rounded-lg border border-slate-700">
                <h3 className="text-[36px] font-bold text-white mb-[12px]">
                  Bachelor of Science in Computer Science (BSCS)
                </h3>
                <p className="text-[24px] text-gray-300 font-light mb-[8px]">
                  Muhammad Nawaz Sharif University of Engineering & Technology,
                  Multan
                </p>
                <p className="text-[16px] text-gray-400 font-light mb-[30px] bg-slate-700 px-3 py-1 rounded inline-block">
                  2021 - 2025
                </p>
                <p className="text-gray-300 font-light leading-[1.8] text-[18px]">
                  Comprehensive computer science education covering software
                  engineering, data structures, algorithms, database systems, and
                  web technologies. Final year project on AI-powered web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Awards Section */}
      <div className="min-h-screen flex items-center py-[120px] bg-slate-900">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Certifications & Awards
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400" />
          </div>
          <div className="grid md:grid-cols-2 gap-[80px]">
            <div>
              <h3 className="text-[32px] font-bold text-white mb-[40px] border-b border-slate-600 pb-[20px]">
                Certifications
              </h3>
              <div className="space-y-[30px]">
                {[
                  {
                    title: 'AWS Certified Cloud Practitioner',
                    issuer: 'Amazon Web Services',
                    date: '2024',
                    credentialId: 'AWS-CP-2024-001',
                  },
                  {
                    title: 'React Developer Certification',
                    issuer: 'Meta (Facebook)',
                    date: '2023',
                    credentialId: 'META-REACT-2023',
                  },
                  {
                    title: 'Node.js Application Development',
                    issuer: 'IBM',
                    date: '2023',
                    credentialId: 'IBM-NODE-2023',
                  },
                  {
                    title: 'Laravel Certified Developer',
                    issuer: 'Laravel',
                    date: '2022',
                    credentialId: 'LARAVEL-CERT-2022',
                  },
                ].map((cert, index) => (
                  <div key={index} className="border-l-2 border-cyan-400 pl-[30px] relative">
                    <div className="absolute -left-[7px] top-0 w-[14px] h-[14px] bg-cyan-400 rounded-full" />
                    <div className="bg-slate-800 p-[30px] rounded-lg border border-slate-700">
                      <h4 className="text-[24px] font-bold text-white mb-[8px]">
                        {cert.title}
                      </h4>
                      <p className="text-[18px] text-gray-300 font-light mb-[4px]">
                        {cert.issuer}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-[14px] text-gray-400 font-light bg-slate-700 px-3 py-1 rounded">
                          {cert.date}
                        </span>
                        <span className="text-[12px] text-gray-400 font-light uppercase tracking-[1px] bg-slate-700 px-3 py-1 rounded">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[32px] font-bold text-white mb-[40px] border-b border-slate-600 pb-[20px]">
                Awards & Recognition
              </h3>
              <div className="space-y-[30px]">
                {[
                  {
                    title: 'Employee of the Year',
                    issuer: 'KK IT Solutions Pvt LTD',
                    date: '2024',
                    description: 'Recognized for outstanding performance and leadership in full-stack development projects.',
                  },
                  {
                    title: 'Best Project Award',
                    issuer: 'KK IT Solutions Pvt LTD',
                    date: '2023',
                    description: 'Awarded for JanJapan Cars System migration project achieving 300% performance improvement.',
                  },
                  {
                    title: 'Top Developer Award',
                    issuer: 'KK IT Solutions Pvt LTD',
                    date: '2022',
                    description: 'Recognized for exceptional contribution to OrderTik restaurant management platform.',
                  },
                  {
                    title: 'University Merit Scholarship',
                    issuer: 'MNSUET',
                    date: '2021-2023',
                    description: 'Academic excellence award for maintaining top 5% GPA in Computer Science program.',
                  },
                ].map((award, index) => (
                  <div key={index} className="bg-slate-800 p-[30px] rounded-lg border border-slate-700">
                    <div className="flex items-start justify-between mb-[16px]">
                      <h4 className="text-[20px] font-bold text-white">
                        {award.title}
                      </h4>
                      <span className="text-[14px] text-gray-400 font-light bg-slate-700 px-3 py-1 rounded">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-[16px] text-gray-300 font-light mb-[12px]">
                      {award.issuer}
                    </p>
                    <p className="text-[16px] text-gray-300 font-light leading-[1.6]">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="min-h-screen flex items-center py-[120px] bg-slate-800">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px] text-center">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Testimonials
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400 mx-auto mb-[40px]" />
            <p className="text-[20px] text-gray-300 font-light max-w-[600px] mx-auto">
              What clients and colleagues say about working with me
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {[
              {
                quote: "Hassan delivered exceptional work on our university admission portal. His attention to detail and technical expertise helped us successfully manage admissions for over 2000 students. Highly recommended!",
                author: "Dr. Ahmed Khan",
                position: "Director Admissions, MNSUET",
                company: "Muhammad Nawaz Sharif University",
                avatar: "👨‍🏫",
              },
              {
                quote: "Working with Hassan on the JanJapan Cars project was outstanding. He successfully migrated our legacy system and improved performance by 300%. His problem-solving skills are exceptional.",
                author: "Muhammad Ali",
                position: "CEO",
                company: "KK IT Solutions Pvt LTD",
                avatar: "👨‍💼",
              },
              {
                quote: "Hassan's expertise in full-stack development and his ability to deliver complex projects on time made him an invaluable asset to our team. The OrderTik platform he built exceeded our expectations.",
                author: "Sara Ahmed",
                position: "Project Manager",
                company: "KK IT Solutions Pvt LTD",
                avatar: "👩‍💼",
              },
              {
                quote: "I hired Hassan for a freelance project and was impressed by his professionalism and technical skills. He delivered a high-quality React application that perfectly met our requirements.",
                author: "John Smith",
                position: "Founder",
                company: "Venbid UK",
                avatar: "👨‍💻",
              },
              {
                quote: "Hassan's mentorship and code review skills helped improve our team's overall code quality. He's not just a great developer but also an excellent team player and leader.",
                author: "Maria Rodriguez",
                position: "Senior Developer",
                company: "KK IT Solutions Pvt LTD",
                avatar: "👩‍💻",
              },
              {
                quote: "The ERP system Hassan developed for our educational institution has transformed our operations. His understanding of business requirements and technical implementation is outstanding.",
                author: "Dr. Fatima Hassan",
                position: "Academic Director",
                company: "Educational Institution",
                avatar: "👩‍🎓",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 p-[40px] border border-slate-700 rounded-lg hover:border-cyan-400 transition-colors"
              >
                <div className="text-gray-300 font-light text-[16px] leading-[1.6] mb-[30px] italic">
                  "{testimonial.quote}"
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[50px] h-[50px] bg-cyan-500 text-white flex items-center justify-center text-[20px] font-light rounded-full">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-white mb-[4px]">
                      {testimonial.author}
                    </div>
                    <div className="text-[14px] text-gray-300 font-light">
                      {testimonial.position}
                    </div>
                    <div className="text-[12px] text-gray-400 font-light uppercase tracking-[1px]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Page/Tab */}
      <div
        id="contact"
        ref={setSectionRef('contact')}
        className="min-h-screen flex items-center py-[120px] bg-slate-900 text-white"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Let's Work Together
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400" />
          </div>
          <div className="grid md:grid-cols-2 gap-[120px] items-center">
            <div>
              <div className="mb-[40px]">
                <div className="inline-flex items-center gap-[12px] bg-green-500 text-white px-[16px] py-[8px] text-[14px] font-light mb-[30px]">
                  <div className="w-[8px] h-[8px] bg-white rounded-full animate-pulse" />
                  Available for new projects
                </div>
              </div>
              <p className="text-[24px] font-light text-[#ccc] mb-[40px] leading-[1.6]">
                I'm always excited to work on challenging projects and collaborate
                with innovative teams. Let's build something amazing together.
              </p>
              <div className="space-y-[20px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-[#666] rounded-full" />
                  <span className="text-[#999] font-light text-[18px]">
                    Full-time opportunities
                  </span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-[#666] rounded-full" />
                  <span className="text-[#999] font-light text-[18px]">
                    Freelance projects
                  </span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-[#666] rounded-full" />
                  <span className="text-[#999] font-light text-[18px]">
                    Technical consulting
                  </span>
                </div>
              </div>
              <div className="mt-[60px]">
                <a
                  href="mailto:itzhassanraza276@gmail.com?subject=Project%20Inquiry&body=Hi%20Hassan,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                  className="group inline-flex items-center gap-[12px] bg-white text-[#1a1a1a] px-[40px] py-[16px] hover:bg-[#f5f5f5] transition-all duration-300 text-[14px] font-normal tracking-[1px] uppercase"
                >
                  Start a Conversation
                  <ArrowRight
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
            <div className="space-y-[40px]">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'itzhassanraza276@gmail.com',
                  href: 'mailto:itzhassanraza276@gmail.com',
                  description: 'Drop me a line anytime',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+92 329 7901828',
                  href: 'tel:+923297901828',
                  description: 'Available for calls',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Multan, Punjab, Pakistan',
                  href: null,
                  description: 'Open to remote work worldwide',
                },
                {
                  icon: Globe,
                  label: 'Timezone',
                  value: 'PKT (UTC+5)',
                  href: null,
                  description: 'Flexible working hours',
                },
              ].map((contact, index) => {
                const Component = contact.href ? 'a' : 'div';
                return (
                  <Component
                    key={index}
                    href={contact.href || undefined}
                    className={`flex items-start gap-[24px] group p-[30px] bg-[#222] hover:bg-[#333] transition-colors ${
                      contact.href ? 'cursor-pointer' : ''
                    }`}
                  >
                    <contact.icon size={24} className="text-[#666] mt-[4px] group-hover:text-white transition-colors" />
                    <div className="flex-1">
                      <div className="text-[12px] font-light text-[#666] uppercase tracking-[2px] mb-[8px]">
                        {contact.label}
                      </div>
                      <div className="text-[18px] font-light text-white mb-[4px]">
                        {contact.value}
                      </div>
                      <div className="text-[14px] text-[#999] font-light">
                        {contact.description}
                      </div>
                    </div>
                  </Component>
                );
              })}
              <div className="pt-[40px] border-t border-[#333]">
                <p className="text-[14px] text-[#666] font-light uppercase tracking-[2px] mb-[20px]">
                  Connect with me
                </p>
                <div className="flex gap-[24px]">
                  <a
                    href="https://linkedin.com/in/hassan-raza-42280221b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-white transition-colors p-[12px] hover:bg-[#333] rounded-full"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/hassan-raza-111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-white transition-colors p-[12px] hover:bg-[#333] rounded-full"
                    title="Primary GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://github.com/hassan-raza123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-white transition-colors p-[12px] hover:bg-[#333] rounded-full"
                    title="Secondary GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-[60px]">
        <div className="max-w-[1920px] mx-auto px-[60px]">
          <div className="text-center">
            <p className="text-gray-400 font-light text-[14px]">
              © 2025 Hassan Raza. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          nav,
          footer,
          button {
            display: none !important;
          }
          section,
          div[id] {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
