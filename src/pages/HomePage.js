import React from 'react';
import { faFacebook, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                <span> Arash Saeedi </span>
                </h1>
                <p className="h-sub-text">
                 Full Stack Developer (in training)
            </p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=22620493" target="_blank" rel="noopener noreferrer" className="icon-holder">
                    <FontAwesomeIcon icon={faFacebook} className='icon fb'/>
                    </a>
                    <a href="https://github.com/Haru2727" target="_blank" rel="noopener noreferrer" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className='icon gh'/>
                    </a>
                    <a href="https://twitter.com/haru2780107602" target="_blank" rel="noopener noreferrer" className="icon-holder">
                    <FontAwesomeIcon icon={faTwitter} className='icon tw'/>
                    </a>
                    <a href="https://www.linkedin.com/in/arash-saeedi-b18307127/" target="_blank" rel="noopener noreferrer" className="icon-holder">
                    <FontAwesomeIcon icon={faLinkedin} className='icon lk'/>
                    </a>
                 
               
                </div>
            </header>
        </div>
    )
}

export default HomePage;