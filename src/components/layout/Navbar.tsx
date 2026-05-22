"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TerminalSquare } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "AI Tools", path: "/ai-tools" },
  { name: "Resources", path: "/resources" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl glass-panel group-hover:border-[var(--neon-blue)] transition-colors">
              <TerminalSquare className="w-5 h-5 text-[var(--neon-blue)]" />
              <div className="absolute inset-0 rounded-xl bg-[var(--neon-blue)] opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
            </div>
            <span className="text-xl font-bold font-heading tracking-wider">
              Kedar <span className="text-[var(--neon-blue)]">Tech</span> Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={clsx(
                    "relative text-sm font-medium transition-colors hover:text-[var(--neon-blue)]",
                    isActive ? "text-[var(--neon-blue)]" : "text-gray-300"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[var(--neon-blue)] rounded-full shadow-[0_0_8px_var(--neon-blue)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative p-2 text-gray-300 hover:text-[var(--neon-blue)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-[var(--glass-border)] md:hidden"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "px-8 py-4 text-lg font-medium transition-colors border-b border-[var(--glass-border)] last:border-none",
                      isActive
                        ? "text-[var(--neon-blue)] bg-[rgba(0,240,255,0.05)]"
                        : "text-gray-300 hover:text-[var(--neon-blue)] hover:bg-[rgba(255,255,255,0.02)]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
