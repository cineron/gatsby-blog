// GOALS
// 1. Generate a slug for each post 
// gatsby.md > gatsby > /blog/gatsby 
// 2. Generate the blog post page template 
// 3. Generate a new page for each post 


const path = require("path")

// used to create the node for Markdown
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
    
//     if (node.internal.type === "MarkdownRemark"){
//         const slug = path.basename(node.fileAbsolutePath, ".md");
//         // console.log("===========>",slug);
//         createNodeField({
//             node,
//             name: "slug",
//             value: slug
//         });
//         // console.log(JSON.stringify(node, undefined, 4));
//     }
// };

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    
    // 1. Get path to template
    // 2. Get markdown data 
    // 3. Create new pages 

    // GraphQL Query for Markdown
    // const blogTemplate = path.resolve("./src/templates/blog.js");
    // const res = await graphql(`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    //for Contentful
    const blogTemplate = path.resolve("./src/templates/blog.js");
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    // for markdown
    // res.data.allMarkdownRemark.edges.forEach((edge) => {
    //     createPage({
    //         component: blogTemplate,
    //         path: `/blog/${edge.node.fields.slug}`,
    //         context: {
    //             slug: edge.node.fields.slug
    //         }
    //     })
    // })

    //for Contentful
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
};