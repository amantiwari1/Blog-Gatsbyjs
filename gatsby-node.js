
exports.createPages = async function ({ actions, graphql }) {

    const {data} = await graphql(`
    query {
      allCourseCategoryCsv {
        nodes {
          name
          slug
        }
      }
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
      allCourseCsv {
        nodes {
          id
          slug
          featureimage
        }
      }
    }
  `)


    actions.createPage({
          path: `/posts`,
          component: require.resolve("./src/templates/allPosts.js"),
        })
    actions.createPage({
          path: `/coursefree`,
          component: require.resolve("./src/templates/allCoursePost.js"),
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
    data.allCourseCategoryCsv.nodes.forEach(nodes=> {
        const slug = nodes.slug
        const name = nodes.name
        actions.createPage({
            path: slug,
            component: require.resolve("./src/templates/courseCatPost.js"),
            context: { name },
        })
  })

  data.wordpress.posts.nodes.forEach(nodes => {
    const slug = nodes.slug
    const Postid = nodes.id
    actions.createPage({
        path: `${slug}`,
        component: require.resolve("./src/templates/singlePost.js"),
        context: { Postid },
    })
})

  data.allCourseCsv.nodes.forEach(nodes => {
    const slug = nodes.slug
    const Postid = nodes.id
    actions.createPage({
        path: `${slug}`,
        component: require.resolve("./src/templates/coursePost.js"),
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