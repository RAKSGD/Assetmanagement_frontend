import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import "./FooterStyles.css"
import { Link } from 'react-router-dom';
import './HeaderStyle.css';
import Welcome from './Welcome';

function Header() {
    return (
        <div className='container-fluid'>
            <div className='row'>
            <nav className="navbar navbar-wrapper navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
      <Link className="btn btn-outline-success my-2 my-sm-0 mx-2" to={`/login`}>Login</Link>
      <Link className="btn btn-outline-warning my-2 my-sm-0" to={`/signup`}>Sign up</Link>
    </form>
  </div>
</nav>
            </div>
            
            
              <Welcome/>
            
            
            
            <div className='row'>
                
            <footer className="footer page-footer font-small blue pt-4" >
      {/*<div className="content-wrap">© 2022 Copyright:  Asset Management Service
  </div>*/}
  
  © 2022 Copyright:  Asset Management Service
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
export default Header;