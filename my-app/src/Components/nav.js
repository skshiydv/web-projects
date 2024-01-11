import styles from "../Components/Style.module.css";
import { Outlet, Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Nav() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={styles.header}>
      <div className={styles.navitems}>
        <nav>
          <ScrollLink
            to="/home"  // Adjust the target ID based on your page structure
            smooth="true" spy="true"
            onClick={scrollToTop}
          >
            HOME
          </ScrollLink>

          <ScrollLink to="/team" smooth="true" spy="true" onClick={scrollToTop}>
            TEAM
          </ScrollLink>

          <ScrollLink
            to="/projects"
            smooth="true"
            spy="true"
            onClick={scrollToTop}
          >
            PROJECTS
          </ScrollLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
