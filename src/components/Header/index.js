import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header id="masthead">
        <div className="container"> 
            <a href="index.html" id="logo">Arash Saeedi</a>
            <nav>
                <a href="index.html" alt="About Me">About</a>
                <a href="portfolio.html" alit="Portfolio">Portfolio</a>
                <a href="contact.html" alt="Contact">Contact</a>
                <a href="https://drive.google.com/file/d/16ayR8AhMFZ5i1XRgM_fv26iLHE-enoFy/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </nav>
        </div>
    </header>
    )
}

export default Header;