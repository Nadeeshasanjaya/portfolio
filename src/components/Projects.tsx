import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, Activity, Bot } from 'lucide-react';
const projects = [
{
  title: 'DevOps Portfolio Website',
  description:
  'A modern, responsive portfolio website designed to showcase DevOps skills, projects, and professional journey. Built with a focus on clean code and automated deployment.',
  tech: ['HTML', 'CSS', 'JavaScript', 'Docker', 'Jenkins', 'AWS'],
  icon: FolderGit2,
  color: 'text-emerald-400',
  bg: 'bg-emerald-500/10'
},
{
  title: 'Spring Boot CI/CD Pipeline',
  description:
  'An automated Continuous Integration and Continuous Deployment pipeline for a Spring Boot application. Demonstrates automated testing, building, and deployment to AWS.',
  tech: ['Java', 'Spring Boot', 'Docker', 'Jenkins', 'GitHub', 'AWS'],
  icon: Activity,
  color: 'text-blue-400',
  bg: 'bg-blue-500/10'
},
{
  title: 'Healthcare Robot Project',
  description:
  'An embedded systems project featuring a healthcare assistant robot. Capabilities include Bluetooth control, line following, heart rate monitoring, and obstacle detection.',
  tech: ['Arduino', 'Sensors', 'Embedded Systems', 'C++'],
  icon: Bot,
  color: 'text-purple-400',
  bg: 'bg-purple-500/10'
}];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center gap-3">
            <span className="text-emerald-400 font-mono text-xl">03.</span>{' '}
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col h-full">
            
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg ${project.bg}`}>
                  <project.icon className={`w-8 h-8 ${project.color}`} />
                </div>
                <div className="flex gap-3 text-slate-400">
                  <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors">
                  
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors">
                  
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) =>
              <span
                key={tech}
                className="text-xs font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded">
                
                    {tech}
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}