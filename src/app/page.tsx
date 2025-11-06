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
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Parallax effects
      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const scrolled = window.pageYOffset;
          const rate = scrolled * (0.3 + index * 0.1);
          ref.style.transform = `translateY(${rate}px)`;
        }
      });
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
      {/* Navigation - Wix Style */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-normal text-gray-900 tracking-wide">
              HR
            </div>
            <div className="hidden md:flex items-center space-x-10">
              {['home', 'about', 'experience', 'projects', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-normal tracking-wide transition-colors ${
                      activeSection === section
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-8 py-6 space-y-4">
              {['home', 'about', 'experience', 'projects', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left text-sm font-normal ${
                      activeSection === section
                        ? 'text-gray-900'
                        : 'text-gray-600'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Full Screen Wix Style */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div
          ref={(el) => (parallaxRefs.current[0] = el)}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-8xl md:text-9xl font-light text-gray-900 leading-tight tracking-tight">
              Hassan
              <br />
              <span className="font-extralight">Raza</span>
            </h1>
            <div className="w-32 h-0.5 bg-gray-900 mx-auto" />
            <p className="text-3xl md:text-4xl font-light text-gray-700 mt-12 tracking-wide">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl font-light text-gray-500 max-w-2xl mx-auto mt-6">
              Crafting digital experiences with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              <a
                href="mailto:itzhassanraza276@gmail.com"
                className="group inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 hover:bg-gray-800 transition-all duration-300 text-sm font-normal tracking-wide uppercase"
              >
                Get In Touch
                <ArrowRight
                  size={18}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </a>
              <button
                onClick={generatePDF}
                className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-10 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm font-normal tracking-wide uppercase"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
            <div className="flex justify-center mt-20">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-gray-900 transition-colors animate-bounce"
              >
                <ChevronDown size={40} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Wix Style */}
      <section
        id="about"
        className="min-h-screen flex items-center py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-12 tracking-tight">
                About
              </h2>
              <div className="w-20 h-0.5 bg-gray-900 mb-12" />
            </div>
            <div className="space-y-8">
              <p className="text-xl font-light text-gray-700 leading-relaxed">
                Results-driven Full Stack Developer with 4+ years of
                professional experience in designing, developing, and deploying
                scalable web applications.
              </p>
              <p className="text-xl font-light text-gray-700 leading-relaxed">
                Expert in modern JavaScript frameworks (React.js, Next.js,
                Node.js, Nest.js) and full MERN/PERN stack development. Proven
                track record of successfully delivering complex enterprise-level
                projects including ERP systems, admission portals, e-commerce
                platforms, and real-time management systems.
              </p>
              <div className="pt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-gray-700 font-light text-lg">
                    4+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-gray-700 font-light text-lg">
                    20+ Projects Completed
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full" />
                  <span className="text-gray-700 font-light text-lg">
                    MERN & PERN Stack Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Wix Style Grid */}
      <section
        id="skills"
        className="min-h-screen flex items-center py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Skills
            </h2>
            <div className="w-20 h-0.5 bg-gray-900 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: 'Frontend Development',
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
                title: 'Backend Development',
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
              <div key={index} className="space-y-8">
                <h3 className="text-2xl font-light text-gray-900 border-b border-gray-300 pb-4">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 font-light text-lg flex items-center gap-3"
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

      {/* Experience Section - Wix Timeline Style */}
      <section
        id="experience"
        className="min-h-screen flex items-center py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="mb-24">
            <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Experience
            </h2>
            <div className="w-20 h-0.5 bg-gray-900" />
          </div>
          <div className="space-y-20">
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
              <div
                key={index}
                className="border-l-2 border-gray-300 pl-12 relative"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-gray-900 rounded-full" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-600 font-light mb-2">
                      {exp.company}
                    </p>
                    <p className="text-base text-gray-500 font-light flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-base text-gray-500 font-light mt-4 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-700 font-light text-lg flex items-start gap-4"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Wix Style Grid */}
      <section
        id="projects"
        className="min-h-screen flex items-center py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="mb-24">
            <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Projects
            </h2>
            <div className="w-20 h-0.5 bg-gray-900" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
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
                features: [
                  'OBE framework',
                  'Attendance tracking',
                  'Multi-role dashboards',
                ],
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
                description:
                  'On-demand home services marketplace for UK client.',
                tech: 'React.js, Node.js, MongoDB',
                features: [
                  'Three-tier system',
                  'Real-time booking',
                  'Rating system',
                ],
              },
              {
                title: 'Asan Umrah Committee',
                description:
                  'Digital platform for managing online committee operations.',
                tech: 'Laravel, MySQL',
                features: [
                  'Member registration',
                  'Payment tracking',
                  'Financial reporting',
                ],
              },
              {
                title: 'OrderTik Restaurant',
                description:
                  'Complete restaurant order management with driver tracking.',
                tech: 'Laravel, MySQL, Google Maps',
                features: [
                  'Order processing',
                  'GPS tracking',
                  'Analytics dashboard',
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-10 border border-gray-200 hover:border-gray-900 transition-all duration-300 group"
              >
                <h3 className="text-3xl font-light text-gray-900 mb-4 group-hover:text-gray-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-light mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="mb-6">
                  <p className="text-xs font-light text-gray-500 uppercase tracking-widest mb-3">
                    Tech Stack
                  </p>
                  <p className="text-base text-gray-900 font-light">
                    {project.tech}
                  </p>
                </div>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-base text-gray-700 font-light flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
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
      <section
        id="education"
        className="min-h-screen flex items-center py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="mb-24">
            <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Education
            </h2>
            <div className="w-20 h-0.5 bg-gray-900" />
          </div>
          <div className="max-w-4xl">
            <div className="border-l-2 border-gray-300 pl-12 relative">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-gray-900 rounded-full" />
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                Bachelor of Science in Computer Science (BSCS)
              </h3>
              <p className="text-xl text-gray-600 font-light mb-3">
                Muhammad Nawaz Sharif University of Engineering & Technology,
                Multan
              </p>
              <p className="text-base text-gray-500 font-light mb-6">
                2021 - 2025
              </p>
              <p className="text-gray-700 font-light leading-relaxed text-lg">
                Comprehensive computer science education covering software
                engineering, data structures, algorithms, database systems, and
                web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Wix Style */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-32 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="mb-24">
            <h2 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
              Contact
            </h2>
            <div className="w-20 h-0.5 bg-white" />
          </div>
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-xl font-light text-gray-300 mb-12 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>
            <div className="space-y-8">
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
                    className={`flex items-start gap-6 group ${
                      contact.href
                        ? 'hover:text-gray-300 transition-colors'
                        : ''
                    }`}
                  >
                    <contact.icon size={24} className="text-gray-400 mt-1" />
                    <div>
                      <div className="text-xs font-light text-gray-400 uppercase tracking-widest mb-2">
                        {contact.label}
                      </div>
                      <div className="text-lg font-light">{contact.value}</div>
                    </div>
                  </Component>
                );
              })}
              <div className="flex gap-6 pt-8">
                <a
                  href="https://linkedin.com/in/hassan-raza-42280221b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/hassan-raza-111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://github.com/hassan-raza123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <p className="text-gray-400 font-light text-base">
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
