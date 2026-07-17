'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';
import ParallaxCard from '@/components/ParallaxCard';

const projects = [
  {
    title: 'Farm Connect',
    subtitle: 'Digital Farmer Marketplace',
    description:
      'Built a digital platform connecting farmers directly with buyers, promoting fair pricing and wider market access. Enabled produce quality listings, market price comparisons, and direct negotiation to eliminate middlemen.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'shadcn/ui'],
    github: 'https://github.com/vaibhavthore12',
    gradient: 'from-emerald-600/20 to-green-600/20',
    emoji: '🌾',
  },
  {
    title: 'Skill-Mitra',
    subtitle: 'Learning Management System',
    description:
      'Developed a role-based LMS with authentication, course management, and Stripe payment integration. Created RESTful APIs using Express.js and MongoDB; handled file uploads via Multer and Cloudinary. Built a responsive frontend with React.js, Redux Toolkit, and React Router, featuring dark/light mode and protected routes.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Shadcn/ui', 'Redux', 'Stripe'],
    github: 'https://github.com/vaibhavthore12',
    gradient: 'from-purple-600/20 to-blue-600/20',
    emoji: '📚',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    subtitle: 'Interactive Learning Tool',
    description:
      'Developed a web app to visualize sorting algorithms using HTML, CSS, and JavaScript. Added dynamic speed control for real-time algorithm animation and learning, making complex algorithms easy to understand.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/vaibhavthore12',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    emoji: '📊',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Featured Projects"
            subtitle="A collection of projects that showcase my skills and passion for building great software."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                className={i === 0 ? 'md:col-span-2' : ''}
              >
                <ParallaxCard className="h-full">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col gradient-border">
                    {/* Project Header / Gradient Banner */}
                    <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 grid-pattern opacity-30" />
                      <div className="relative z-10 text-center px-6">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                          <span className="text-3xl">{project.emoji}</span>
                        </div>
                        <p className="text-sm text-white/70 font-medium">{project.subtitle}</p>
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tech-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-purple-500/30 hover:text-white transition-all duration-300"
                        >
                          <FaGithub size={16} />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/vaibhavthore12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-purple-500/30 hover:text-white transition-all duration-300"
            >
              <FaGithub size={18} />
              View All Projects on GitHub
              <FaExternalLinkAlt size={10} />
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
