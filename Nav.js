import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

const Nav = () =>{
    return(
            <nav className="nav">
                <h1>Trippy</h1>
                <div className="nav__">
                  <li>
                  <ul>
                    <Link to="/">Home</Link>
                    </ul>
                    <ul>
                    <Link to="/about">About</Link>
                    </ul>
                    <ul>
                    <Link to="/package">Packages</Link>
                    </ul>
                    <ul>
                    <Link to="/book">Book</Link>
                    </ul>
                  </li>
                </div>
                <div className="mobile-nav-btn">
                <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
                <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
                </div>
            </nav>
    )
}
export default Nav;