'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import FloatingIcons from '@/components/FloatingIcons';
import PageTransition from '@/components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-pattern" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

        <FloatingIcons />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-gray-300">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Vaibhav Thore
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-200"
            >
              Software Developer
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Full Stack / MERN Stack Developer crafting
            <span className="text-purple-400"> modern web experiences</span> with
            clean code and beautiful interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View Projects
                <FaArrowRight className="text-sm" />
              </motion.button>
            </Link>
            <motion.a
              href="/vaibhav_jan_final85.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Tech Stack Mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 flex items-center justify-center gap-6 flex-wrap"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Tech Stack</span>
            <div className="h-4 w-px bg-gray-700" />
            {['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="text-xs text-gray-500 hover:text-purple-400 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
