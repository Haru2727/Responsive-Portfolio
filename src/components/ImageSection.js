import React from 'react';
import About from '../images/profile.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={About} alt="" />
            </div>

            <div className="about-info">
                <h4> I am <span> Arash Saeedi </span></h4>
                <p className="about-text">lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consetur</p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Spoken Languages</p>
                            <p>Intrests</p>
                    </div>
                        <div className="right-section">
                            <p>: Arash Saeedi</p>
                            <p>: 37</p>
                            <p>: Atlanta, Ga</p>
                            <p>: English, Farzi, some Spanish</p>
                            <p>: Cooking, Coding, Movies, Sports, Bike Riding</p>
                        </div>
                    </div>
                    <button className="btn">Resume</button>
                </div>
            </div>
    )
}

export default ImageSection;