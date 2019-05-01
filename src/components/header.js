import React from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {
    return(
        <header>
            <h1>Ron Wilson</h1>
            <nav>
                <ul>
                    <li><Link to="/" className={headerStyles.link}>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>        
        </header>
    )
}

export default Header;