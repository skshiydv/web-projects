import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from '../Components/Style.module.css';

export default function Socials() {
  return (
    <div>
      <div className={styles.list}>
        <ul>
          <li>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={`${styles.fab} fa-github`} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className={`${styles.fab} fa-linkedin-in`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
