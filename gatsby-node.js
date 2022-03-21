const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const pageTemplate = path.resolve(`src/templates/PageTemplate.tsx`)
    const projectTemplate = path.resolve(`src/templates/ProjectTemplate.tsx`)

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            parent {
              ... on File {
                name
                relativeDirectory
              }
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: node.parent.relativeDirectory === "" ? pageTemplate : projectTemplate,
                context: {
                    // additional data can be passed via context
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            })
        })
    })
}