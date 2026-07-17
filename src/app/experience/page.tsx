'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaCode, FaAward } from 'react-icons/fa';
import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';

const experiences = [
  {
    type: 'work',
    title: 'Intern — Software Engineering',
    company: 'MetroGuild, Inc',
    date: 'Aug 2025 — Present',
    location: 'Pune, Maharashtra',
    description: [
      'Developed reusable React.js components for the MetroGuild application, improving code maintainability and scalability.',
      'Collaborated with the engineering team to integrate components with backend APIs and ensure seamless user experience.',
      'Implemented bulk WhatsApp messaging response handling and built an analytics dashboard to track overall communication status and delivery insights.',
    ],
    tech: ['JavaScript', 'React.js', 'Cassandra'],
  },
  {
    type: 'work',
    title: 'Software Development Intern',
    company: 'Candourootes Innovations Pvt. Ltd.',
    date: 'Oct 2024 — March 2025',
    location: 'Pune, Maharashtra',
    description: [
      'Developed and maintained scalable RESTful APIs to support internal task management and reporting operations.',
      'Handled error management and exception handling to ensure robust and user-friendly API responses.',
      'Assisted in developing interactive and responsive front-end components using React.js and Tailwind CSS.',
    ],
    tech: ['REST APIs', 'React.js', 'JavaScript', 'Tailwind CSS'],
  },
];

const achievements = [
  {
    icon: FaCode,
    title: '600+ DSA Problems',
    description: 'Solved 600+ Data Structures & Algorithms problems across multiple competitive programming platforms.',
    color: 'from-cyan-500 to-blue-500',
    shadowColor: 'shadow-cyan-500/20',
  },
  {
    icon: FaTrophy,
    title: 'Dev-Clash Hackathon Winner',
    description: 'Winner of Dev-Clash Hackathon, competing against 50+ teams and 200+ participants.',
    color: 'from-yellow-500 to-orange-500',
    shadowColor: 'shadow-yellow-500/20',
  },
  {
    icon: FaAward,
    title: 'First-Year PBL Winner',
    description: 'Won the college-level Project Based Learning hackathon in the very first year of engineering.',
    color: 'from-purple-500 to-pink-500',
    shadowColor: 'shadow-purple-500/20',
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const achievementVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and work experience."
          />

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative mb-20"
          >
            {/* Timeline center line */}
            <div className="timeline-line" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  i % 2 === 0
                    ? 'md:pr-[55%] md:text-right'
                    : 'md:pl-[55%] md:text-left'
                } pl-12 md:pl-0`}
              >
                {/* Mobile timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute z-10 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 md:hidden"
                  style={{
                    left: '20px',
                    top: '0',
                  }}
                >
                  <FaBriefcase className="text-white" size={16} />
                </motion.div>

                {/* Desktop timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="hidden md:flex absolute z-10 w-10 h-10 rounded-full items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 shadow-purple-500/30 shadow-lg"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '0',
                  }}
                >
                  <FaBriefcase className="text-white" size={16} />
                </motion.div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6">
                  <div className={`flex flex-wrap items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {exp.date}
                    </span>
                    <span className="text-xs text-gray-500">{exp.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-3">{exp.company}</p>
                  
                  <ul className={`space-y-2 mb-4 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.description.map((point, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-purple-500 mt-1.5 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Section */}
          <SectionHeading
            title="Achievements"
            subtitle="Notable accomplishments and milestones."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                variants={achievementVariants}
                className="glass-card rounded-2xl p-6 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg ${achievement.shadowColor} group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <achievement.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-base font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
