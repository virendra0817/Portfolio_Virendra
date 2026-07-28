'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Home.module.css';

const links = [
  ['Home', '/'],
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={`${styles.navbar} ${styles.glass}`} aria-label="Main navigation">
      <Link href="/" className={styles.navBrand}>Virendra<span>.</span></Link>
      <div className={styles.navLinks}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
