import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () =>{
    
    return(
        <nav className="nav">
            
            <ul>
                <li>
                    <span/>
                    
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <span/>
                    <Link to="#">Projects</Link>
                </li>
                <li>
                    <span/>
                    <Link to="#Description">Description</Link>
                </li>
                <li>
                    <span/>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar