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
      title: "E-Commerce Platform",
      category: "Product Design",
      role: "Full-Stack Developer & UI/UX Designer",
      image: "/images/project-01.png",
      logo: "ECOM",
      link: "#",
      description: "A comprehensive e-commerce solution with modern design and seamless user experience",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024"
    },
    {
      title: "Task Management App",
      category: "UX Design",
      role: "Product Designer & Frontend Developer",
      image: "/images/project-02.png",
      logo: "TASK",
      link: "#",
      description: "Collaborative task management with real-time updates and intuitive interface",
      technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
      year: "2024"
    },
    {
      title: "Portfolio Website",
      category: "Design System",
      role: "UI/UX Designer & Developer",
      image: "/images/project-03.png",
      logo: "PORT",
      link: "#",
      description: "Modern portfolio website with custom design system and smooth animations",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      year: "2024"
    },
    {
      title: "Mobile Banking App",
      category: "Product Design",
      role: "UX Designer & Product Manager",
      image: "/images/project-04.png",
      logo: "BANK",
      link: "#",
      description: "Secure mobile banking application with focus on user experience and accessibility",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      year: "2023"
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
                    We specialize in{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      UI/UX Design
                    </span>
                    , Web Development, Digital Marketing.
                  </h1>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. 
                    Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
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
                    <a href="tel:+1234567890" className="font-semibold hover:text-blue-400 transition-colors">
                      Call us (0123) 456 – 789
                    </a>
                    <span>For any question or concern</span>
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
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-slate-300">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
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
                <h3 className="text-xl font-bold text-white mb-4">Take Ownership</h3>
                <p className="text-slate-300">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
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
                <h3 className="text-xl font-bold text-white mb-4">Team Work</h3>
                <p className="text-slate-300">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
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
                  <h4 className="text-blue-600 font-semibold text-lg">Why Choose Us</h4>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    We Make Our customers happy by giving Best services.
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    It is a long established fact that a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem Ipsum.
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
                    SEE HOW WE WORK
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
                Our Latest Projects
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. 
                Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@example.com" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Get In Touch
        </a>
                <a 
                  href="tel:+1234567890" 
                  className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-400 transition-all duration-300"
                >
                  Call Us Now
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
            <p className="text-slate-400 mb-4">
              © 2024 Shubham. All rights reserved.
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