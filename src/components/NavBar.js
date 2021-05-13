import React from 'react';
import avatar from '../../src/images/stairs-me.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="Arash Saeedi" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                         </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 Arash Saeedi
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar;