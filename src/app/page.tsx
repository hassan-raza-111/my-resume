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
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Wix Style Exact */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-[60px]">
          <div className="flex justify-between items-center h-[80px]">
            <div
              className="text-[28px] font-normal text-[#1a1a1a] cursor-pointer"
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
                  className={`text-[14px] font-normal tracking-[0.5px] transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#1a1a1a]'
                      : 'text-[#666] hover:text-[#1a1a1a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#1a1a1a]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#e5e5e5]">
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
                  className={`block w-full text-left text-[14px] font-normal ${
                    activeTab === tab.id ? 'text-[#1a1a1a]' : 'text-[#666]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Page/Tab - Full Screen Hero */}
      <div
        id="home"
        ref={(el) => (sectionRefs.current['home'] = el)}
        className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#fafafa]" />
        <div className="max-w-[1920px] mx-auto px-[60px] w-full text-center relative z-10">
          <div className="space-y-[40px]">
            <h1 className="text-[120px] md:text-[140px] font-light text-[#1a1a1a] leading-[1.1] tracking-[-2px]">
              Hassan
              <br />
              <span className="font-extralight">Raza</span>
            </h1>
            <div className="w-[80px] h-[1px] bg-[#1a1a1a] mx-auto" />
            <p className="text-[32px] md:text-[40px] font-light text-[#666] mt-[60px] tracking-[-0.5px]">
              Full Stack Developer
            </p>
            <p className="text-[18px] md:text-[20px] font-light text-[#999] max-w-[600px] mx-auto mt-[30px] leading-relaxed">
              Crafting digital experiences with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-[20px] mt-[80px]">
              <a
                href="mailto:itzhassanraza276@gmail.com"
                className="group inline-flex items-center gap-[12px] bg-[#1a1a1a] text-white px-[40px] py-[16px] hover:bg-[#333] transition-all duration-300 text-[14px] font-normal tracking-[1px] uppercase"
              >
                Get In Touch
                <ArrowRight
                  size={18}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </a>
              <button
                onClick={generatePDF}
                className="inline-flex items-center gap-[12px] border-2 border-[#1a1a1a] text-[#1a1a1a] px-[40px] py-[16px] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 text-[14px] font-normal tracking-[1px] uppercase"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
            <div className="flex justify-center mt-[100px]">
              <button
                onClick={() => scrollToTab('about')}
                className="text-[#999] hover:text-[#1a1a1a] transition-colors animate-bounce"
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
        ref={(el) => (sectionRefs.current['about'] = el)}
        className="min-h-screen flex items-center py-[120px] bg-white"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="grid md:grid-cols-2 gap-[120px] items-center">
            <div>
              <h2 className="text-[80px] md:text-[100px] font-light text-[#1a1a1a] mb-[60px] tracking-[-2px]">
                About
              </h2>
              <div className="w-[60px] h-[1px] bg-[#1a1a1a] mb-[60px]" />
            </div>
            <div className="space-y-[30px]">
              <p className="text-[20px] font-light text-[#666] leading-[1.8]">
                Results-driven Full Stack Developer with 4+ years of
                professional experience in designing, developing, and deploying
                scalable web applications.
              </p>
              <p className="text-[20px] font-light text-[#666] leading-[1.8]">
                Expert in modern JavaScript frameworks (React.js, Next.js,
                Node.js, Nest.js) and full MERN/PERN stack development. Proven
                track record of successfully delivering complex enterprise-level
                projects including ERP systems, admission portals, e-commerce
                platforms, and real-time management systems.
              </p>
              <div className="pt-[40px] space-y-[20px]">
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-[#1a1a1a] rounded-full" />
                  <span className="text-[#666] font-light text-[18px]">
                    4+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-[#1a1a1a] rounded-full" />
                  <span className="text-[#666] font-light text-[18px]">
                    20+ Projects Completed
                  </span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] bg-[#1a1a1a] rounded-full" />
                  <span className="text-[#666] font-light text-[18px]">
                    MERN & PERN Stack Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-screen flex items-center py-[120px] bg-[#fafafa]">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="text-center mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-light text-[#1a1a1a] mb-[40px] tracking-[-2px]">
              Skills
            </h2>
            <div className="w-[60px] h-[1px] bg-[#1a1a1a] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-[80px]">
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
              <div key={index} className="space-y-[30px]">
                <h3 className="text-[28px] font-light text-[#1a1a1a] border-b border-[#e5e5e5] pb-[20px]">
                  {category.title}
                </h3>
                <ul className="space-y-[16px]">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[#666] font-light text-[18px] flex items-center gap-[12px]"
                    >
                      <div className="w-[4px] h-[4px] bg-[#1a1a1a] rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Page/Tab */}
      <div
        id="experience"
        ref={(el) => (sectionRefs.current['experience'] = el)}
        className="min-h-screen flex items-center py-[120px] bg-white"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-light text-[#1a1a1a] mb-[40px] tracking-[-2px]">
              Experience
            </h2>
            <div className="w-[60px] h-[1px] bg-[#1a1a1a]" />
          </div>
          <div className="space-y-[80px]">
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
                className="border-l-2 border-[#e5e5e5] pl-[60px] relative"
              >
                <div className="absolute -left-[7px] top-0 w-[14px] h-[14px] bg-white border-2 border-[#1a1a1a] rounded-full" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-[30px]">
                  <div>
                    <h3 className="text-[36px] font-light text-[#1a1a1a] mb-[12px]">
                      {exp.title}
                    </h3>
                    <p className="text-[24px] text-[#666] font-light mb-[8px]">
                      {exp.company}
                    </p>
                    <p className="text-[16px] text-[#999] font-light flex items-center gap-[8px]">
                      <MapPin size={16} />
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-[16px] text-[#999] font-light mt-[20px] md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-[12px] mt-[30px]">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-[#666] font-light text-[18px] flex items-start gap-[16px]"
                    >
                      <div className="w-[6px] h-[6px] bg-[#999] rounded-full mt-[8px] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Page/Tab */}
      <div
        id="projects"
        ref={(el) => (sectionRefs.current['projects'] = el)}
        className="min-h-screen flex items-center py-[120px] bg-[#fafafa]"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-light text-[#1a1a1a] mb-[40px] tracking-[-2px]">
              Projects
            </h2>
            <div className="w-[60px] h-[1px] bg-[#1a1a1a]" />
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
                className="bg-white p-[50px] border border-[#e5e5e5] hover:border-[#1a1a1a] transition-all duration-300 group"
              >
                <h3 className="text-[32px] font-light text-[#1a1a1a] mb-[20px] group-hover:text-[#666]">
                  {project.title}
                </h3>
                <p className="text-[#666] font-light mb-[30px] leading-[1.8] text-[18px]">
                  {project.description}
                </p>
                <div className="mb-[30px]">
                  <p className="text-[12px] font-light text-[#999] uppercase tracking-[2px] mb-[12px]">
                    Tech Stack
                  </p>
                  <p className="text-[16px] text-[#1a1a1a] font-light">
                    {project.tech}
                  </p>
                </div>
                <ul className="space-y-[12px]">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-[#666] font-light text-[16px] flex items-center gap-[12px]"
                    >
                      <div className="w-[4px] h-[4px] bg-[#1a1a1a] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="min-h-screen flex items-center py-[120px] bg-white">
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-light text-[#1a1a1a] mb-[40px] tracking-[-2px]">
              Education
            </h2>
            <div className="w-[60px] h-[1px] bg-[#1a1a1a]" />
          </div>
          <div className="max-w-[1000px]">
            <div className="border-l-2 border-[#e5e5e5] pl-[60px] relative">
              <div className="absolute -left-[7px] top-0 w-[14px] h-[14px] bg-white border-2 border-[#1a1a1a] rounded-full" />
              <h3 className="text-[36px] font-light text-[#1a1a1a] mb-[12px]">
                Bachelor of Science in Computer Science (BSCS)
              </h3>
              <p className="text-[24px] text-[#666] font-light mb-[8px]">
                Muhammad Nawaz Sharif University of Engineering & Technology,
                Multan
              </p>
              <p className="text-[16px] text-[#999] font-light mb-[30px]">
                2021 - 2025
              </p>
              <p className="text-[#666] font-light leading-[1.8] text-[18px]">
                Comprehensive computer science education covering software
                engineering, data structures, algorithms, database systems, and
                web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Page/Tab */}
      <div
        id="contact"
        ref={(el) => (sectionRefs.current['contact'] = el)}
        className="min-h-screen flex items-center py-[120px] bg-[#1a1a1a] text-white"
      >
        <div className="max-w-[1920px] mx-auto px-[60px] w-full">
          <div className="mb-[100px]">
            <h2 className="text-[80px] md:text-[100px] font-light mb-[40px] tracking-[-2px]">
              Contact
            </h2>
            <div className="w-[60px] h-[1px] bg-white" />
          </div>
          <div className="grid md:grid-cols-2 gap-[120px]">
            <div>
              <p className="text-[20px] font-light text-[#999] mb-[60px] leading-[1.8]">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>
            <div className="space-y-[40px]">
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
                    className={`flex items-start gap-[24px] group ${
                      contact.href ? 'hover:text-[#999] transition-colors' : ''
                    }`}
                  >
                    <contact.icon size={24} className="text-[#666] mt-[4px]" />
                    <div>
                      <div className="text-[12px] font-light text-[#666] uppercase tracking-[2px] mb-[8px]">
                        {contact.label}
                      </div>
                      <div className="text-[18px] font-light">
                        {contact.value}
                      </div>
                    </div>
                  </Component>
                );
              })}
              <div className="flex gap-[24px] pt-[40px]">
                <a
                  href="https://linkedin.com/in/hassan-raza-42280221b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666] hover:text-white transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/hassan-raza-111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666] hover:text-white transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://github.com/hassan-raza123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666] hover:text-white transition-colors"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#333] py-[60px]">
        <div className="max-w-[1920px] mx-auto px-[60px]">
          <div className="text-center">
            <p className="text-[#666] font-light text-[14px]">
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
