'use client';

import { useState, useEffect } from 'react';
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
} from 'lucide-react';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HR
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                'home',
                'about',
                'skills',
                'experience',
                'projects',
                'education',
                'contact',
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={generatePDF}
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {[
                'home',
                'about',
                'skills',
                'experience',
                'projects',
                'education',
                'contact',
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={generatePDF}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full justify-center mt-4"
              >
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hassan Raza
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-6">
              Senior Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              MERN & PERN Stack Specialist | 4+ Years of Experience | Building
              Scalable Web Applications
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:itzhassanraza276@gmail.com"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href="https://linkedin.com/in/hassan-raza-42280221b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/hassan-raza-111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => scrollToSection('about')}
                className="animate-bounce text-gray-600 hover:text-blue-600"
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Results-driven Full Stack Developer with 4+ years of professional
              experience in designing, developing, and deploying scalable web
              applications. Expert in modern JavaScript frameworks (React.js,
              Next.js, Node.js, Nest.js) and full MERN/PERN stack development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proven track record of successfully delivering complex
              enterprise-level projects including ERP systems, admission
              portals, e-commerce platforms, and real-time management systems.
              Strong background in both frontend and backend development with
              expertise in database design, REST APIs, and cloud deployment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  20+
                </div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-700">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Code size={24} className="text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Frontend
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'TypeScript',
                  'React.js',
                  'Next.js',
                  'Redux',
                  'Tailwind CSS',
                  'Bootstrap',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={24} className="text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-800">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Node.js',
                  'Nest.js',
                  'PHP',
                  'Laravel',
                  'Express.js',
                  'REST APIs',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Award size={24} className="text-green-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Databases
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'MySQL', 'PostgreSQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={24} className="text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Tools & Others
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'AWS',
                  'Git/GitHub',
                  'React Native',
                  'jQuery',
                  'AJAX',
                  'Adobe Photoshop',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Code size={24} className="text-red-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'PHP', 'C', 'C++'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Award size={24} className="text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Specializations
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MERN Stack', 'PERN Stack', 'Full Stack', 'SQA'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative pl-8 border-l-4 border-blue-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Next.js Developer
                    </h3>
                    <p className="text-blue-600 font-medium text-lg">
                      KK IT Solutions Pvt LTD
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      Multan, Punjab, Pakistan
                    </p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">
                    Oct 2023 - Present
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>
                    Spearheaded migration of legacy PHP systems to modern
                    Next.js architecture
                  </li>
                  <li>
                    Led development of JanJapan Cars System using Next.js and
                    Nest.js
                  </li>
                  <li>
                    Developed AI-powered chatbot system integrated with Next.js
                  </li>
                  <li>Architected and deployed scalable REST APIs</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-4 border-blue-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Senior Laravel Developer
                    </h3>
                    <p className="text-blue-600 font-medium text-lg">
                      KK IT Solutions Pvt LTD
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      Multan, Punjab, Pakistan
                    </p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">
                    Apr 2022 - Sep 2023
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>
                    Developed OrderTik platform (
                    <a
                      href="https://jalal.ordertik.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      jalal.ordertik.com
                    </a>
                    ) with comprehensive order management
                  </li>
                  <li>
                    Built driver management system with real-time location
                    tracking
                  </li>
                  <li>
                    Created responsive admin dashboards for fleet management
                  </li>
                  <li>
                    Optimized database queries resulting in 40% faster load
                    times
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-4 border-blue-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Software Developer
                    </h3>
                    <p className="text-blue-600 font-medium text-lg">
                      KK IT Solutions Pvt LTD
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      Multan, Punjab, Pakistan
                    </p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">
                    Aug 2021 - Present
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Full-stack development using MERN and PERN stack</li>
                  <li>
                    Developed React Native mobile application (2-3 months)
                  </li>
                  <li>Collaborated with cross-functional teams</li>
                  <li>Conducted code reviews and mentored junior developers</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-4 border-purple-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      PHP Developer
                    </h3>
                    <p className="text-purple-600 font-medium text-lg">
                      Pro Tech Giant (Pvt.) Ltd.
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      Multan, Punjab, Pakistan
                    </p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">
                    Mar 2021 - Jul 2021
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>
                    Developed custom PHP solutions and dynamic web applications
                  </li>
                  <li>
                    Integrated MySQL databases with secure backend systems
                  </li>
                  <li>Implemented RESTful APIs for third-party integrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {
                title: 'AI Chatbot System',
                description:
                  'Intelligent chatbot for automated customer support.',
                tech: 'Next.js, Node.js, AI APIs',
                features: [
                  'NLP integration',
                  'Contextual conversations',
                  'Admin panel',
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    TECH STACK:
                  </p>
                  <p className="text-sm text-blue-600">{project.tech}</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Bachelor of Science in Computer Science (BSCS)
                  </h3>
                  <p className="text-blue-600 font-medium text-lg mb-2">
                    Muhammad Nawaz Sharif University of Engineering &
                    Technology, Multan
                  </p>
                  <p className="text-gray-600 mb-3">2021 - 2025</p>
                  <p className="text-gray-700">
                    Comprehensive computer science education covering software
                    engineering, data structures, algorithms, database systems,
                    and web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:itzhassanraza276@gmail.com"
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:bg-white/20 transition-all flex items-center gap-4"
              >
                <Mail size={32} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-blue-100">
                    itzhassanraza276@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="tel:+923297901828"
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:bg-white/20 transition-all flex items-center gap-4"
              >
                <Phone size={32} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-blue-100">+92 329 7901828</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/hassan-raza-42280221b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:bg-white/20 transition-all flex items-center gap-4"
              >
                <Linkedin size={32} />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-blue-100">
                    linkedin.com/in/hassan-raza
                  </div>
                </div>
              </a>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg flex items-center gap-4">
                <MapPin size={32} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-blue-100">
                    Multan, Punjab, Pakistan
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-blue-100 mb-4">Also available on:</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/hassan-raza-111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md p-4 rounded-lg hover:bg-white/20 transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://github.com/hassan-raza123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md p-4 rounded-lg hover:bg-white/20 transition-all"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Hassan Raza. Available for freelance projects and full-time
            opportunities.
          </p>
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
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
