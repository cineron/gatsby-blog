import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            {/* <h1>Hello, World!</h1>
            <p>I'm Ron. A Front-End Engineer focusing on React!</p>
            <p>Need a developer? <a href="/contact">Traditional link.</a></p>
            <p>Need a developer? <Link to="/contact">Gatsby link.</Link></p>
            <p>Need a developer? <Link to="/about">About me.</Link></p> */}
        </Layout>
    )
}

export default IndexPage