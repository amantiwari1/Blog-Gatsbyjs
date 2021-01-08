const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            title
          }
        }
      }
      allCourseCategoryCsv {
        nodes {
          name
          slug
        }
      }
      allCourseCsv {
        nodes {
          id
          slug
          title
          featureimage
        }
      }
    }
  `);

  // this is home page

  actions.createPage({
    path: `/`,
    component: require.resolve("./src/templates/Home.js"),
  });



  actions.createPage({
    path: `/coursefree`,
    component: require.resolve("./src/templates/allCoursePost.js"),
  });

  actions.createPage({
    path: `/posts`,
    component: require.resolve("./src/templates/allPosts.js"),
  });

  data.allCourseCsv.nodes.forEach((nodes) => {
    const name = nodes.title;
    const Postid = nodes.id;
    actions.createPage({
      path: name.split(" ").join("-").toLowerCase(),
      component: require.resolve("./src/templates/coursePost.js"),
      context: { Postid },
    });
  });

  data.allCourseCategoryCsv.nodes.forEach((nodes) => {
    const name = nodes.name;
    actions.createPage({
      path: name.split(" ").join("-").toLowerCase(),
      component: require.resolve("./src/templates/courseCatPost.js"),
      context: { name },
    });
  });

  data.allMdx.nodes.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.title.split(" ").join("-").toLowerCase(),
      component: require.resolve("./src/templates/mdxsinglePost.js"),
      context: {
        title: post.frontmatter.title,
      },
    })
  })
  
};


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
