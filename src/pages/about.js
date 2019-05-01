import React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <h3>Ron Wilson</h3>
            <p>I'm a film and video editor turned software engineer focused on creating modern apps that connect people.</p>
            <p><Link to="/contact">Contact me</Link></p>
        </div>
    )
}

export default AboutPage;