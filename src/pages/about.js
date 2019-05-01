import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <h3>Ron Wilson</h3>
            <p>I'm a film and video editor turned software engineer focused on creating modern apps that connect people.</p>
            {/* <p><Link to="/contact">Contact me</Link></p> */}
            <Footer />
        </div>
    )
}

export default AboutPage;