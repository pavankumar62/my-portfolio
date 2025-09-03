import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Mail, Github, Linkedin, ExternalLink, Calendar, MapPin, ArrowRight, Code, Database, Cloud, Zap } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
    frameworks: ['Spring Boot', 'React', 'Angular', 'Node.js', 'Redux', 'Hibernate'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Oracle'],
    cloud: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab']
  };

  const experiences = [
    {
      company: 'NextGen Health Care',
      role: 'Senior Software Developer',
      period: 'Apr 2023 – Present',
      location: 'Atlanta, GA',
      description: 'Built and enhanced a healthcare platform that streamlined patient record management, prescriptions, and provider communications. Designed microservices with Spring Boot, implemented real-time notifications via Kafka, and developed reusable ReactJS components. Leveraged AWS and Terraform to deploy scalable, secure solutions that improved care coordination across hospitals and clinics.',
      tags: ['React', 'Java', 'AWS', 'Kafka', 'Redux']
    },
    {
      company: 'BMO Harris Bank',
      role: 'Software Developer',
      period: 'Feb 2021 – Mar 2023',
      location: 'Chicago, IL',
      description: 'Modernized the bank’s digital platform, improving transaction transparency and fraud detection. Delivered secure microservices with Spring Boot and Angular apps with dynamic workflows. Implemented real-time transaction streams with Kafka and optimized PostgreSQL and Cassandra databases. Automated deployments on Azure with Terraform and Jenkins, ensuring compliance with strict banking standards.',
      tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Kafka']
    },
    {
      company: 'Starbucks',
      role: 'Software Developer',
      period: 'Sep 2019 – Jan 2021',
      location: 'Seattle, WA',
      description: 'Transformed Starbucks’ inventory and supply chain by migrating from monolithic systems to microservices. Developed Spring Boot services, real-time dashboards in Angular, and optimized data access with MySQL and Redis. Enhanced reliability with RabbitMQ for asynchronous messaging and AWS ECS for scalable deployments, enabling predictive restocking and real-time logistics tracking across stores.',
      tags: ['Microservices', 'Angular', 'GCP', 'GitLab']
    },
    {
      company: 'HashTag Technologies',
      role: 'Software Developer',
      period: 'Jul 2017 – Aug 2019',
      location: 'Coimbatore, India',
      description: 'Contributed to enterprise solutions in logistics, CRM, and HRMS for SMB clients. Built REST APIs with Spring Boot, integrated ReactJS frontends, and implemented RabbitMQ messaging. Improved database performance with Oracle and MongoDB. Automated deployments with AWS CloudFormation, supported Agile teams, and gained strong foundations in secure coding and DevOps practices.',
      tags: ['Spring Boot', 'React', 'AWS', 'RabbitMQ']
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <div className={`group relative p-6 rounded-2xl bg-gradient-to-br ${color} backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/20">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  const ExperienceCard = ({ experience, index }) => (
    <div className={`group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {experience.role}
          </h3>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 sm:text-right">
          <div className="flex items-center gap-1 mb-1">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sai Pavan Kumar
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === section 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Hi, I'm Sai
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              Senior Software Developer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              8+ years of experience crafting enterprise-grade applications in healthcare, banking, and retail industries
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/Sai Pavan Kumar Gundapaneni RESUME.docx"
              download
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:saipavankumar2703@gmail.com" className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110 transition-transform shadow-lg">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="www.linkedin.com/in/sai-pavan-kumar-gundapaneni" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110 transition-transform shadow-lg">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://github.com/pavankumar62" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110 transition-transform shadow-lg">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a results-driven Senior Software Developer with over 8 years of experience designing, developing, and deploying enterprise-grade applications across healthcare, banking, and retail industries.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Highly skilled in Java, Spring Boot, ReactJS, RESTful APIs, microservices, and cloud platforms like AWS and Azure. I thrive in Agile environments and enjoy collaborating with cross-functional teams.
                </p>
                <div className="pt-4">
  <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg max-w-xs mx-auto">
    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">8+</div>
    <div className="text-base text-gray-600 dark:text-gray-400">Years Experience</div>
  </div>
</div>
              </div>
              <div className="relative">
  <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-2 shadow-2xl">
    <div className="w-full h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm">
      <img 
        src="/Profile-photo.jpg" 
        alt="Sai Pavan Kumar - Full Stack Java Developer"
        className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          // Fallback if image doesn't load
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-white">SPK</div>';
        }}
      />
    </div>
    {/* Decorative gradient overlay */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
  </div>
  
  {/* Optional: Floating elements around the image */}
  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 hidden md:block"></div>
              
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden md:block"></div>
                    <ExperienceCard experience={experience} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <SkillCard
              icon={Code}
              title="Languages"
              skills={skills.languages}
              color="from-blue-500 to-blue-700"
            />
            <SkillCard
              icon={Zap}
              title="Frameworks"
              skills={skills.frameworks}
              color="from-purple-500 to-purple-700"
            />
            <SkillCard
              icon={Database}
              title="Databases"
              skills={skills.databases}
              color="from-indigo-500 to-indigo-700"
            />
            <SkillCard
              icon={Cloud}
              title="Cloud & DevOps"
              skills={skills.cloud}
              color="from-cyan-500 to-cyan-700"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:saipavankumar2703@gmail.com"
                className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">saipavankumar2703@gmail.com</p>
              </a>
              
              <a
                href="www.linkedin.com/in/sai-pavan-kumar-gundapaneni"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                  Connect with me
                  <ExternalLink className="w-4 h-4" />
                </p>
              </a>
              
              <a
                href="https://github.com/pavankumar62"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                  View my work
                  <ExternalLink className="w-4 h-4" />
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sai Pavan Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}