import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* //NavLink active class */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <NavLink
                            to="/Ms"
                            exact activeClassName="activeLink" 
                        >Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/Movies"
                            exact activeClassName="activeLink" 
                        >Movies</NavLink>
                       
                    </li>

                    
                </ul>

            </div>
        </nav>
    )
}
