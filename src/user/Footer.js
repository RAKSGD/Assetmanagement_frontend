import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "../layout/component/FooterStyles.css";

function Footer() {
    return (
        <div>         
            <div className='row'>    
                <footer className="footer page-footer font-small blue pt-4" >
          {/*<div className="content-wrap">© 2022 Copyright:Asset Management Service
      </div>*/}
      
      © 2022 Copyright: Asset Management Service
      <div className='social-container'>
      
            <h6>Follow Us</h6>
            
    <a
      target="_blank" href="https://www.facebook.com"
      className="facebook social">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a target="_blank" href= "https://twitter.com"
    className="twitter social">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a target="_blank" href="https://instagram.com"
      className="instagram social">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        </div>
        </footer>
        </div>   

        </div>
    )
}
export default Footer;