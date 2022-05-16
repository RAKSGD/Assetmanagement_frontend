import React from 'react'
import { Link } from 'react-router-dom';

import '../../layout/component/HeaderStyle.css';

function Header() {
    return (
        <div>
            <div className='row'>
             <nav className="navbar navbar-wrapper navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
      </li>
      
      
      
      
      
    </ul>
    
  </div>
</nav>
</div>
        </div>
    )
}
export default Header;