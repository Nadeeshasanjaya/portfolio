import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, MapPin, Cpu } from 'lucide-react';
export function About() {
  return (
    <section id="about" className="py-24 relative">
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
            <span className="text-emerald-400 font-mono text-xl">01.</span>{' '}
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="space-y-6 text-slate-400 leading-relaxed">
            
            <p>
              Hello! I'm H.G.N. Sanjaya, a dedicated and aspiring DevOps
              Engineer based in Sri Lanka. My journey in tech began with a deep
              curiosity about how software is built, deployed, and maintained at
              scale.
            </p>
            <p>
              I recently completed my Higher National Diploma in Software
              Engineering at NIBM Sri Lanka. While my foundation is in software
              development, I quickly realized my true passion lies in the
              intersection of development and operations.
            </p>
            <p>
              I spend my time exploring Linux environments, containerizing
              applications with Docker, and orchestrating automated CI/CD
              pipelines using Jenkins and GitHub Actions. I'm constantly
              learning and adapting to new cloud technologies, particularly
              within the AWS ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="grid gap-6">
            
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="p-3 bg-emerald-500/10 rounded-lg shrink-0">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  Career Objective
                </h3>
                <p className="text-slate-400 text-sm">
                  To become a professional DevOps Engineer specializing in Cloud
                  Computing, CI/CD, Containerization, and Automation,
                  contributing to efficient and scalable software delivery.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-lg shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  Education
                </h3>
                <p className="text-slate-400 text-sm">
                  Higher National Diploma in Software Engineering
                  <br />
                  <span className="text-emerald-400">NIBM Sri Lanka</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <MapPin className="w-6 h-6 text-rose-400" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">
                    Location
                  </h3>
                  <p className="text-slate-400 text-xs">Sri Lanka</p>
                </div>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <Cpu className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">
                    Focus
                  </h3>
                  <p className="text-slate-400 text-xs">Automation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}