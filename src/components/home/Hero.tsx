"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { ArrowRight, Code2, Sparkles as SparklesIcon } from "lucide-react";

// A simple generic 3D model representation for the hero.
// We'll create a futuristic abstract element.
function AbstractModel() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          emissive="#00f0ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} scale={0.8}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#39ff14"
          wireframe
          emissive="#39ff14"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <AbstractModel />
          <Sparkles count={100} scale={10} size={2} speed={0.4} color="#00f0ff" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 text-[var(--neon-blue)] text-sm font-medium"
          >
            <SparklesIcon className="w-4 h-4" />
            <span>Welcome to the Future of Tech</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight"
          >
            Empowering Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-glow-blue">
              Digital Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Explore AI tools, master coding, and boost your productivity. Your ultimate developer portfolio and tech resource hub.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/resources"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-semibold text-lg hover:shadow-[0_0_20px_var(--glass-glow)] transition-all group w-full sm:w-auto justify-center"
            >
              Explore Resources
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass-panel text-white font-semibold text-lg hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-all group w-full sm:w-auto justify-center"
            >
              <Code2 className="w-5 h-5" />
              Learn Coding
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-10 top-1/4 hidden lg:block glass-panel p-4 rounded-xl text-xs font-mono text-gray-300 shadow-[0_0_15px_rgba(0,240,255,0.1)] backdrop-blur-md"
      >
        <div className="text-[var(--neon-blue)]">const</div>{" "}
        <span className="text-white">hub</span> = {"{"}
        <br />
        &nbsp;&nbsp;tech: <span className="text-[var(--neon-green)]">&quot;Next.js&quot;</span>,
        <br />
        &nbsp;&nbsp;style: <span className="text-[var(--neon-green)]">&quot;Neon&quot;</span>
        <br />
        {"}"};
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute right-10 bottom-1/4 hidden lg:block glass-panel p-4 rounded-xl text-xs font-mono text-gray-300 shadow-[0_0_15px_rgba(57,255,20,0.1)] backdrop-blur-md"
      >
        <span className="text-[var(--neon-blue)]">import</span> {"{ "}
        <span className="text-white">Future</span>
        {" }"} <span className="text-[var(--neon-blue)]">from</span>{" "}
        <span className="text-[var(--neon-green)]">&quot;innovation&quot;</span>;
      </motion.div>
    </section>
  );
}
