import styles from '@/styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${styles.glass}`}>
      <p>© {new Date().getFullYear()} Virendra Vikram Singh. Built with curiosity.</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/virendra0817" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/virendra-vikram-singh-532a7a268" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="/virendra_resume.pdf" download>Download CV</a>
      </div>
    </footer>
  );
}
