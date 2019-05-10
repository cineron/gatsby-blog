import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import blogStyles from "./blog.module.scss";
import Head from "../components/head";

const BlogPage = () => {
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

export default BlogPage;