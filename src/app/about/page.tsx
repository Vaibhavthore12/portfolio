'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJava, FaBootstrap,
  FaGraduationCap, FaUsers
} from 'react-icons/fa';
import {
  SiCplusplus, SiJavascript, SiNextdotjs, SiTailwindcss,
  SiExpress, SiMongodb, SiMysql, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiAcademicCap } from 'react-icons/hi';
import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/20',
    glowColor: 'hover:shadow-orange-500/10',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/20',
    glowColor: 'hover:shadow-blue-500/10',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Database',
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500/20',
    glowColor: 'hover:shadow-green-500/10',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Fundamentals',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/20',
    glowColor: 'hover:shadow-purple-500/10',
    skills: [
      { name: 'OOP', icon: HiAcademicCap, color: '#a78bfa' },
      { name: 'DBMS', icon: HiAcademicCap, color: '#60a5fa' },
      { name: 'OS', icon: HiAcademicCap, color: '#34d399' },
      { name: 'CN', icon: HiAcademicCap, color: '#f472b6' },
    ],
  },
  {
    title: 'Tools',
    color: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-500/20',
    glowColor: 'hover:shadow-yellow-500/10',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ],
  },
];

const education = [
  {
    institution: 'Dr. D. Y. Patil Institute of Technology, Pimpri Pune',
    degree: 'Bachelor of Engineering in Computer Engineering',
    score: 'CGPA: 8.39',
    period: '2022 — 2026',
    location: 'Pune, India',
  },
  {
    institution: "Mahatma Gandhi Vidya Mandir's College, Manmad",
    degree: '12th (HSC)',
    score: 'Percentage: 78.17%',
    period: '2022',
    location: 'Manmad, India',
  },
  {
    institution: 'Chhatre New English School, Manmad',
    degree: '10th (SSC)',
    score: 'Percentage: 92.20%',
    period: '2020',
    location: 'Manmad, India',
  },
];

const extracurricular = [
  {
    title: 'NSS Official Member (Event Manager)',
    description: 'Organized events including blood donation drives and community service initiatives.',
    icon: FaUsers,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Sanskriti Cultural Club (Technical Member)',
    description: 'Assisted in managing technical and cultural events across campus.',
    icon: FaUsers,
    color: 'from-blue-500 to-purple-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="About Me"
            subtitle="Get to know more about me, my background, and the technologies I work with."
          />

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-16"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Photo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 rounded-2xl overflow-hidden shrink-0 neon-glow"
              >
                <Image
                  src="/profile.jpg"
                  alt="Vaibhav Thore"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-500/30" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Hello! I&apos;m <span className="text-purple-400">Vaibhav Thore</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I&apos;m a passionate Full Stack Developer currently pursuing my B.E. in Computer Engineering
                  from Dr. D. Y. Patil Institute of Technology, Pimpri Pune. With hands-on experience at
                  MetroGuild, Inc and Candourootes Innovations, I specialize in building scalable web applications
                  using React.js, Node.js, and MongoDB.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;ve solved 600+ DSA problems across platforms, won the Dev-Clash Hackathon competing
                  against 50+ teams and 200+ participants, and actively contribute to community initiatives
                  through NSS. I&apos;m always eager to learn, build, and collaborate on impactful projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <SectionHeading title="Skills & Technologies" subtitle="Technologies I use to bring ideas to life." />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`glass-card rounded-2xl p-6 ${category.glowColor}`}
              >
                <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/[0.05] transition-all duration-300 cursor-default"
                    >
                      <skill.icon size={18} style={{ color: skill.color }} />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <SectionHeading title="Education" subtitle="My academic journey and qualifications." />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6 mb-20"
          >
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <FaGraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{edu.institution}</h3>
                    <p className="text-purple-400 text-sm font-medium mb-1">{edu.degree}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="tech-badge">{edu.score}</span>
                      <span className="text-gray-500">{edu.period}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Extra-Curricular */}
          <SectionHeading title="Extra-Curricular" subtitle="Activities and communities I'm part of." />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {extracurricular.map((activity, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg`}>
                    <activity.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{activity.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
