import React from 'react';
// import Home from './components/Home.js';
// import About from './components/About.js';
// import Contact from './components/Contact.js';


const Navbar = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper red darken-3">
                    <div className="container">
                        <a href="/" className="brand-logo">Post'Times</a>
                        <ul  className="right ">
                            <li><a href="/">Home </a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Contact">Contact </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
