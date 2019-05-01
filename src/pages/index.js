import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello, World!</h1>
            <p>I'm Ron. A Front-End Engineer focusing on React!</p>
            {/* <p>Need a developer? <a href="/contact">Traditional link.</a></p> */}
            <p>Need a developer? <Link to="/contact">Gatsby link.</Link></p>
            <p>Need a developer? <Link to="/about">About me.</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage