'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import styles from '@/styles/Home.module.css';

const projects = [
  { title: 'Blog Writing Agent', description: 'An AI-assisted writing workspace that helps transform ideas into polished blog content.', technologies: ['Python', 'Streamlit', 'Generative AI'], liveUrl: 'https://blog-agent0.streamlit.app/', githubUrl: 'https://github.com/virendra0817/Blog_writing-_Agent-.git' },
  { title: 'Multi-Doc RAG System', description: 'A retrieval-augmented generation app for asking grounded questions across multiple documents.', technologies: ['Python', 'RAG', 'LLMs', 'Streamlit'], liveUrl: 'https://virendra0817-multi-doc-rag-app-on4t3k.streamlit.app/', githubUrl: 'https://github.com/virendra0817/Multi-doc-RAG.git' },
  { title: 'TaxCalc', description: 'A fast, accessible tax calculator that makes estimating tax obligations straightforward.', technologies: ['JavaScript', 'React', 'Vercel'], liveUrl: 'https://tax-calc-jet.vercel.app/', githubUrl: 'https://github.com/virendra0817/TaxCalc.git' },
  { title: 'Taskflow', description: 'A practical task-management application for organizing work and keeping priorities visible.', technologies: ['JavaScript', 'Web App', 'Render'], liveUrl: 'https://taskflow-4710.onrender.com/', githubUrl: 'https://github.com/virendra0817/Taskflow.git' },
  { title: 'Lung Cancer Prediction', description: 'A machine-learning model that estimates lung cancer likelihood from symptoms and lifestyle factors.', technologies: ['Python', 'Flask', 'FastAPI'], liveUrl: 'https://lung-cancer-prediction-95n5.onrender.com', githubUrl: 'https://github.com/virendra0817/Lung_Cancer_Prediction.git' },
  { title: 'AI Multilingual Translator', description: 'Real-time text translation across languages using Hugging Face models.', technologies: ['Python', 'Gradio', 'Hugging Face'], liveUrl: 'https://huggingface.co/spaces/Phantombeast1/ibm-project', githubUrl: null },
  { title: 'Iris Pattern Predictor', description: 'A machine-learning classifier for identifying iris flower varieties.', technologies: ['Python', 'Flask', 'Vercel'], liveUrl: 'https://iris-pattern-1.onrender.com', githubUrl: 'https://github.com/virendra0817/iris_pattern' },
  { title: 'Keeper App', description: 'A simple, structured space for capturing and organizing notes.', technologies: ['React', 'Express', 'PostgreSQL'], liveUrl: 'https://keeper-app-1-22qy.onrender.com/', githubUrl: 'https://github.com/virendra0817/Keeper_App.git' },
];

export default function AnimatedProjects() {
  return (
    <section className={styles.section}>
      <motion.div className={styles.sectionHeading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className={styles.eyebrow}>Selected work</p>
        <h1>Projects made to be useful.</h1>
        <p>From practical web tools to AI-powered applications, here are some things I’ve built recently.</p>
      </motion.div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => <motion.article key={project.title} className={`${styles.projectCard} ${styles.glass}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: Math.min(index * 0.06, 0.3) }}>
          <span className={styles.projectNumber}>0{index + 1}</span>
          <h3>{project.title}</h3><p>{project.description}</p>
          <div className={styles.technologies}>{project.technologies.map((tech) => <span className={styles.techTag} key={tech}>{tech}</span>)}</div>
          <div className={styles.links}>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.linkButton}>Live demo <FaExternalLinkAlt /></a>
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.linkButton}><FaGithub /> Code</a>}
          </div>
        </motion.article>)}
      </div>
    </section>
  );
}
