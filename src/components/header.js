import React from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {
    return(
        <header className={headerStyles.header}>
            <h1 ><Link to="/" className={headerStyles.title}>Ron Wilson</Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" 
                            className={headerStyles.navItem} 
                            activeClassName={headerStyles.navItemActive}>Home
                        </Link>
                    </li>
                    <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>About</Link></li>
                    <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>Blog</Link></li>
                    <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>Contact Me</Link></li>
                </ul>
            </nav>        
        </header>
    )
}

export default Header;