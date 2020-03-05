const path = require(`path`)
const { onCreateNode, createRemoteFileNode  } = require(`gatsby-source-filesystem`)

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


exports.onCreateNode = async ({  node,  actions: { createNode },  store,  cache,  createNodeId,}) =>  
 {
    let fileNode
    if (node.internal.type === `Movies`) {
      try {
        fileNode = await createRemoteFileNode({
          url: node.Img,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
      } catch (e) {
        // Ignore
        console.log(e)
      }
    }

    if (fileNode) {
      node.localImage___NODE = fileNode.id
    }
  }