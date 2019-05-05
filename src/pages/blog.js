import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";

// CHALLENGE: Render list of Blog Titles and Dates 
// 1. Query the title and date for each post in the blog component 
// 2. Render an ol on the page 
// 3. Render an li with a nested h2 (title) and p (date) for each post 
//     - Google "render array of objects react" if needed

// CHALLENGE 2: Link to Blog Posts 
// 1. fetch the slug for the post
// 2. use slug to generate link to the post page

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        fields {
                                slug
                        }
                    }
                }
            }
        }
    `);
    // console.log(data);

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here.</p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                            </Link>
                                <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;