const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
  query {
    allMovies {
      edges {
        node {
          FriendlyName
        }
      }
    }
  }
  `)
  data.allMovies.edges.forEach(edge => {
    actions.createPage({
      path: edge.node.FriendlyName,
      component: require.resolve(`./src/templates/MovieInfo.tsx`),
      context: { slug: edge.node.FriendlyName },
    })
  })
}