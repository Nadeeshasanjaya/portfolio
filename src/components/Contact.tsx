import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate frontend-only form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 relative bg-slate-900/50">
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
          className="mb-16 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <span className="text-emerald-400 font-mono text-xl">04.</span> Get
            In Touch
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
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
            className="md:col-span-2 space-y-6">
            
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-colors group">
              
              <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Email</h3>
                <p className="text-slate-400 text-sm">contact@example.com</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-colors group">
              
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">
                  LinkedIn
                </h3>
                <p className="text-slate-400 text-sm">
                  linkedin.com/in/sanjaya
                </p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-colors group">
              
              <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-700 transition-colors">
                <Github className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">GitHub</h3>
                <p className="text-slate-400 text-sm">github.com/sanjaya</p>
              </div>
            </a>
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
            className="md:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2">
                    
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="John Doe" />
                  
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2">
                    
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="john@example.com" />
                  
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-400 mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value
                  })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  placeholder="Hello Sanjaya...">
                </textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-medium py-3 px-6 rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                
                {isSubmitting ?
                <span className="animate-pulse">Sending...</span> :
                submitted ?
                <span>Message Sent!</span> :

                <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                }
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}