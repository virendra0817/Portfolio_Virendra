'use client';

import styles from '@/styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Virendra Vikram Singh. All Rights Reserved.</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/virendra0817" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/virendra-vikram-singh-532a7a268" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="/Virendra_CV.pdf" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>
    </footer>
  );
}
