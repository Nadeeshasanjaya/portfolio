import React from 'react';
import { motion } from 'framer-motion';
const skills = [
{
  name: 'Linux',
  level: 90,
  category: 'Core'
},
{
  name: 'Git & GitHub',
  level: 85,
  category: 'VCS'
},
{
  name: 'Docker',
  level: 80,
  category: 'Containerization'
},
{
  name: 'Jenkins',
  level: 75,
  category: 'CI/CD'
},
{
  name: 'AWS EC2',
  level: 70,
  category: 'Cloud'
},
{
  name: 'CI/CD Pipelines',
  level: 80,
  category: 'Automation'
},
{
  name: 'Bash Scripting',
  level: 85,
  category: 'Scripting'
},
{
  name: 'Java',
  level: 75,
  category: 'Programming'
},
{
  name: 'Spring Boot',
  level: 70,
  category: 'Framework'
},
{
  name: 'HTML, CSS, JS',
  level: 85,
  category: 'Frontend'
}];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
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
            <span className="text-emerald-400 font-mono text-xl">02.</span>{' '}
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) =>
          <motion.div
            key={skill.name}
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
              delay: index * 0.1
            }}>
            
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-200 font-medium">{skill.name}</span>
                <span className="text-emerald-400 font-mono text-sm">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                initial={{
                  width: 0
                }}
                whileInView={{
                  width: `${skill.level}%`
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.1,
                  ease: 'easeOut'
                }}
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full relative">
                
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px]"></div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}