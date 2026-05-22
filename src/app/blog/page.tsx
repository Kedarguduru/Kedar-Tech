"use client";

import { useState } from "react";
import { Search, ChevronRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = ["All", "AI Tools", "Coding Tips", "Python", "DSA", "Web Development", "Certifications"];

const dummyBlogs = [
  {
    id: 1,
    title: "10 AI Tools Every Developer Should Know in 2026",
    excerpt: "Discover the latest AI tools that can 10x your coding productivity, from intelligent autocomplete to architecture generators.",
    category: "AI Tools",
    date: "May 20, 2026",
    readTime: "5 min",
    image: "neon-blue"
  },
  {
    id: 2,
    title: "Mastering Python Generators and Yield",
    excerpt: "A deep dive into Python generators, how they work under the hood, and when to use them for memory efficiency.",
    category: "Python",
    date: "May 18, 2026",
    readTime: "8 min",
    image: "neon-green"
  },
  {
    id: 3,
    title: "Top 5 Free Cloud Certifications for Students",
    excerpt: "Boost your resume with these free cloud certifications provided by major tech giants.",
    category: "Certifications",
    date: "May 15, 2026",
    readTime: "4 min",
    image: "purple"
  },
  {
    id: 4,
    title: "A Visual Guide to Dynamic Programming",
    excerpt: "Demystifying DP concepts with visual diagrams and intuitive examples to help you ace your next interview.",
    category: "DSA",
    date: "May 10, 2026",
    readTime: "12 min",
    image: "pink"
  },
  {
    id: 5,
    title: "Next.js 15: What's New and Why It Matters",
    excerpt: "An overview of the latest features in Next.js 15, including improved caching and compiler optimizations.",
    category: "Web Development",
    date: "May 5, 2026",
    readTime: "6 min",
    image: "neon-blue"
  },
  {
    id: 6,
    title: "How to Stay Productive as a Self-Taught Programmer",
    excerpt: "Actionable tips and habits to maintain focus and avoid burnout while learning to code on your own.",
    category: "Coding Tips",
    date: "May 1, 2026",
    readTime: "7 min",
    image: "neon-green"
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = dummyBlogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = dummyBlogs[0];

  return (
    <div className="container mx-auto px-4 md:px-8 pb-20">
      {/* Header Section */}
      <div className="py-12 md:py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-glow-blue">Tech Blog</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Insights, tutorials, and resources to help you master AI, coding, and productivity.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 glass-panel rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon-blue)] focus:ring-1 focus:ring-[var(--neon-blue)] transition-all"
            placeholder="Search articles, topics, tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Featured Article (only show if searching everything and all categories) */}
      {searchQuery === "" && activeCategory === "All" && (
        <div className="mb-20">
          <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
            <span className="text-[var(--neon-blue)]">✦</span> Featured Article
          </h2>
          <Link href={`/blog/${featuredBlog.id}`} className="group block">
            <div className="glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row glass-hover">
              <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-blue-900/40 to-green-900/40 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/10 font-heading tracking-widest uppercase rotate-[-45deg]">
                    {featuredBlog.category}
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1 text-[var(--neon-blue)] bg-[rgba(0,240,255,0.1)] px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" /> {featuredBlog.category}
                  </span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredBlog.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredBlog.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-[var(--neon-blue)] transition-colors line-clamp-2">
                  {featuredBlog.title}
                </h3>
                <p className="text-gray-400 mb-8 line-clamp-3 text-lg">
                  {featuredBlog.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--neon-blue)] font-medium">
                  Read Full Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Categories */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-[var(--neon-blue)] text-black shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                : "glass-panel text-gray-300 hover:text-white hover:border-[var(--neon-blue)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${blog.id}`} className="group block h-full">
                <div className="glass-panel rounded-2xl overflow-hidden glass-hover h-full flex flex-col">
                  <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${
                    blog.image === 'neon-blue' ? 'from-blue-900/40 to-blue-600/20' : 
                    blog.image === 'neon-green' ? 'from-green-900/40 to-green-600/20' :
                    blog.image === 'purple' ? 'from-purple-900/40 to-purple-600/20' :
                    'from-pink-900/40 to-pink-600/20'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-500">
                       <span className="text-3xl font-bold text-white/50 font-heading">{blog.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="text-[var(--neon-blue)]">{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--neon-blue)] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mt-auto">
                      <Calendar className="w-3 h-3 mr-1" />
                      {blog.date}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass-panel rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-300 mb-2">No articles found</h3>
          <p className="text-gray-500">Try adjusting your search or category filters.</p>
        </div>
      )}

      {/* Pagination (Visual only for demo) */}
      {filteredBlogs.length > 0 && (
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--neon-blue)] transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.1)] border border-[var(--neon-blue)] flex items-center justify-center text-[var(--neon-blue)]">
            2
          </button>
          <button className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--neon-blue)] transition-colors">
            3
          </button>
        </div>
      )}
    </div>
  );
}
