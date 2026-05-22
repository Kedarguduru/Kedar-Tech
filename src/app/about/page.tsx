"use client";

import { motion } from "framer-motion";
import { User, Mail, ExternalLink, PenTool, Database, Layout } from "lucide-react";
import { Github, Twitter, Linkedin } from "@/components/ui/BrandIcons";

const timeline = [
  {
    year: "2026",
    title: "Founded Kedar Tech Hub",
    desc: "Launched a futuristic platform to share knowledge about AI, Coding, and Productivity with millions of developers."
  },
  {
    year: "2024",
    title: "Senior Full Stack Engineer",
    desc: "Architected scalable applications using Next.js, React, and serverless technologies for enterprise clients."
  },
  {
    year: "2022",
    title: "Open Source Contributor",
    desc: "Started actively contributing to major open source projects and building a community around web development."
  },
  {
    year: "2020",
    title: "Began Programming Journey",
    desc: "Wrote the first lines of code and fell in love with creating things for the web."
  }
];

const skills = [
  { name: "Frontend", icon: <Layout className="w-5 h-5" />, items: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { name: "Backend", icon: <Database className="w-5 h-5" />, items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
  { name: "Tools & AI", icon: <PenTool className="w-5 h-5" />, items: ["Git", "Docker", "AWS", "OpenAI API", "LangChain"] }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-20">
      
      {/* Hero Section */}
      <div className="py-12 md:py-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:w-1/3 relative"
          >
            <div className="absolute inset-0 bg-[var(--neon-blue)] blur-[100px] opacity-20 rounded-full"></div>
            <div className="aspect-square rounded-3xl bg-gray-800 border border-[var(--glass-border)] relative overflow-hidden glass-panel group">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent z-10 opacity-60"></div>
              {/* Fallback avatar since we don't have an image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-green-900/40">
                <User className="w-32 h-32 text-gray-500 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8 relative z-10">
              <SocialIcon icon={<Github className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Mail className="w-5 h-5" />} />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-2/3"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-glow-blue">Kedar</span>
            </h1>
            <h2 className="text-xl text-[var(--neon-green)] mb-6 font-medium">Software Engineer & Tech Creator</h2>
            
            <div className="space-y-4 text-gray-400 text-lg">
              <p>
                I am a passionate Full Stack Developer and AI Enthusiast dedicated to building futuristic, high-performance web applications. I bridge the gap between design and engineering to create immersive digital experiences.
              </p>
              <p>
                With a strong foundation in modern web technologies and a keen eye for aesthetics, my goal is to empower the next generation of developers through educational content, open-source projects, and cutting-edge tools.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-lg bg-[var(--neon-blue)] text-black font-semibold hover:shadow-[0_0_20px_var(--glass-glow)] transition-all">
                Download Resume
              </button>
              <button className="px-8 py-3 rounded-lg glass-panel text-white font-semibold hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-all">
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold font-heading mb-10 text-center">Tech <span className="text-[var(--neon-blue)]">Stack</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl glass-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 text-[var(--neon-blue)] group-hover:bg-[var(--neon-blue)] group-hover:text-black transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map(item => (
                  <li key={item} className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="max-w-3xl mx-auto py-20">
        <h2 className="text-3xl font-bold font-heading mb-12 text-center">My <span className="text-[var(--neon-green)]">Journey</span></h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--neon-blue)] before:via-[var(--neon-green)] before:to-transparent">
          {timeline.map((item) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--background)] bg-[var(--neon-blue)] shadow shadow-blue-500/50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-[var(--background)] rounded-full"></div>
              </div>
              
              {/* Content box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-16 md:ml-0 glass-panel p-6 rounded-2xl glass-hover">
                <span className="font-mono text-sm text-[var(--neon-blue)] font-semibold">{item.year}</span>
                <h3 className="font-bold font-heading text-xl mt-2 mb-2 group-hover:text-[var(--neon-green)] transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pinterest Integration Section */}
      <div className="max-w-5xl mx-auto py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600"
        >
          <div className="bg-[var(--background)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold font-heading mb-4">Follow on <span className="text-red-500">Pinterest</span></h3>
              <p className="text-gray-400 max-w-lg mb-6">
                Discover daily coding tips, UI/UX inspiration, and tech infographics. Join thousands of developers who save and share our pins daily.
              </p>
              <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors">
                View Pinterest Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Visual Representation of Pinterest Board */}
            <div className="w-full md:w-1/3 grid grid-cols-2 gap-2 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-2">
                <div className="bg-gray-800 rounded-lg h-32 w-full animate-pulse"></div>
                <div className="bg-gray-800 rounded-lg h-40 w-full animate-pulse"></div>
              </div>
              <div className="space-y-2 mt-6">
                <div className="bg-gray-800 rounded-lg h-40 w-full animate-pulse"></div>
                <div className="bg-gray-800 rounded-lg h-24 w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-[var(--neon-blue)] hover:border-[var(--neon-blue)] hover:-translate-y-1 transition-all">
      {icon}
    </a>
  );
}
