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
                    lorem ipsum dolor sit amet, consectetur adipis
            </p>
                <div className="icons">
                    <Link  className="icon-holder">
                    <FontAwesomeIcon icon={faFacebook} className='icon fb'/>
                    </Link>
                    <Link className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className='icon gh'/>
                    </Link>
                    <Link className="icon-holder">
                    <FontAwesomeIcon icon={faTwitter} className='icon tw'/>
                    </Link>
                    <Link className="icon-holder">
                    <FontAwesomeIcon icon={faLinkedin} className='icon lk'/>
                    </Link>
                 
               
                </div>
            </header>
        </div>
    )
}

export default HomePage;