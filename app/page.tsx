'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "API Manager Platform",
      category: "Product Design",
      role: "Product Designer",
      image: "/images/project-01.png",
      logo: "API",
      link: "#",
      description: "End-to-end API management platform enabling users to create APIs with AI, publish them on servers, and deploy seamlessly across gateways. Improved usability through intuitive UI patterns like wizard steppers and contextual help guides.",
      technologies: ["Figma", "User Research", "Design System", "AI Integration"],
      year: "2024"
    },
    {
      title: "ASH Assistant",
      category: "UX Design",
      role: "Product Designer",
      image: "/images/project-02.png",
      logo: "ASH",
      link: "#",
      description: "Conversational API interface that transforms technical workflows into natural, user-friendly interactions, reducing cognitive load for developers and architects.",
      technologies: ["Conversational UI", "User Flows", "Prototyping", "Figma"],
      year: "2024"
    },
    {
      title: "API Sandbox Platform",
      category: "Design System",
      role: "Product Designer",
      image: "/images/project-03.png",
      logo: "SAN",
      link: "#",
      description: "Progressive user experience platform for API prototyping, testing, and validation phases. Designed with scalable design system and accessibility guidelines.",
      technologies: ["Design System", "Accessibility", "Wireframing", "User Testing"],
      year: "2024"
    },
    {
      title: "Enterprise Dashboards",
      category: "Product Design",
      role: "UI/UX Designer",
      image: "/images/project-04.png",
      logo: "ENT",
      link: "#",
      description: "Multiple enterprise client dashboards focusing on data visualization and workflow efficiency. Specialized in design-first approach with seamless design-to-development integration.",
      technologies: ["Data Visualization", "Figma", "HTML", "CSS"],
      year: "2022"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['All', 'Product Design', 'Design System', 'UX Design', 'Branding'];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        stickyMenu 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
        <Image
                  src="/images/logo-dark.svg" 
                  alt="Logo" 
                  width={120}
                  height={40}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors font-medium">Home</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors font-medium">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get In Touch
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setNavigationOpen(!navigationOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {navigationOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-300 hover:text-white transition-colors font-medium">Home</a>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About</a>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors font-medium">Skills</a>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors font-medium">Projects</a>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/images/shape-01.svg" 
              alt="Shape" 
              className="absolute top-20 left-10 w-32 h-32 opacity-20"
              width={128}
              height={128}
            />
            <Image 
              src="/images/shape-02.svg" 
              alt="Shape" 
              className="absolute top-40 right-20 w-24 h-24 opacity-20"
              width={96}
              height={96}
            />
            <Image
              src="/images/shape-03.svg" 
              alt="Shape" 
              className="absolute bottom-20 left-1/4 w-40 h-40 opacity-20"
              width={160}
              height={160}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Kumari Pratibha
                    </span>
                    , Product Designer with 6+ years of experience.
                  </h1>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                    I specialize in translating complex workflows into intuitive, user-centered interfaces. 
                    Expert in user research, design systems, and creating seamless cross-platform experiences 
                    that improve usability and drive business growth.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#projects" 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25 text-center"
                  >
                    Get Started Now
                  </a>
                  <div className="flex items-center space-x-4 text-slate-300">
                    <a href="tel:+918018148972" className="font-semibold hover:text-blue-400 transition-colors">
                      Call me +91-8018148972
                    </a>
                    <span>For any project discussion</span>
                  </div>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <Image 
                    src="/images/hero.png" 
                    alt="Hero" 
                    className="w-full h-auto"
                    width={600}
                    height={500}
                  />
                  <Image 
                    src="/images/shape-04.svg" 
                    alt="Shape" 
                    className="absolute -top-10 -right-10 w-32 h-32 opacity-30"
                    width={128}
                    height={128}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/icon-01.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">User Research</h3>
                <p className="text-slate-300">In-depth user research with developers, architects, and stakeholders to identify pain points and translate them into actionable UI/UX solutions.</p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/icon-02.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Design Systems</h3>
                <p className="text-slate-300">Building scalable design systems from the ground up, establishing reusable components and accessibility guidelines that improve consistency and accelerate development.</p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/icon-03.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cross-functional Collaboration</h3>
                <p className="text-slate-300">Collaborating with product managers, developers, and architects to align design vision with technical feasibility and business goals.</p>
              </motion.div>
            </div>
        </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 lg:py-24 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Skills & Expertise
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                My comprehensive skill set spans across design tools, research methods, and development technologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Design Tools */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-700 rounded-2xl p-6 text-center group hover:bg-slate-600 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design Tools</h3>
                <div className="space-y-2">
                  <span className="block text-slate-300 text-sm">Figma</span>
                  <span className="block text-slate-300 text-sm">Adobe XD</span>
                  <span className="block text-slate-300 text-sm">Lovable</span>
                  <span className="block text-slate-300 text-sm">Bolt</span>
                </div>
              </motion.div>

              {/* Research & Testing */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700 rounded-2xl p-6 text-center group hover:bg-slate-600 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Research & Testing</h3>
                <div className="space-y-2">
                  <span className="block text-slate-300 text-sm">User Research</span>
                  <span className="block text-slate-300 text-sm">Usability Testing</span>
                  <span className="block text-slate-300 text-sm">A/B Testing</span>
                  <span className="block text-slate-300 text-sm">Journey Mapping</span>
                </div>
              </motion.div>

              {/* Design Process */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-700 rounded-2xl p-6 text-center group hover:bg-slate-600 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design Process</h3>
                <div className="space-y-2">
                  <span className="block text-slate-300 text-sm">Wireframing</span>
                  <span className="block text-slate-300 text-sm">Prototyping</span>
                  <span className="block text-slate-300 text-sm">Design Systems</span>
                  <span className="block text-slate-300 text-sm">Accessibility</span>
                </div>
              </motion.div>

              {/* Development */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-slate-700 rounded-2xl p-6 text-center group hover:bg-slate-600 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Development</h3>
                <div className="space-y-2">
                  <span className="block text-slate-300 text-sm">HTML</span>
                  <span className="block text-slate-300 text-sm">CSS</span>
                  <span className="block text-slate-300 text-sm">Design Integration</span>
                  <span className="block text-slate-300 text-sm">Responsive Design</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 lg:py-32 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* About Images */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Image 
                      src="/images/shape-05.svg" 
                      alt="Shape" 
                      className="w-20 h-20 opacity-30"
                      width={80}
                      height={80}
                    />
                    <Image 
                      src="/images/about-01.png" 
                      alt="About" 
                      className="w-full h-64 object-cover rounded-2xl"
                      width={300}
                      height={256}
                    />
                    <Image 
                      src="/images/about-02.png" 
                      alt="About" 
                      className="w-full h-48 object-cover rounded-2xl"
                      width={300}
                      height={192}
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <Image 
                      src="/images/shape-06.svg" 
                      alt="Shape" 
                      className="w-16 h-16 opacity-30"
                      width={64}
                      height={64}
                    />
                    <Image 
                      src="/images/about-03.png" 
                      alt="About" 
                      className="w-full h-48 object-cover rounded-2xl"
                      width={300}
                      height={192}
                    />
          <Image
                      src="/images/shape-07.svg" 
                      alt="Shape" 
                      className="w-24 h-24 opacity-30"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h4 className="text-blue-600 font-semibold text-lg">About Me</h4>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    Product Designer with 6+ years of experience creating exceptional user experiences.
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I specialize in translating complex workflows into intuitive, user-centered interfaces. 
                    With expertise in user research, interaction design, information architecture, and design systems, 
                    I've consistently improved usability and increased conversion rates across various platforms.
                  </p>
                </div>

                <a 
                  href="https://www.youtube.com/watch?v=xcJtL7QggTI" 
                  className="inline-flex items-center space-x-4 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    VIEW MY PORTFOLIO
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                My Recent Work
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Here are some of my recent projects showcasing my expertise in product design, 
                user experience, and design systems across various industries and platforms.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-slate-700">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
          <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={400}
                        height={256}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {project.year}
                        </span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                          View Project
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 ml-3">
                          <span className="text-white font-bold text-sm">{project.logo}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm mb-2 font-medium">Role</p>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.role}</p>
                      
                      <p className="text-slate-400 text-sm mb-2 font-medium">Description</p>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="mb-4">
                        <p className="text-slate-400 text-sm mb-2 font-medium">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-slate-700 text-slate-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                        <div className="flex items-center text-blue-500 text-sm font-semibold group-hover:text-blue-400 transition-colors duration-300">
                          <span>View details</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors duration-200">
                            <svg className="w-4 h-4 text-slate-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                          <button className="p-2 bg-slate-700 hover:bg-indigo-600 rounded-lg transition-colors duration-200">
                            <svg className="w-4 h-4 text-slate-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-32 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Let's Work Together
              </h2>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
                Ready to create exceptional user experiences? Let's discuss your next project 
                and see how I can help bring your ideas to life with thoughtful design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:prtbh1996@gmail.com" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Get In Touch
        </a>
        <a
                  href="tel:+918018148972" 
                  className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-400 transition-all duration-300"
                >
                  Call Me Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://linkedin.com/in/kumaripratibha02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://behance.net/pratibhaagrawal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.922 1.355-3.968.354-1.043-.999-1.03-2.664.354-3.968 1.297-.442 2.922-1.355 3.968-.354 1.043.999 1.03 2.664-.354 3.968zm-8.79-2.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zm-.5 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm-6.5-1c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-5.5 1.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5zm4.5-3.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z"/>
                </svg>
              </a>
              <a 
                href="mailto:prtbh1996@gmail.com" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            <p className="text-slate-400 mb-4">
              © 2024 Kumari Pratibha. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}