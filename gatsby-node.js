
exports.createPages = async function ({ actions, graphql }) {

    const {data} = await graphql(`
    query {
      wordpress {
        categories {
          nodes {
            slug
            databaseId
          }
        }
        posts {
          nodes {
            id
            slug
            categories {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  `)


    actions.createPage({
          path: `/posts`,
          component: require.resolve("./src/templates/allPosts.js"),
        })
    actions.createPage({
          path: `/`,
          component: require.resolve("./src/templates/Home.js"),
        })


    data.wordpress.categories.nodes.forEach(nodes=> {
        const slug = nodes.slug
        const Catid = nodes.databaseId
        actions.createPage({
            path: slug,
            component: require.resolve("./src/templates/catPosts.js"),
            context: { Catid },
        })
  })

  data.wordpress.posts.nodes.forEach(nodes => {
    const slug = nodes.slug
    const cat = nodes.categories.nodes[0].slug
    const Postid = nodes.id
    actions.createPage({
        path: `${slug}`,
        component: require.resolve("./src/templates/singlePost.js"),
        context: { Postid },
    })
})
    
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}