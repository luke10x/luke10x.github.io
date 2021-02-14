exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    const slug = node.frontmatter.slug;
    if (!slug) {
      // Projects don't have slug,
      // and pages have slug,
      // so do not create anything for projects 
      return
    } 
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug,
      },
    })
  })
}