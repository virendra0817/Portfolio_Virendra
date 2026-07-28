'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFileDownload } from 'react-icons/fa';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <section className={`${styles.page} ${styles.hero}`}>
      <motion.div className={`${styles.heroPanel} ${styles.glass}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <motion.img className={styles.avatar} src="/ghibli dp.jpg" alt="Virendra Vikram Singh" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: 'spring' }} />
        <p className={styles.eyebrow}>Web developer · AI enthusiast</p>
        <h1>Building thoughtful <em>digital experiences.</em></h1>
        <p className={styles.heroText}>I’m Virendra Vikram Singh. I turn ideas in web development, generative AI, and machine learning into clean, useful products.</p>
        <div className={styles.heroButtons}>
          <Link href="/projects" className={styles.primaryButton}>Explore projects <FaArrowRight /></Link>
          <a href="/virendra_resume.pdf" download className={styles.secondaryButton}><FaFileDownload /> Download CV</a>
        </div>
      </motion.div>
    </section>
  );
}
