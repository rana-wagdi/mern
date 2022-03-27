import React from "react";
import '../styles/about.css'

function AboutMe(){
    return(
        <section class="aboutMe-section">

        <div class="aboutMe__items">
        <div >
        <h1>About Me</h1>
        
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
    
    
            <a  download="cv.pdf" href="../assets/Docs/cv.pdf" >Download Resum</a>
       
        </div>
        </div>
    
    
    </section>
    )
}

export default AboutMe;