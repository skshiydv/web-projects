import React from 'react';
import styles from '../Components/Style.module.css';
import teampic1 from '../Components/elements/teampic1.jpg';
import teamImage1 from '../Components/elements/team.png';
import teamImage2 from '../Components/elements/team2.png';

export default function Gallery() {
  const images = [teampic1, teamImage1, teamImage2, teampic1, teamImage1, teamImage2];

  return (
    <div className={styles.outerbox}>
      <p>CSED is committed to advancing research in the field of technology and its impact on society. Our research projects cover a wide range of topics, from artificial intelligence and machine learning to cybersecurity and data privacy. Through our work, we aim to develop innovative solutions to some of the most pressing challenges facing the tech industry today. Our team of experts is dedicated to staying at the forefront of technological advancements and using our knowledge to make a positive impact on the world.</p>

      <div className={styles.grid}>
        <div className={styles.images}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
