import React, { useState } from 'react';
import styles from '../Components/Style.module.css';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
      <nav className={`${styles.header} ${isNavOpen ? styles.navOpen : styles.navClose}`}>
        <button type='button' className={styles.navToggle} onClick={toggleNav}><span class="material-symbols-outlined">
menu
</span></button>
        <div className={styles.navitems}>
        <a href="/">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#team">TEAM</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
}
