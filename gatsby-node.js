// GOALS
// 1. Generate a slug for each post 
// gatsby.md > gatsby > /blog/gatsby 
// 2. Generate the blog post page template 
// 3. Generate a new page for each post 


const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    if (node.internal.type === "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath, ".md");
        // console.log("===========>",slug);
        createNodeField({
            node,
            name: "slug",
            value: slug
        });
        // console.log(JSON.stringify(node, undefined, 4));
    }

}