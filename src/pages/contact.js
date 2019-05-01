import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <h3>ron@cineron.com</h3>
            <p><a href="https://www.twitter.com/cineron" target="_blank" rel="noopener noreferrer">Tweet it up, yo.</a></p>
            <Footer />
        </div>
    )
}

export default ContactPage;