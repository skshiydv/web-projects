
import styles from "../Components/Style.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <div className={styles.footersection}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum vel quam vel dapibus.
          </p>
        </div>

        <div className={styles.footersection}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.footersection}>
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className={styles.footerbottom}>
        <p>&copy; 2023 Your App</p>
      </div>
    </footer>
  );
};

export default Footer;
