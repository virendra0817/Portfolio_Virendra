'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

const projects = [
  {
    id: 1,
    title: "Lung Cancer Prediction",
    description: "Developed a machine learning model to predict the likelihood of lung cancer based on patient symptoms and lifestyle factors.",
    technologies: ["Python", "Flask", "Jupyter Notebook", "FastAPI", "Jinja2"],
    liveUrl: "https://lung-cancer-prediction-95n5.onrender.com",
    githubUrl: "https://github.com/virendra0817/Lung_Cancer_Prediction.git",
  },
  {
    id: 2,
    title: "AQI Predictor",
    description: "AI model predicting the Air Quality Index based on pollutant levels like SO2, NO2.",
    technologies: ["Flask", "Python", "Jinja2", "dotenv", "Gemini", "joblib"],
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/virendra0817/Air_Quality_Index",
  },
  {
    id: 3,
    title: "AI-Powered Multi-Lingual Translator",
    description: "Real-time text translation across languages using Hugging Face models.",
    technologies: ["Google Colab", "Python", "Gradio", "Hugging Face"],
    liveUrl: "https://huggingface.co/spaces/Phantombeast1/ibm-project",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Iris-Pattern Prediction Model",
    description: "Classifies iris flowers into Setosa, Versicolor, or Virginica using ML models.",
    technologies: ["Flask", "Python", "Vercel", "Jinja2", "Joblib"],
    liveUrl: "https://iris-pattern-1.onrender.com",
    githubUrl: "https://github.com/virendra0817/iris_pattern",
  },
  {
    id: 5,
    title: "AI Explainer and Debugger",
    description: "Explains AI model behavior using SHAP and LIME. Detects bias, overfitting, and misclassification.",
    technologies: ["Python", "Gemini", "Flask", "SHAP", "LIME"],
    liveUrl: "https://explainer-and-debugger-1.onrender.com",
    githubUrl: "https://github.com/virendra0817/Explainer_and_Debugger",
  },
  {
    id:6,
    title:"KEEPER APP",
    description:"Keeper is a simple yet powerful app designed to help you capture and organize your thoughts with ease. Every note you create is securely stored in a structured database.",
    technologies:["javascript" ,"React","EXpress.js" ,"Axios" , "Postgresql" ],
    liveUrl:"https://keeper-app-1-22qy.onrender.com/",
    githubUrl:"https://github.com/virendra0817/Keeper_App.git"
  }
];

// 3D Cube Component
function RotatingCube() {
  return (
    <Canvas className={styles.cubeCanvas} camera={{ position: [2, 2, 4] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#00bcd4" />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default function AnimatedProjects() {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.sectionHeading}>My Projects</h1>
        <p className={styles.sectionSub}>Here are some of the projects I've worked on recently.</p>
      </motion.div>

      {/* 3D Cube */}
      <div className={styles.cubeWrapper}>
        <RotatingCube />
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
