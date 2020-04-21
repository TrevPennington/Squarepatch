const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const item = path.resolve(`./src/templates/item.js`)
  const blog = path.resolve(`./src/templates/blog.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                posttype
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create item posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node



      if (post.node.frontmatter.posttype === 'product') { //product post

      createPage({
        path: post.node.fields.slug,
        component: item,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })

    } else { //blog post
      createPage({
        path: post.node.fields.slug,
        component: blog,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })


    }


    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
