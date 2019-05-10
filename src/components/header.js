import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                    description
                }
            }
        }
    `);
    // console.log(data.site.siteMetadata.title);
    return(
        <header className={headerStyles.header}>
            <h1 ><Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link></h1>
            <h2>{data.site.siteMetadata.description}</h2>

            <nav>
                <ul className={headerStyles.navList}>
                    {/* <li>npm
                        <Link to="/" 
                            className={headerStyles.navItem} 
                            activeClassName={headerStyles.navItemActive}>Home
                        </Link>
                    </li>
                    <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>About</Link></li>
                    <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>Blog</Link></li>
                    <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}>Contact Me</Link></li> */}
                    
                    <li><a className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}href="https://www.linkedin.com/in/cineron" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}href="https://www.github.com/cineron" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}href="https://www.twitter.com/cineron" target="_blank" rel="noopener noreferrer">Twitter</a></li>            
                </ul>
            </nav>        
        </header>
    )
}

export default Header;