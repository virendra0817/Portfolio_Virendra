'use client';

import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { motion } from 'framer-motion';
import Hero from '@/components/VantaBackground.jsx';
import Navbar from '@/components/Navbar';
import VantaBackground from '@/components/VantaBackground.jsx';


export default function Home() {
  return (
    
    <section className={styles.hero}>
      {/* Animated Profile Image */}
      
      
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        style={{
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="ghibli dp.jpg" // Put your image in /public/myphoto.png
          alt="My Profile"
          style={{
            width: 160,
            height: 160,
            borderRadius: '60%',
            border: '4px solid white',
          }}
        />
      </motion.div>
       
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        className={styles.heroSubtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Web Developer & AI Enthusiast
      </motion.p>

      <motion.div
        className="styles.description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          I'm passionate about creating beautiful, functional web experiences and working on GenAI projects, making ML models.
          Explore my work and get to know more about my journey in web development.
        </p>
      </motion.div>
        


      <motion.a
        href="virendra_resume.pdf"
         download
       className={styles.secondaryButton}
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
>
  📄  Download CV
   </motion.a>

      <nav className={styles.navi}>
        
      </nav>
      
    </section>
    
  );
}
