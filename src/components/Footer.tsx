'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/vaibhavthore12', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/vaibhavthore12', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://codolio.com/profile/Vaibhavthore12', label: 'LeetCode' },
  { icon: FaEnvelope, href: 'mailto:vaibhavthore12@gmail.com', label: 'Email' },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/30">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white text-sm">
                V
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Vaibhav Thore
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building modern, 
              performant web applications with React.js, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Open for opportunities and collaboration.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Vaibhav Thore. Built with
            <FaHeart className="text-purple-500 text-xs" />
            using Next.js
          </p>
          <p className="text-gray-600 text-xs">
            Designed & Developed by Vaibhav Thore
          </p>
        </div>
      </div>
    </footer>
  );
}
