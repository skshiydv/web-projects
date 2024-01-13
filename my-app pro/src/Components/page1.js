import Nav from "./nav";
import { useState } from "react";
import styles from "../Components/Style.module.css";

import { Link} from "react-router-dom";
export default function Page1(){
    let info="CSED-Research Wing is a research lab that specializes in cutting-edge research in computer science and engineering. Our goal is to advance the state-of-the-art in these fields and to develop innovative solutions to real-world problems";
    let learn="CSED is a state-of-the-art experience center and the “Industry inside the institute” where the latest Industry 4.0 technological skills like IoT, Data Analytics, Machine Learning, Artificial Intelligence, Blockchain, and Smart Manufacturing are being imparted using experiential project-based learning model. CSED is equipped with industrial-level technologies like PTC ThinkWorx platform, Dassault system’s CATIA and Mastercam CAD/CAM. CSED hosts industrial level machines like Robotic Arms, 4Axis CNC Vertical Machining Center, 3D Router, Rapid Prototyping Machine, Blue-White Light 3D Scanner, Conventional Lathe, CNC Lathe, Spot Welding Machine, CO2 Welding Machine, M1TR, Surface Grinding Machine & 300 Ton Hydraulic Deep Draw Press. To ensure the highest quality of education, courses at CSED are taught by industry experts and professionals";
   const[state,setState]=useState(info);
    function handleClick(){
        setState(learn);
    }
    return (
        <div id="home" className={styles.page1}>
        
       <div className={styles.container1}>
        <div className={styles.text}>
            <h1>CREATE</h1>
            <h1>INNOVATE</h1>
            <h1>INSPIRE</h1></div>
            <div className={styles.para}>
            <p>{state} </p>
            <button onClick={handleClick} id={styles.Learn} className={`${styles.learnmore} ${state===learn? styles.learn  : styles.info}`}>Learn More</button>
            </div>
           
       
        </div> 
        </div>
    );
}