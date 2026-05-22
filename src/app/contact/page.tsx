"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { Github, Twitter, Linkedin } from "@/components/ui/BrandIcons";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 pb-20">
      
      <div className="py-12 md:py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-glow-blue">Touch</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Have a question, collaboration idea, or just want to say hi? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[var(--neon-blue)]"></div>
            <h3 className="text-2xl font-bold font-heading mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactItem icon={<Mail className="w-5 h-5" />} title="Email" value="hello@kedartechhub.com" />
              <ContactItem icon={<Phone className="w-5 h-5" />} title="Phone" value="+1 (555) 123-4567" />
              <ContactItem icon={<MapPin className="w-5 h-5" />} title="Location" value="San Francisco, CA (Remote)" />
            </div>
            
            <div className="mt-10 pt-8 border-t border-[var(--glass-border)]">
              <h4 className="text-gray-400 mb-4 font-medium">Follow me on social media</h4>
              <div className="flex gap-4">
                <SocialLink icon={<Github className="w-5 h-5" />} href="#" />
                <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" />
                <SocialLink icon={<Linkedin className="w-5 h-5" />} href="#" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-panel p-8 rounded-2xl relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] opacity-20 blur-sm pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold font-heading mb-6 relative z-10">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--neon-blue)] focus:bg-[rgba(0,240,255,0.05)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--neon-blue)] focus:bg-[rgba(0,240,255,0.05)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--neon-blue)] focus:bg-[rgba(0,240,255,0.05)] transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isSubmitted 
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black hover:shadow-[0_0_20px_var(--glass-glow)] hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                ) : isSubmitted ? (
                  <>Message Sent Successfully! ✓</>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

function ContactItem({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[var(--neon-blue)] mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-400 text-sm font-medium">{title}</h4>
        <p className="text-white text-lg">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} className="w-10 h-10 rounded-lg border border-[var(--glass-border)] flex items-center justify-center text-gray-400 hover:text-[var(--neon-green)] hover:border-[var(--neon-green)] transition-all">
      {icon}
    </a>
  );
}

// Custom simple User icon to avoid importing from 'lucide-react' twice or managing aliasing if not needed.
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
