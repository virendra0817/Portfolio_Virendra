'use client';

import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiHuggingface, SiLangchain, SiPostgresql } from 'react-icons/si';
import styles from '@/styles/Home.module.css';

const skills = [[FaJs, 'JavaScript (ES6+)'], [FaReact, 'React'], [SiNextdotjs, 'Next.js'], [FaPython, 'Python'], [SiHuggingface, 'Hugging Face'], [SiLangchain, 'LangChain'], [SiPostgresql, 'PostgreSQL'], [FaGithub, 'Git & GitHub']];

export default function About() {
  return <section className={styles.section}>
    <motion.div className={styles.sectionHeading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}><p className={styles.eyebrow}>About me</p><h1>Curious by nature. Practical by design.</h1></motion.div>
    <motion.div className={`${styles.aboutPanel} ${styles.glass}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
      <div className={styles.aboutText}>
        <p>I’m Virendra Vikram Singh, a web developer and AI enthusiast focused on building responsive products that solve real problems. I enjoy turning complex ideas into clear, dependable experiences.</p>
        <p>My work spans React and Next.js interfaces as well as generative-AI and machine-learning projects. I’m especially interested in how AI can make everyday workflows more useful and human.</p>
        <h3>Education</h3>
        <ul className={styles.educationList}><li>🎓 B.Tech in Computer Science — Shri Ramswaroop Memorial College of Engineering and Management (2022–2026)</li><li>🏫 Higher Secondary — Rani Laxmi Bai Memorial School (2020–2021)</li></ul>
        <h3>Skills</h3>
        <ul className={styles.skillsList}>{skills.map(([Icon, label]) => <li key={label}><Icon className={styles.icon} />{label}</li>)}</ul>
        <h3>Experience</h3><div className={styles.experience}><h4>IBM Virtual Internship</h4><p>Built and explored generative-AI models through project-based learning and certification.</p></div>
      </div>
    </motion.div>
  </section>;
}
