'use client' ;
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import {
  FaReact, FaNodeJs, FaPython, FaJs, FaMicrosoft, FaGithub
} from 'react-icons/fa';
import {
  SiPostgresql, SiNextdotjs, SiHuggingface, SiGooglecolab, SiJupyter,SiLangchain
} from 'react-icons/si';

import { motion } from 'framer-motion';
import Navbar  from '@/components/Navbar';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const skillList = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  return (
   <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <section className={styles.section}>
        <motion.h1
          className={styles.sectionTitle}
          variants={fadeInUp}
          custom={0}
        >
          About Me
        </motion.h1>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <motion.p variants={fadeInUp} custom={1}>
              Hi! I'm Virendra Vikram Singh, a passionate web developer and AI with over 1 years of experience
              in creating modern, responsive websites and web applications.
            </motion.p>

            <motion.p variants={fadeInUp} custom={2}>
              I specialize in React, Next.js, and modern JavaScript frameworks.
              I love turning complex problems into simple, beautiful designs.
            </motion.p>

            <motion.p variants={fadeInUp} custom={3}>
              I'm a web developer with a strong passion for building modern, responsive websites and applications
              that deliver great user experiences. In addition to my experience with front-end frameworks like React
              and Next.js, I'm deeply interested in the rapidly evolving field of generative AI. I enjoy exploring how
              GenAI tools can enhance development workflows, automate creative tasks, and bring new possibilities to the web.
              By combining solid coding skills with a curiosity for AI innovation, I aim to stay at the forefront of tech
              and create smarter, more efficient digital solutions.
            </motion.p>
            <motion.h3 variants={fadeInUp} custom={4}>Education</motion.h3>
            <motion.ul
  variants={fadeInUp}
  custom={5}
  style={{ listStyle: "none", padding: 0 }}
>
  <motion.li custom={6} variants={fadeInUp}>
    🎓 B.Tech in Computer Science — Shri Ramswaroop Memorial College of Engineering and Management (2022–2026)
  </motion.li>
  <motion.li custom={7} variants={fadeInUp}>
    🏫 Higher Secondary — Rani Laxmi Bai Memorial School (2020–2021)
  </motion.li>
  <motion.li custom={8} variants={fadeInUp}>
    📚 Secondary School — Rani Laxmi Bai Memorial School (2018–2019)
  </motion.li>
</motion.ul>


            <motion.h3 variants={fadeInUp} custom={4}>Skills</motion.h3>

            <motion.ul
              className={styles.skillsList}
              variants={skillList}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={skillItem}> <FaJs className={styles.icon} /> JavaScript (ES6+) </motion.li>
              <motion.li variants={skillItem}> <FaReact className={styles.icon} /> React </motion.li>
              <motion.li variants={skillItem}> <SiNextdotjs className={styles.icon} /> Next.js </motion.li>
              <motion.li variants={skillItem}> <SiHuggingface className={styles.icon} /> Huggingface </motion.li>
              <motion.li variants={skillItem}> <SiLangchain className={styles.icon} />langchain </motion.li>
              <motion.li variants={skillItem}> <FaGithub className={styles.icon} /> Git & GitHub </motion.li>
              <motion.li variants={skillItem}> <SiPostgresql className={styles.icon} /> PostgreSql </motion.li>
              <motion.li variants={skillItem}> <SiJupyter className={styles.icon} /> Jupyter Notebook </motion.li>
              <motion.li variants={skillItem}> <SiGooglecolab className={styles.icon} /> Googlecolab </motion.li>
            </motion.ul>

           <motion.h3 variants={fadeInUp} custom={5}>Internship</motion.h3>

            <motion.div className={styles.experience} variants={fadeInUp} custom={6}>
              <h4>IBM Virtual Internship</h4>
              <p>Learnt and Built GenAI Model . Completed Project and Certification</p>

              
            </motion.div>


          </div>
        </div>
      </section>
    </motion.div>
    // </Layout>
  );
}
