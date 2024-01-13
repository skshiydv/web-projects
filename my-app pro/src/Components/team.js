import styles from "../Components/Style.module.css";
import mem1 from "../Components/elements/mem1.jpg"
import mem2 from "../Components/elements/mem2.jpg"
import mem3 from "../Components/elements/mem3.jpg"
import mem4 from "../Components/elements/mem4.jpg"


export default function Team() {
    const teamimages=[mem1,mem2,mem3,mem4]
    const memName=[  {
        Name: 'ANUBHAV',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        Name: 'DHEERAJ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        Name: 'ABHISHEK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        Name: 'ARYAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
     
    
    ]
    return (
        <div className={styles.big1}>
            <div id="team" className={styles.heading}>
                <h1>OUR TEAM</h1>
            </div>
        <div  className={styles.row2}>
            <div className={styles.team}>
                <img src={require("../Components/elements/image1.jpg")} alt="Team"></img>
                <h1>Who are we</h1>
                <p>CSED-Research Wing is a research lab that is part of the Computer Science and Engineering Department at GLA University. Our team of researchers is comprised of faculty members, graduate students, and undergraduate students who are passionate about advancing the state-of-the-art in computer science and engineering.</p>
            </div>
        <div className={styles.box2}>
        {
            teamimages.map((image,index)=>(
                <div key={index} className={styles.block}>
                    <div className={styles.mem1}>
                        <img src={image} alt="member"></img>
                        <h1>{memName[index].Name}</h1>
                    </div>
                    <div className={styles.more}>
                        <p>{memName[index].description}</p>
                    </div>
                </div>

            ))
        }
        </div>
        </div>
        </div>
      
        
         
       
    );
}
