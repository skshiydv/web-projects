
import styles from "../Components/Style.module.css";

import { Link} from "react-router-dom";
export default function Page1(){
    function handleClick(){
        <Link to="/Learn"></Link>
    }
    return (
        <div id="home" className={styles.page1}>
       <div className={styles.container1}>
        <div className={styles.text}>
            <h1>CREATE</h1>
            <h1>INNOVATE</h1>
            <h1>INSPIRE</h1></div>
            <div className={styles.para}>
            <p>CSED-Research Wing is a research lab that specializes in cutting-edge research in computer science and engineering. Our goal is to advance the state-of-the-art in these fields and to develop innovative solutions to real-world problems </p>
            <button onClick={handleClick} id={styles.Learn} className={styles.learnmore}>Learn More</button>
            </div>
           
       
        </div> 
        </div>
    );
}