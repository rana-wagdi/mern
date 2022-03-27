import React from "react";
import '../styles/footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
function Footer(){

    return(
        
        <div className="footer">
        <div className="footer__items">
        <div className="footer__item">
            <h2>GET IN TOUCH</h2>
            <p>test@test.com</p>
            <p>0123456</p>
        </div>
        <div className="footer__item">
            <button>CONTACT ME</button>
        </div>
        <div className="footer__item">
        <AiFillFacebook className="social-icon" size="30px" />
        <AiOutlineTwitter className="social-icon" size="30px" />
        <FiInstagram className="social-icon" size="30px" />
            <p>test@test.com</p>
        
        </div>
        </div>
        </div>
        
    )
}

export default Footer;