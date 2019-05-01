import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>I'm Ron. A Front-End Engineer focusing on React!</p>
            {/* <p>Need a developer? <a href="/contact">Traditional link.</a></p> */}
            <p>Need a developer? <Link to="/contact">Gatsby link.</Link></p>
            <p>Need a developer? <Link to="/about">About me.</Link></p>
        </div>
    )
}

export default IndexPage

// Challenge: add links. 
// 1. contact page - link to twitter profile 
// 2. about page - link to contact page