import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <h3>ron@cineron.com</h3>
            <p><a href="https://www.twitter.com/cineron" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        </Layout>
    )
}

export default ContactPage;