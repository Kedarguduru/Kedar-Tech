"use client";

import { motion } from "framer-motion";
import { Globe, FileText, FileCode2, Award, Download, ArrowRight, Wrench } from "lucide-react";

const resourceCategories = [
  {
    title: "Useful Websites",
    icon: <Globe className="w-5 h-5 text-[var(--neon-blue)]" />,
    items: [
      { name: "Frontend Mentor", desc: "Improve your front-end skills by building real projects.", link: "#" },
      { name: "DevDocs", desc: "API documentation for all your favorite web technologies.", link: "#" },
      { name: "Roadmap.sh", desc: "Step by step guides and paths to learn different tools or technologies.", link: "#" },
    ]
  },
  {
    title: "Cheat Sheets",
    icon: <FileCode2 className="w-5 h-5 text-[var(--neon-green)]" />,
    items: [
      { name: "React Hooks Cheat Sheet", desc: "A comprehensive guide to all React Hooks with examples.", link: "#" },
      { name: "Tailwind CSS Quick Reference", desc: "Find classes fast with this interactive Tailwind cheat sheet.", link: "#" },
      { name: "Git Commands Reference", desc: "Every Git command you need for daily version control.", link: "#" },
    ]
  },
  {
    title: "Free Tools",
    icon: <Wrench className="w-5 h-5 text-purple-400" />,
    items: [
      { name: "Coolors", desc: "The super fast color palettes generator for designers.", link: "#" },
      { name: "Fontshare", desc: "A free fonts service from Indian Type Foundry.", link: "#" },
      { name: "Vercel", desc: "The platform for frontend developers, providing the speed and reliability.", link: "#" },
    ]
  },
  {
    title: "Certifications",
    icon: <Award className="w-5 h-5 text-pink-400" />,
    items: [
      { name: "AWS Cloud Practitioner", desc: "Validate your overall understanding of the AWS Cloud.", link: "#" },
      { name: "Google Data Analytics", desc: "Professional certificate to get started in data analytics.", link: "#" },
      { name: "FreeCodeCamp Certificates", desc: "Earn verified certifications in web development, python, and more.", link: "#" },
    ]
  }
];

const downloadablePDFs = [
  { name: "Next.js 15 Migration Guide", size: "2.4 MB" },
  { name: "Data Structures Interview Prep", size: "4.1 MB" },
  { name: "UI/UX Principles for Developers", size: "8.5 MB" }
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-20">
      {/* Header */}
      <div className="py-12 md:py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Resources</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          A curated collection of the best tools, cheat sheets, and websites to help you level up your tech career.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Categories */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--glass-border)]">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold font-heading">{category.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {category.items.map(item => (
                    <a key={item.name} href={item.link} className="block group">
                      <h3 className="font-semibold text-gray-200 group-hover:text-[var(--neon-blue)] transition-colors flex items-center justify-between mb-1">
                        {item.name}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Downloadable PDFs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon-blue)] blur-[80px] opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--glass-border)]">
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.1)] flex items-center justify-center border border-[rgba(0,240,255,0.2)]">
                <FileText className="w-5 h-5 text-[var(--neon-blue)]" />
              </div>
              <h2 className="text-xl font-bold font-heading">PDF Guides</h2>
            </div>
            
            <div className="space-y-4">
              {downloadablePDFs.map(pdf => (
                <div key={pdf.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors border border-transparent hover:border-[var(--glass-border)] cursor-pointer">
                  <div>
                    <h3 className="font-medium text-sm text-gray-300">{pdf.name}</h3>
                    <p className="text-xs text-gray-500">{pdf.size}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[var(--neon-blue)] hover:bg-[var(--neon-blue)] hover:text-black transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 rounded-lg border border-[var(--neon-blue)] text-[var(--neon-blue)] text-sm font-medium hover:bg-[var(--neon-blue)] hover:text-black transition-all">
              Unlock Premium Guides
            </button>
          </motion.div>
          
          {/* Join Community Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[var(--glass-border)] relative overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Globe className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Join the Community</h3>
            <p className="text-sm text-gray-400 mb-6 relative z-10">
              Connect with 10,000+ developers. Share resources, ask questions, and collaborate on open source projects.
            </p>
            <button className="px-6 py-2 rounded-lg bg-white text-black font-semibold text-sm hover:scale-105 transition-transform relative z-10">
              Join Discord Server
            </button>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
