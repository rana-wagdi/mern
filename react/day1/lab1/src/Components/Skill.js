import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../styles/skill.css'


function Skill(){
    return(
        <section class="skills_section">
        <header>
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </header>
        <div className="skill__items">
        <div className="skill__item">
        <h3>MY FOCUS</h3>
        <hr />
        <ul>
        <li>UI/UX Design</li>
        <li>Responsive Design</li>
        <li>Web Design</li>
        <li>Mobile App Design</li>
        </ul>
        </div>
        <div className="skill__item" >
        <div className="prog">
        <ProgressBar className="pro" variant="success" now={90} label={`90 % HTML`} /><br />
      <span> <ProgressBar variant="info" now={80} label={`80 % CSS`}/><br /></span> 
      <ProgressBar className="pro" variant="success" now={40} label={`40 % Bootstrap`} /><br />
      
        {/* <ProgressBar variant="success" now={90} /><br />
        <ProgressBar variant="success" now={100} /> */}
        <ProgressBar variant="success" now={40} />
        </div>
        </div>
       
        
        </div>
    </section>
    )

}
export default Skill;