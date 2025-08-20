'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Home.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        
      </div>
      <Link href="/"className={`${styles.secondaryButton} ${pathname === '/' ? styles.active : ''}`}>
            Home
          </Link>
        
        
          <Link
            href="/projects"
            className={`${styles.secondaryButton} ${pathname === '/projects' ? styles.active : ''}`}
          >
            View My Work
          </Link>
        
        
          <Link
            href="/contact"
            className={`${styles.secondaryButton} ${pathname === '/contact' ? styles.active : ''}`}
          >
            Get In Touch
          </Link>
        
          <Link
            href="/about"
            className={`${styles.secondaryButton} ${pathname === '/about' ? styles.active : ''}`}
          >
            About Me
          </Link>
      
    
    </nav>
  );
}
