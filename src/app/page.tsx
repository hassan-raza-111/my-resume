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
  CheckCircle,
  Star,
} from 'lucide-react';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'education',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Parallax effect
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-light tracking-wider text-gray-900">
              HR
            </div>
            <div className="hidden md:flex items-center space-x-10">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-light tracking-widest uppercase transition-all duration-300 ${
                    activeSection === section
                      ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-6 space-y-4">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left text-sm font-light tracking-widest uppercase py-2 ${
                    activeSection === section ? 'text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      >
        <div
          ref={parallaxRef}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-light tracking-tight text-gray-900 leading-none">
                Hassan
                <br />
                <span className="font-extralight">Raza</span>
              </h1>
              <div className="w-24 h-px bg-gray-900 mx-auto" />
              <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide mt-8">
                Full Stack Developer
              </p>
              <p className="text-base md:text-lg font-light text-gray-500 max-w-2xl mx-auto mt-4">
                Crafting digital experiences with modern technologies
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href="mailto:itzhassanraza276@gmail.com"
                className="group flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm font-light tracking-widest uppercase"
              >
                Get In Touch
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={generatePDF}
                className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 text-sm font-light tracking-widest uppercase"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
            <div className="flex justify-center mt-16">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-gray-900 transition-colors animate-bounce"
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean & Minimal */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
                About
              </h2>
              <div className="w-16 h-px bg-gray-900 mb-8" />
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Results-driven Full Stack Developer with 4+ years of professional experience in
                designing, developing, and deploying scalable web applications.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Expert in modern JavaScript frameworks (React.js, Next.js, Node.js, Nest.js) and
                full MERN/PERN stack development. Proven track record of successfully delivering
                complex enterprise-level projects.
              </p>
              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700 font-light">4+ Years Experience</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700 font-light">20+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700 font-light">MERN & PERN Stack Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Professional Grid */}
      <section id="skills" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Skills
            </h2>
            <div className="w-16 h-px bg-gray-900 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Frontend',
                skills: [
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'TypeScript',
                  'React.js',
                  'Next.js',
                  'Redux',
                  'Tailwind CSS',
                  'Bootstrap',
                ],
              },
              {
                title: 'Backend',
                skills: [
                  'Node.js',
                  'Nest.js',
                  'PHP',
                  'Laravel',
                  'Express.js',
                  'REST APIs',
                ],
              },
              {
                title: 'Database & Tools',
                skills: [
                  'MongoDB',
                  'MySQL',
                  'PostgreSQL',
                  'AWS',
                  'Git/GitHub',
                  'React Native',
                ],
              },
            ].map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-light text-gray-900 border-b border-gray-300 pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 font-light flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline Style */}
      <section id="experience" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Experience
            </h2>
            <div className="w-16 h-px bg-gray-900" />
          </div>
          <div className="space-y-16">
            {[
              {
                title: 'Next.js Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Pakistan',
                period: 'Oct 2023 - Present',
                description: [
                  'Spearheaded migration of legacy PHP systems to modern Next.js architecture',
                  'Led development of JanJapan Cars System using Next.js and Nest.js',
                  'Developed AI-powered chatbot system integrated with Next.js',
                  'Architected and deployed scalable REST APIs',
                ],
              },
              {
                title: 'Senior Laravel Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Pakistan',
                period: 'Apr 2022 - Sep 2023',
                description: [
                  'Developed OrderTik platform (jalal.ordertik.com) with comprehensive order management',
                  'Built driver management system with real-time location tracking',
                  'Created responsive admin dashboards for fleet management',
                  'Optimized database queries resulting in 40% faster load times',
                ],
              },
              {
                title: 'Software Developer',
                company: 'KK IT Solutions Pvt LTD',
                location: 'Multan, Pakistan',
                period: 'Aug 2021 - Present',
                description: [
                  'Full-stack development using MERN and PERN stack',
                  'Developed React Native mobile application (2-3 months)',
                  'Collaborated with cross-functional teams',
                  'Conducted code reviews and mentored junior developers',
                ],
              },
              {
                title: 'PHP Developer',
                company: 'Pro Tech Giant (Pvt.) Ltd.',
                location: 'Multan, Pakistan',
                period: 'Mar 2021 - Jul 2021',
                description: [
                  'Developed custom PHP solutions and dynamic web applications',
                  'Integrated MySQL databases with secure backend systems',
                  'Implemented RESTful APIs for third-party integrations',
                ],
              },
            ].map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-900 rounded-full" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-light text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-gray-600 font-light">{exp.company}</p>
                    <p className="text-sm text-gray-500 font-light flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 font-light mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-gray-700 font-light flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Clean Grid */}
      <section id="projects" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Projects
            </h2>
            <div className="w-16 h-px bg-gray-900" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'University Admission Portal',
                description:
                  'Comprehensive admission management system for MNSUET processing live admissions for 2025 batch.',
                tech: 'Next.js, Node.js, PostgreSQL',
                features: [
                  'Multi-application support',
                  'Online fee payment',
                  'Challan generation',
                ],
              },
              {
                title: 'Class Management System',
                description:
                  'Enterprise-level ERP system with OBE compliance for academic institution.',
                tech: 'Next.js, Nest.js, PostgreSQL',
                features: ['OBE framework', 'Attendance tracking', 'Multi-role dashboards'],
              },
              {
                title: 'JanJapan Cars System',
                description:
                  'Complete migration from PHP to Next.js/Nest.js for automotive marketplace.',
                tech: 'Next.js, Nest.js, MongoDB',
                features: [
                  'Inventory management',
                  'Live auction system',
                  '3x faster performance',
                ],
              },
              {
                title: 'Venbid - Service Platform',
                description: 'On-demand home services marketplace for UK client.',
                tech: 'React.js, Node.js, MongoDB',
                features: ['Three-tier system', 'Real-time booking', 'Rating system'],
              },
              {
                title: 'Asan Umrah Committee',
                description: 'Digital platform for managing online committee operations.',
                tech: 'Laravel, MySQL',
                features: ['Member registration', 'Payment tracking', 'Financial reporting'],
              },
              {
                title: 'OrderTik Restaurant',
                description: 'Complete restaurant order management with driver tracking.',
                tech: 'Laravel, MySQL, Google Maps',
                features: ['Order processing', 'GPS tracking', 'Analytics dashboard'],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-light mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-light text-gray-500 uppercase tracking-widest mb-2">
                    Tech Stack
                  </p>
                  <p className="text-sm text-gray-900 font-light">{project.tech}</p>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 font-light flex items-center gap-2">
                      <Star size={12} className="text-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Education
            </h2>
            <div className="w-16 h-px bg-gray-900" />
          </div>
          <div className="max-w-3xl">
            <div className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-900 rounded-full" />
              <h3 className="text-2xl font-light text-gray-900 mb-2">
                Bachelor of Science in Computer Science (BSCS)
              </h3>
              <p className="text-lg text-gray-600 font-light mb-2">
                Muhammad Nawaz Sharif University of Engineering & Technology, Multan
              </p>
              <p className="text-sm text-gray-500 font-light mb-4">2021 - 2025</p>
              <p className="text-gray-700 font-light leading-relaxed">
                Comprehensive computer science education covering software engineering, data
                structures, algorithms, database systems, and web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal */}
      <section id="contact" className="py-32 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
              Contact
            </h2>
            <div className="w-16 h-px bg-white" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg font-light text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'itzhassanraza276@gmail.com',
                  href: 'mailto:itzhassanraza276@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+92 329 7901828',
                  href: 'tel:+923297901828',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Multan, Punjab, Pakistan',
                  href: null,
                },
              ].map((contact, index) => {
                const Component = contact.href ? 'a' : 'div';
                return (
                  <Component
                    key={index}
                    href={contact.href || undefined}
                    className={`flex items-center gap-4 group ${
                      contact.href ? 'hover:text-gray-300 transition-colors' : ''
                    }`}
                  >
                    <contact.icon size={20} className="text-gray-400" />
                    <div>
                      <div className="text-xs font-light text-gray-400 uppercase tracking-widest mb-1">
                        {contact.label}
                      </div>
                      <div className="text-base font-light">{contact.value}</div>
                    </div>
                  </Component>
                );
              })}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/hassan-raza-42280221b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/hassan-raza-111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://github.com/hassan-raza123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 font-light text-sm">
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
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
