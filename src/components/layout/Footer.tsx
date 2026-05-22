import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Github, Twitter, Linkedin } from "@/components/ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[rgba(0,0,0,0.5)] mt-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-[var(--neon-blue)] blur-[100px] opacity-10 rounded-full"></div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-heading tracking-wider">
                Kedar <span className="text-[var(--neon-blue)]">Tech</span> Hub
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              AI • Coding • Productivity. Exploring the future of technology and empowering developers worldwide.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Kedar</FooterLink>
              <FooterLink href="/blog">Tech Blog</FooterLink>
              <FooterLink href="/ai-tools">AI Tools Directory</FooterLink>
              <FooterLink href="/resources">Developer Resources</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest tech insights and resources.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon-blue)] focus:ring-1 focus:ring-[var(--neon-blue)] transition-all"
                />
              </div>
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-[var(--glass-border)] hover:border-[var(--neon-blue)] text-white py-2.5 rounded-lg text-sm font-medium transition-all group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kedar Tech Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[var(--neon-blue)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--neon-blue)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full glass-panel hover:text-[var(--neon-blue)] glass-hover text-gray-400"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors text-sm flex items-center gap-2 group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        {children}
      </Link>
    </li>
  );
}
