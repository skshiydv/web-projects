import React from 'react';
import styles from "../Components/Style.module.css";
import  { useState, useEffect } from 'react';

export default function Timer(){
    const targetDate = new Date('January 15, 2024 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timerId);
}, []);

function calculateTimeRemaining() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

return (
  <div className={styles.time}>
    <p className={styles.hire} >We will be hiring first year students:</p>
    <p>{`${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, ${timeRemaining.seconds} seconds`}</p>
  </div>
);
}



