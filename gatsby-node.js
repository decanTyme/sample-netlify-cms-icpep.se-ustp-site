const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      thumbnailExt: File @link(from: "fields.remoteFile")
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  store,
  cache,
  createNodeId,
}) => {
  const regex =
    "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"

  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === "MarkdownRemark" && node.frontmatter.thumbnail) {
    if (node.frontmatter.thumbnail.match(regex)) {
      console.log({ thumbnailExt: node.frontmatter.thumbnail })
      const fileNode = await createRemoteFileNode({
        url: node.frontmatter.thumbnail, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
      })

      // if the file was created, extend the node with "remoteFile"
      if (fileNode) {
        createNodeField({ node, name: "remoteFile", value: fileNode.id })
      }
    } else {
      console.log({ thumbnail: node.frontmatter.thumbnail })
      createNodeField({ node, name: "File", value: node.id })
    }
  }
}
