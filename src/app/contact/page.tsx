'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaSpinner } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/vaibhavthore12',
    label: 'GitHub',
    color: 'hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-gray-300',
  },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/vaibhavthore12',
    label: 'LinkedIn',
    color: 'hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400',
  },
  {
    icon: SiLeetcode,
    href: 'https://codolio.com/profile/Vaibhavthore12',
    label: 'Codolio',
    color: 'hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-400',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:vaibhavthore12@gmail.com',
    label: 'Email',
    color: 'hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-purple-400',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vaibhav',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background animated shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/3 rounded-full blur-3xl animate-float-slow" />

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Let&apos;s Connect</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <FaEnvelope className="text-purple-400" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <a href="mailto:vaibhavthore12@gmail.com" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
                        vaibhavthore12@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <FaPhone className="text-green-400" size={14} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <a href="tel:+917249038112" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                        +91 7249038112
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-blue-400" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm text-gray-300">Sant Tukaram Nagar, Pimpri, Pune — 411018</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)' } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  className={`w-full py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'error'
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
                      : status === 'success'
                      ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {status === 'sending' ? (
                    <>
                      <FaSpinner className="animate-spin" size={14} />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-lg"
                      >
                        ✓
                      </motion.span>
                      Message Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-lg"
                      >
                        ✕
                      </motion.span>
                      Failed to send — please try again
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
