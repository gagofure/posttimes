import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper red darken-3">
                    <div className="container">
                        <a href="/" className="brand-logo">Post'Times</a>
                        <ul  className="right ">
                            <li>< NavLink to="/">Home </NavLink></li>
                            <li>< Link to="/About">About</Link></li>
                            <li>< Link to="/Contact">Contact </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
