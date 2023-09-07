"use client";
import React, { useEffect } from 'react';
import styles from '../Assets/CSS/Header.module.css'; // Styles
import Image from 'next/image';
import icon from '../Assets/Images/icon.png';
import gsap from "gsap"; // GSAP

function Header() {
  useEffect(() => {
    // Animation with GSAP
    gsap.from(`.${styles.logo}`, { y: -100, opacity: 1, duration: 0.7, ease: 'power2.out' });
    gsap.to(`.${styles.logo}`, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' });

    gsap.from(`.${styles.btn}`, { y: -100, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.3 });
    gsap.to(`.${styles.btn}`, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.3 });

    gsap.from(`.${styles['nav-link']}`, { opacity: 1, x: -1300, stagger: 0.2, duration: 0.7, ease: 'power2.out', delay: 0.3 });
    gsap.to(`.${styles['nav-link']}`, { opacity: 1, x: 10, stagger: 0.2, duration: 0.7, ease: 'power2.out', delay: 0.3 });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={icon} alt="logo"/>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles['nav-link']}>Emotions</li>
          <li className={styles['nav-link']}>Manifesto</li>
          <li className={styles['nav-link']}>Self-awareness test</li>
          <li className={styles['nav-link']}>Work With Us</li>
        </ul>
      </nav>
      <button className={styles.btn}>Download app</button>
    </header>
  );
}

export default Header;
