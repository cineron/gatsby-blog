import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import blogStyles from "./blog.module.scss";
import Head from "../components/head";

// CHALLENGE: Render list of Blog Titles and Dates 
// 1. Query the title and date for each post in the blog component 
// 2. Render an ol on the page 
// 3. Render an li with a nested h2 (title) and p (date) for each post 
//     - Google "render array of objects react" if needed

// CHALLENGE 2: Link to Blog Posts 
// 1. fetch the slug for the post
// 2. use slug to generate link to the post page

// CHALLENGE 3: Render Contentful Blog Posts 
// 1. swap markdown query for contentful query
// 2. update component to render new data



// const BlogPage = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             allMarkdownRemark{
//                 edges{
//                     node{
//                         frontmatter{
//                             title
//                             date
//                         }
//                         fields {
//                                 slug
//                         }
//                     }
//                 }
//             }
//         }
//     `);
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

    // return (
    //     <Layout>
    //         <h1>Blog</h1>
    //         <p>Posts will show up here.</p>
    //         <ol className={blogStyles.posts}>
    //             {data.allMarkdownRemark.edges.map((edge) => {
    //                 return (
    //                     <li className={blogStyles.post}>
    //                         <Link to={`/blog/${edge.node.fields.slug}`}>
    //                             <h2>{edge.node.frontmatter.title}</h2>
    //                             <p>{edge.node.frontmatter.date}</p>
    //                         </Link>
    //                     </li>
    //                 )
    //             })}
    //         </ol>
    //     </Layout>
    // )
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <p>Posts will show up here.</p>
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