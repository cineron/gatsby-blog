import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

import { Link, useStaticQuery, graphql } from "gatsby";
import blogStyles from "./blog.module.scss";

const IndexPage = () => {
    // return (
    //     // <Layout>
    //     //     <Head title="Home" />
    //     //     {/* <h1>Hello, World!</h1>
    //     //     <p>I'm Ron. A Front-End Engineer focusing on React!</p>
    //     //     <p>Need a developer? <a href="/contact">Traditional link.</a></p>
    //     //     <p>Need a developer? <Link to="/contact">Gatsby link.</Link></p>
    //     //     <p>Need a developer? <Link to="/about">About me.</Link></p> */}
    //     // </Layout>
        
    // )
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
            sort: {
                fields: publishedDate,
                order: DESC
            }
        ){
            edges {
                node {
                    title
                    slug
                    first: publishedDate(
                        fromNow: true
                    )
                    second: publishedDate(
                        formatString: "MMMM Do, YYYY"
                    )
                }
            }
        }
    }
    `);
    // console.log(data);

    return (
        <Layout>
            <Head title="blog" />
            {/* <h1>Blog</h1>
            <p>Posts will show up here.</p> */}
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>First published {edge.node.first} on {edge.node.second}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default IndexPage