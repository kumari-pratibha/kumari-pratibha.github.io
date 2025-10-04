'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
      
      // Detect active section based on scroll position
      const sections = ['home', 'about', 'process', 'projects', 'skills', 'contact'];
      const scrollPosition = window.pageYOffset + 100; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "prompt2API - A Platform to create API using AI",
      categories: ["Product & Interface Design"],
      role: "Product Designer",
      image: "/images/project-1.png",
      link: "https://www.behance.net/gallery/234424951/prompt2API-A-Platform-to-create-API-using-AI",
      description: "End-to-end API management platform that helps teams create, test, and deploy APIs with AI-assisted workflows and guided UI patterns like wizard steppers and contextual help.",
      labels: ["B2B Platform", "AI Integration", "Enterprise", "SaaS"]
    },
    {
      title: "Dashboard - First Purchase Funnel",
      categories: ["Product & Interface Design"],
      role: "Product Designer",
      image: "/images/project-02.png",
      link: "https://www.behance.net/gallery/234780151/Dashboard-First-Purchase-Funnel",
      description: "Conversational API assistant that converts technical flows into natural language interactions to reduce cognitive load for developers and architects.",
      labels: ["AI Assistant", "Conversational UI", "Developer Tools", "NLP"]
    },
    {
      title: "DinEzee - Restaurant Menu App",
      categories: ["Case Studies"],
      role: "Product Designer",
      image: "/images/project-03.png",
      link: "https://www.behance.net/gallery/187294427/DinEzee-restaurant-menu-app",
      description: "A progressive sandbox for prototyping, testing and validating APIs—built with accessibility and a scalable design system in mind.",
      labels: ["Sandbox", "Testing Platform", "Accessibility", "Design System"]
    },
    {
      title: "Blipp - A solution to simplify your Scroll",
      categories: ["Product & Interface Design"],
      role: "UI/UX Designer",
      image: "/images/project-04.png",
      link: "https://www.behance.net/gallery/234483831/Blipp-A-solution-to-simplify-your-Scroll",
      description: "Data-centric dashboards for enterprise customers focused on clarity, efficiency and improved workflows through better information architecture and visualizations.",
      labels: ["Data Visualization", "Enterprise", "Dashboard", "Analytics"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const categories = ['All', 'Case Studies', 'Product & Interface Design'];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        stickyMenu 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center py-4">
              <div className="flex items-center">
                <a href="/" className="flex items-center" aria-label="Home">
        <Image
                    src="/images/logo.png"
                    alt="Kumari Pratibha logo"
                    width={45}
                    height={45}
                  />
                </a>
              </div>

              {/* Spacer to push navigation to the right */}
              <div className="flex-1"></div>

              {/* Desktop Navigation - Far Right Aligned */}
              <nav className="hidden md:flex items-center space-x-8" aria-label="Primary">
                <a 
                  href="#home" 
                  className={`transition-colors font-normal ${
                    activeSection === 'home' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className={`transition-colors font-normal ${
                    activeSection === 'about' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  About
                </a>
                <a 
                  href="#process" 
                  className={`transition-colors font-normal ${
                    activeSection === 'process' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Process
                </a>
                <a 
                  href="#projects" 
                  className={`transition-colors font-normal ${
                    activeSection === 'projects' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  className={`transition-colors font-normal ${
                    activeSection === 'skills' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Skills
                </a>
                <a 
                  href="#contact" 
                  className={`transition-colors font-normal ${
                    activeSection === 'contact' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Menu Button - Far Right */}
              <button
                onClick={() => setNavigationOpen(!navigationOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle navigation"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          {/* Mobile Navigation */}
          {navigationOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4" aria-label="Mobile">
                <a 
                  href="#home" 
                  className={`transition-colors font-normal ${
                    activeSection === 'home' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className={`transition-colors font-normal ${
                    activeSection === 'about' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  About
                </a>
                <a 
                  href="#process" 
                  className={`transition-colors font-normal ${
                    activeSection === 'process' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Process
                </a>
                <a 
                  href="#projects" 
                  className={`transition-colors font-normal ${
                    activeSection === 'projects' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  className={`transition-colors font-normal ${
                    activeSection === 'skills' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Skills
                </a>
                <a 
                  href="#contact" 
                  className={`transition-colors font-normal ${
                    activeSection === 'contact' 
                      ? 'text-pink-500 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute inset-0 -z-10" aria-hidden>
            <Image 
              src="/images/shape-01.svg" 
              alt="" 
              className="absolute top-20 left-10 w-32 h-32 opacity-20"
              width={128}
              height={128}
            />
            <Image 
              src="/images/shape-02.svg" 
              alt="" 
              className="absolute top-40 right-20 w-24 h-24 opacity-20"
              width={96}
              height={96}
            />
            <Image
              src="/images/shape-03.svg" 
              alt="" 
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
                  <h1 className="text-3xl lg:text-5xl font-normal text-gray-900 leading-tight">
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 font-semibold">
                      Kumari Pratibha
                    </span>
                    , a Product Designer turning empathy into intutive design.
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  With 6+ years of experience, I specialize in translating complex workflows into intuitive, user-centered interfaces. I focus on user research, design systems, and accessible, cross-platform experiences that improve usability and drive measurable business outcomes.
                  </p>
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
                    alt="Illustration showing product design concept" 
                    className="w-full h-auto"
                    width={600}
                    height={500}
                  />
              
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="py-16 lg:py-32 bg-gray-50">
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
                      src="/images/about-01.png" 
                      alt="Project thumbnail" 
                      className="w-full h-64 object-cover rounded-2xl"
                      width={300}
                      height={256}
                    />
                  
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="w-16 h-16 mb-8"></div>
                    <Image 
                      src="/images/about-02.png" 
                      alt="Project thumbnail" 
                      className="w-full h-48 object-cover rounded-2xl"
                      width={300}
                      height={192}
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
                  <h4 className="text-pink-500 font-normal text-lg">About Me</h4>
                  <h2 className="text-4xl lg:text-5xl font-normal text-gray-900">
                    Product Designer focused on clarity, usability and scalable systems.
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I turn complex workflows into clear, human-centered products. My strengths include user research, interaction design, information architecture, and building design systems that speed delivery and ensure accessibility.
                  </p>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section id="process" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
                My Design Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic approach to creating user-centered solutions that balance business goals with user needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1: Research */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-transparent border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>

                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Research & Discovery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  User interviews, competitive analysis, and stakeholder alignment to understand the problem space and user needs.
                </p>
              </motion.div>

              {/* Step 2: Ideate */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                <div className="w-20 h-20 bg-transparent border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Ideate & Conceptualize</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Brainstorming sessions, user journey mapping, and rapid prototyping to explore multiple solution directions.
                </p>
              </motion.div>

              {/* Step 3: Design */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                <div className="w-20 h-20 bg-transparent border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Design & Prototype</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High-fidelity designs, interactive prototypes, and design system implementation for scalable solutions.
                </p>
              </motion.div>

              {/* Step 4: Test & Iterate */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                <div className="w-20 h-20 bg-transparent border-2 border-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Test & Iterate</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Usability testing, user feedback collection, and iterative improvements based on real user data.
                </p>
              </motion.div>
            </div>

            {/* Process Flow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-normal text-gray-900 mb-4">Collaborative Approach</h3>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  I work closely with product managers, developers, and stakeholders throughout the entire process. 
                  This ensures that design decisions are technically feasible, aligned with business goals, and 
                  deliver real value to users. Regular check-ins and cross-functional collaboration are key to 
                  creating successful products.
                </p>
              </div>
            </motion.div>
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
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
                Selected Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A selection of recent work highlighting product design, UX and system thinking.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-normal transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-white border-2 border-pink-500 text-black font-medium ring-2 ring-pink-500 ring-offset-2'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-transparent'
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
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') window.open(project.link, '_blank'); }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={400}
                        height={256}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-normal text-gray-900 group-hover:text-pink-500 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      
                      
                      <p className="text-gray-500 text-sm mb-2 font-normal">Description</p>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>

                      {/* Labels */}
                      <div className="mb-4">
                        <p className="text-gray-500 text-sm mb-2 font-normal">Tags</p>
                        <div className="flex flex-wrap gap-2">
                          {project.labels.map((label, labelIndex) => (
                            <span
                              key={labelIndex}
                              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-normal"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="pt-4 border-t border-gray-200">
                        <a 
                          href={project.link}
            target="_blank"
            rel="noopener noreferrer"
                          className="flex items-center text-pink-500 text-sm font-normal hover:text-pink-600 transition-colors duration-300"
                        >
                          <span>View project</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

         {/* Skills Section */}
        <section id="skills" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A balanced toolkit for research, interaction design and implementation — from concept to handoff.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Design Tools */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-pink-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Design Tools</h3>
                <div className="space-y-2">
                  <span className="block text-gray-600 text-sm font-normal">Figma</span>
                  <span className="block text-gray-600 text-sm font-normal">Adobe XD</span>
                </div>
              </motion.div>

              {/* AI Prototyping */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-pink-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">AI Prototyping</h3>
                <div className="space-y-2">
                  <span className="block text-gray-600 text-sm font-normal">Lovable</span>
                  <span className="block text-gray-600 text-sm font-normal">Bolt</span>
                </div>
              </motion.div>

              {/* Research & Testing */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-pink-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Research & Testing</h3>
                <div className="space-y-2">
                  <span className="block text-gray-600 text-sm font-normal">User Research</span>
                  <span className="block text-gray-600 text-sm font-normal">Usability Testing</span>
                  <span className="block text-gray-600 text-sm font-normal">A/B Testing</span>
                  <span className="block text-gray-600 text-sm font-normal">Journey Mapping</span>
                </div>
              </motion.div>

              {/* Design Process */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-pink-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Design Process</h3>
                <div className="space-y-2">
                  <span className="block text-gray-600 text-sm font-normal">Wireframing</span>
                  <span className="block text-gray-600 text-sm font-normal">Prototyping</span>
                  <span className="block text-gray-600 text-sm font-normal">Design Systems</span>
                  <span className="block text-gray-600 text-sm font-normal">Accessibility</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-6 lg:py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
                Let's Design Better Experiences
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Reach out for collaborations, discussions, or sharing thoughts on building impactful products.
              </p>
              <p className="text-lg text-gray-900 mb-6 max-w-2xl mx-auto">
                <span className="text-pink-500 font-normal">prtbh1996@gmail.com</span>
              </p>
             
            </motion.div>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://linkedin.com/in/kumaripratibha02" 
          target="_blank"
          rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
        </a>
        <a
                href="https://behance.net/pratibhaagrawal" 
          target="_blank"
          rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label="Behance"
              >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 150 100" aria-hidden>
                        <g clipPath="url(#clip0_2443_247)">
                          <path d="M43.467 1.19594e-05C47.542 1.19594e-05 51.6171 0.388711 55.4981 1.16611C58.7969 1.94352 61.9017 3.30397 64.8124 5.24748C67.3351 7.19099 69.4696 9.71756 70.8279 12.6328C72.3803 16.3255 73.1565 20.2125 72.9625 24.0995C73.1565 28.3752 71.9922 32.651 69.8577 36.3436C67.5291 39.8419 64.2303 42.5629 60.5433 44.312C65.7827 45.6725 70.2458 48.9764 73.1565 53.2521C76.0673 57.9166 77.4256 63.3584 77.4256 68.8002C77.4256 73.2703 76.6494 77.546 74.7089 81.433C72.9625 84.9313 70.4398 87.8466 67.5291 90.3732C64.4243 92.7054 60.7374 94.4545 57.0505 95.4263C53.1695 96.5924 49.0944 96.9811 45.0194 96.9811H0V-0.194336H43.467V1.19594e-05ZM40.7503 39.2589C43.8551 39.4532 47.1539 38.4815 49.6766 36.538C52.1992 34.4001 53.5576 31.0961 53.1695 27.5978C53.1695 25.6543 52.7814 23.7108 52.0052 21.9617C51.229 20.6012 50.2587 19.4351 48.9004 18.6577C47.542 17.8803 45.9897 17.1029 44.4373 16.9085C42.6908 16.5198 40.9444 16.5198 39.1979 16.5198H20.1811V39.2589H40.7503ZM41.9146 80.85C43.8551 80.85 45.7956 80.6556 47.542 80.2669C49.2885 79.8782 50.8409 79.1008 52.3933 78.1291C53.7516 77.1573 54.9159 75.7968 55.6921 74.242C56.6623 72.2985 57.0505 70.1607 56.8564 68.0228C57.2445 63.9414 55.6921 60.0544 52.7814 57.3335C49.6766 55.0013 45.9896 54.0295 42.1087 54.2239H20.1811V81.0443H41.9146V80.85Z"/>
                          <path d="M106.145 80.4612C109.444 83.3765 113.713 84.9313 117.982 84.737C121.475 84.737 124.774 83.7652 127.49 81.8217C129.819 80.2669 131.371 78.129 132.342 75.6025H148.448C146.701 82.7935 142.432 89.207 136.611 93.6771C130.983 97.5641 124.191 99.3133 117.206 99.1189C112.354 99.1189 107.503 98.3415 102.846 96.398C98.771 94.6489 95.0841 92.1223 92.1733 88.8183C89.2626 85.32 86.934 81.433 85.3816 77.1573C83.6352 72.2985 82.859 67.2454 83.053 62.1923C83.053 57.1392 83.8292 52.2804 85.5757 47.4216C90.2328 33.8171 103.04 24.6826 117.4 24.8769C122.639 24.6826 127.684 26.043 132.342 28.3752C136.417 30.7074 140.103 33.8171 142.82 37.7041C145.537 41.7854 147.671 46.2555 148.642 51.1143C149.806 56.1674 150.194 61.6092 150 66.8567H101.876C101.294 71.7155 102.846 76.5742 106.145 80.4612ZM127.102 43.3402C124.385 40.6193 120.699 39.2589 116.818 39.4532C114.295 39.4532 111.772 39.8419 109.638 41.008C107.891 41.9798 106.339 43.3402 104.981 44.895C103.816 46.4499 103.04 48.0047 102.458 49.9482C102.07 51.503 101.682 53.0578 101.682 54.6126H131.565C131.177 50.5312 129.625 46.6442 127.102 43.3402Z"/>
                          <path d="M135.058 6.4136H97.8008V15.9368H135.058V6.4136Z"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2443_247">
                            <rect width="150" height="99.1189" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
        </a>
        <a
                href="mailto:prtbh1996@gmail.com" 
                className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            <p className="text-gray-600 mb-4">
              © 2025 Kumari Pratibha. All rights reserved.
            </p>
        
          </div>
        </div>
      </footer>
    </div>
  );
}
