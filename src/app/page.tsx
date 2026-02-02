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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
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
                  className={`text-[14px] font-medium tracking-[0.5px] transition-colors ${activeTab === tab.id
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
                  className={`block w-full text-left text-[14px] font-medium py-2 transition-colors ${activeTab === tab.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
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
                Results-driven Full Stack Developer with 4+ years of professional experience in designing, developing, and deploying scalable web applications. Expert in modern JavaScript frameworks (React.js, Next.js, Node.js, Nest.js) and full MERN stack development.
              </p>
              <p className="text-[20px] font-light text-gray-300 leading-[1.8]">
                Proven track record of successfully delivering complex enterprise-level projects including ERP systems, admission portals, e-commerce platforms, and real-time management systems. Strong background in both frontend and backend development with expertise in database design, REST APIs, and cloud deployment.
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
                  { name: 'Redux.js', level: 85 },
                  { name: 'React Query', level: 85 },
                  { name: 'Tailwind CSS', level: 90 },
                  { name: 'Bootstrap', level: 85 },
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
                ],
              },
              {
                title: 'Databases & Tools',
                icon: Award,
                skills: [
                  { name: 'MongoDB', level: 90 },
                  { name: 'MySQL', level: 85 },
                  { name: 'PostgreSQL', level: 85 },
                  { name: 'AWS', level: 80 },
                  { name: 'Git/GitHub', level: 95 },
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
                location: 'Multan, Punjab, Pakistan (On-site)',
                period: 'October 2023 - Present',
                highlights: ['Next.js', 'Nest.js', 'Performance Optimization'],
                description: [
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
                highlights: ['Laravel', 'MySQL', 'System Architecture'],
                description: [
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
                highlights: ['MERN Stack', 'React Native', 'Full Stack'],
                description: [
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
                highlights: ['PHP', 'MySQL', 'REST APIs'],
                description: [
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
                highlights: ['UI/UX', 'Adobe Photoshop', 'Graphic Design'],
                description: [
                  'Created visual designs and marketing materials using Adobe Photoshop',
                  'Designed UI/UX mockups for web applications',
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
                title: 'University Online Admission Portal',
                description:
                  'Developed comprehensive admission management system for Muhammad Nawaz Sharif University of Engineering & Technology, Multan currently processing live admissions for 2025 batch.',
                tech: 'Next.js, Node.js, PostgreSQL',
                features: [
                  'Multi-application support with user and admin panels',
                  'Integrated online fee payment with unique challan generation and bank verification',
                  'Receipt upload and verification system',
                  'Role-based dashboards for administrators and applicants',
                ],
                links: {
                  github: null,
                  demo: 'https://admissions.mnsuet.edu.pk',
                },
              },
              {
                title: 'University Class Management System',
                description:
                  'Enterprise-level ERP system for academic institution management with OBE compliance.',
                tech: 'Next.js, Nest.js, PostgreSQL',
                features: [
                  'Implemented OBE (Outcome-Based Education) framework',
                  'Real-time attendance tracking and class scheduling system',
                  'Multi-role architecture: Super Admin, Department Admin, Teacher, and Student dashboards',
                  'Comprehensive reporting and analytics modules',
                ],
                links: {
                  github: null,
                  demo: null,
                },
              },
              {
                title: 'JanJapan Cars System',
                description:
                  'Complete system migration from PHP to modern Next.js/Nest.js architecture for automotive marketplace.',
                tech: 'Next.js, Nest.js, MongoDB',
                features: [
                  'Full-featured inventory management system',
                  'Real-time auction system with live bidding',
                  'Advanced search and filtering capabilities',
                  'Performance optimization resulting in 3x faster load times',
                ],
                links: {
                  github: null,
                  demo: 'https://janjapan.com',
                },
              },
              {
                title: 'Venbid - Service Provider Platform',
                description:
                  'On-demand home services marketplace connecting customers with verified service providers (UK Client).',
                tech: 'React.js, Node.js, MongoDB',
                features: [
                  'Three-tier system: Customer, Vendor, and Admin portals',
                  'Service categories: Furniture repair, plumbing, electrical, and more',
                  'Real-time booking and scheduling system',
                  'Rating and review management',
                ],
                links: {
                  github: null,
                  demo: null,
                },
              },
              {
                title: 'Asan Umrah Committee',
                description:
                  'Digital platform for managing online committee operations and member contributions.',
                tech: 'Laravel, MySQL',
                features: [
                  'Member registration and payment tracking',
                  'Automated installment calculations',
                  'Financial reporting and transparency features',
                ],
                links: {
                  github: null,
                  demo: null,
                },
              },
              {
                title: 'OrderTik - Restaurant Management',
                description:
                  'Complete restaurant order management system with driver tracking capabilities.',
                tech: 'Laravel, MySQL, Google Maps API',
                features: [
                  'Real-time order processing and kitchen management',
                  'Driver assignment and live GPS tracking',
                  'Admin dashboard with analytics and reporting',
                ],
                links: {
                  github: null,
                  demo: 'https://jalal.ordertik.com',
                },
              },
              {
                title: 'AI Chatbot System',
                description:
                  'Intelligent chatbot implementation for automated customer support and engagement.',
                tech: 'Next.js, Node.js, AI APIs',
                features: [
                  'Natural language processing integration',
                  'Contextual conversation management',
                  'Admin panel for training and analytics',
                ],
                links: {
                  github: null,
                  demo: null,
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
                    className={`flex items-start gap-[24px] group p-[30px] bg-[#222] hover:bg-[#333] transition-colors ${contact.href ? 'cursor-pointer' : ''
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

      {/* Languages Section */}
      <div className="py-[120px] bg-slate-800">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Languages
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400" />
          </div>
          <div className="grid md:grid-cols-2 gap-[40px]">
            {[
              { language: 'English', proficiency: 'Professional Working Proficiency' },
              { language: 'Urdu', proficiency: 'Native Proficiency' },
            ].map((lang, index) => (
              <div key={index} className="bg-slate-900 p-[40px] border border-slate-700 rounded-lg">
                <h3 className="text-[32px] font-bold text-white mb-[10px]">{lang.language}</h3>
                <p className="text-cyan-400 font-light text-[18px]">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies & Interests Section */}
      <div className="py-[120px] bg-slate-900">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-bold text-cyan-400 mb-[40px] tracking-[-2px]">
              Hobbies & Interests
            </h2>
            <div className="w-[80px] h-[2px] bg-cyan-400" />
          </div>
          <div className="flex flex-wrap gap-[20px]">
            {[
              'Learning New Technologies',
              'Hardware Repair',
              'Movies',
              'Music Listening',
            ].map((hobby, index) => (
              <span
                key={index}
                className="bg-slate-800 border border-slate-600 text-gray-300 px-[30px] py-[15px] text-[18px] font-light hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                {hobby}
              </span>
            ))}
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
