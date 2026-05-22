"use client";

import { motion } from "framer-motion";
import { Bot, Code2, PenTool, CheckCircle, GraduationCap, ExternalLink } from "lucide-react";

const toolCategories = [
  {
    id: "coding",
    title: "Coding AI Tools",
    icon: <Code2 className="w-6 h-6 text-[var(--neon-blue)]" />,
    color: "neon-blue",
    tools: [
      { name: "CodeCompanion", desc: "AI pair programmer that understands context deeply.", features: ["Code Completion", "Refactoring", "Testing"], link: "#" },
      { name: "BugSquash AI", desc: "Automatically finds and fixes bugs in your pull requests.", features: ["PR Review", "Auto-Fix", "Security"], link: "#" },
      { name: "ArchGen", desc: "Generates scalable system architectures from text prompts.", features: ["System Design", "Cloud Native", "Export to PDF"], link: "#" },
    ]
  },
  {
    id: "writing",
    title: "Writing AI Tools",
    icon: <PenTool className="w-6 h-6 text-[var(--neon-green)]" />,
    color: "neon-green",
    tools: [
      { name: "WriteGenius", desc: "High-quality blog posts and documentation generator.", features: ["SEO Optimized", "Tone Matching", "Markdown"], link: "#" },
      { name: "DocMaster", desc: "Generates comprehensive READMEs by analyzing your codebase.", features: ["Auto-Docs", "GitHub Action", "Sync"], link: "#" },
    ]
  },
  {
    id: "productivity",
    title: "Productivity Tools",
    icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
    color: "purple",
    tools: [
      { name: "FlowState AI", desc: "Organizes your tasks based on your energy levels.", features: ["Smart Scheduling", "Time Blocking", "Analytics"], link: "#" },
      { name: "MeetingSum", desc: "Records and summarizes technical meetings perfectly.", features: ["Action Items", "Transcripts", "Jira Integration"], link: "#" },
    ]
  },
  {
    id: "student",
    title: "Student Tools",
    icon: <GraduationCap className="w-6 h-6 text-pink-400" />,
    color: "pink",
    tools: [
      { name: "LearnFlow", desc: "Creates personalized learning paths for any tech topic.", features: ["Roadmaps", "Quizzes", "Progress Tracking"], link: "#" },
      { name: "FlashAI", desc: "Converts your lecture notes into spaced-repetition flashcards.", features: ["Anki Export", "Auto-generation", "Images"], link: "#" },
      { name: "CodeTutor", desc: "Interactive AI tutor that teaches you programming step-by-step.", features: ["Interactive", "Hints", "Multiple Languages"], link: "#" },
    ]
  }
];

export default function AIToolsPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-20">
      {/* Header */}
      <div className="py-12 md:py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          <span className="text-[var(--neon-green)] text-glow-green">AI Tools</span> Directory
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Discover the most powerful AI applications designed to supercharge your coding, writing, and daily productivity.
        </p>
      </div>

      {/* Tool Categories */}
      <div className="space-y-20">
        {toolCategories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                category.color === 'neon-blue' ? 'bg-[rgba(0,240,255,0.1)] border-[rgba(0,240,255,0.2)]' :
                category.color === 'neon-green' ? 'bg-[rgba(57,255,20,0.1)] border-[rgba(57,255,20,0.2)]' :
                category.color === 'purple' ? 'bg-purple-900/30 border-purple-500/30' :
                'bg-pink-900/30 border-pink-500/30'
              }`}>
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold font-heading">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tools.map((tool, tIndex) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: tIndex * 0.1 }}
                  className="group relative"
                >
                  {/* Hover Glow Effect */}
                  <div className={`absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
                    category.color === 'neon-blue' ? 'bg-[var(--neon-blue)]' :
                    category.color === 'neon-green' ? 'bg-[var(--neon-green)]' :
                    category.color === 'purple' ? 'bg-purple-500' :
                    'bg-pink-500'
                  }`}></div>
                  
                  <div className="relative glass-panel p-8 rounded-2xl h-full flex flex-col bg-[var(--background)]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-[var(--glass-border)]">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                      category.color === 'neon-blue' ? 'group-hover:text-[var(--neon-blue)]' :
                      category.color === 'neon-green' ? 'group-hover:text-[var(--neon-green)]' :
                      category.color === 'purple' ? 'group-hover:text-purple-400' :
                      'group-hover:text-pink-400'
                    }`}>{tool.name}</h3>
                    
                    <p className="text-gray-400 mb-6 flex-grow">{tool.desc}</p>
                    
                    <div className="space-y-2 mb-8">
                      {tool.features.map(feature => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            category.color === 'neon-blue' ? 'bg-[var(--neon-blue)]' :
                            category.color === 'neon-green' ? 'bg-[var(--neon-green)]' :
                            category.color === 'purple' ? 'bg-purple-500' :
                            'bg-pink-500'
                          }`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 rounded-lg border border-[var(--glass-border)] hover:border-white text-white font-medium hover:bg-white hover:text-black transition-all">
                      Try Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
