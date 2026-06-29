import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Server, GitBranch } from 'lucide-react';
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-6">
              <Terminal className="w-4 h-4" />
              <span>Hello, World!</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 mb-6">
              I'm <span className="text-emerald-400">H.G.N. Sanjaya</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-400 mb-6">
              Aspiring DevOps Engineer
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              Passionate about bridging the gap between development and
              operations. I specialize in building robust CI/CD pipelines,
              automating infrastructure, and deploying scalable cloud solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-medium rounded-lg hover:bg-emerald-400 transition-colors">
                
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-100 font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
                
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="hidden lg:block relative">
            
            {/* Decorative Code Window */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs font-mono text-slate-500">
                  deploy.sh
                </span>
              </div>
              <div className="p-6 font-mono text-sm text-slate-300 leading-relaxed">
                <p>
                  <span className="text-emerald-400">#!/bin/bash</span>
                </p>
                <p className="mt-2 text-slate-500">
                  # Initializing deployment pipeline...
                </p>
                <p className="mt-2">
                  <span className="text-blue-400">echo</span>{' '}
                  <span className="text-yellow-300">
                    "Building Docker image..."
                  </span>
                </p>
                <p>docker build -t sanjaya/portfolio:latest .</p>
                <p className="mt-2">
                  <span className="text-blue-400">echo</span>{' '}
                  <span className="text-yellow-300">
                    "Pushing to AWS ECR..."
                  </span>
                </p>
                <p>docker push sanjaya/portfolio:latest</p>
                <p className="mt-2">
                  <span className="text-blue-400">echo</span>{' '}
                  <span className="text-yellow-300">
                    "Deploying to EC2 instance..."
                  </span>
                </p>
                <p>
                  ssh user@production{' '}
                  <span className="text-yellow-300">
                    'docker-compose up -d'
                  </span>
                </p>
                <p className="mt-4 text-emerald-400">
                  Deployment successful! 🚀
                </p>
                <span className="animate-pulse inline-block w-2 h-4 bg-emerald-400 mt-2"></span>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut'
              }}
              className="absolute -top-6 -right-6 p-4 bg-slate-800 border border-slate-700 rounded-xl shadow-xl flex items-center gap-3">
              
              <Server className="w-6 h-6 text-blue-400" />
              <span className="font-medium text-sm">AWS EC2</span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 p-4 bg-slate-800 border border-slate-700 rounded-xl shadow-xl flex items-center gap-3">
              
              <GitBranch className="w-6 h-6 text-orange-400" />
              <span className="font-medium text-sm">CI/CD Pipelines</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}