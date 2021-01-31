




exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allPostCatgoriesCsv {
        nodes {
          name
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        distinct(field: fields___categorySlug)
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            category
          }
        }
      }
      allCourseCsv {
        distinct(field: fields___categorySlug)
        nodes {
          fields {
            slug
          }
          title
          featureimage
          category
        }
      }
      pagination: allCourseCsv(limit: 12) {
        pageInfo {
          pageCount
          perPage
        }
      }
    }
  `)

  // this is home page


  actions.createPage({
    path: `/posts`,
    component: require.resolve("./src/templates/allPosts.js"),
  })

  data.allMdx.distinct.forEach(name => {
    actions.createPage({
      path: name,
      component: require.resolve("./src/templates/catPosts.js"),
      context: { name },
    })
  })

  data.allCourseCsv.nodes.forEach(nodes => {
    const name = nodes.fields.slug
    const CategoryName = nodes.category
    actions.createPage({
      path: name,
      component: require.resolve("./src/templates/coursePost.js"),
      context: { name, CategoryName },
    })
  })

  data.allCourseCsv.distinct.forEach(name => {
    actions.createPage({
      path: name,
      component: require.resolve("./src/templates/courseCatPost.js"),
      context: { name },
    })
  })

  data.allMdx.nodes.forEach(post => {
    actions.createPage({
      path: post.fields.slug,
      component: require.resolve("./src/templates/mdxsinglePost.js"),
      context: {
        title: post.frontmatter.title,
        category: post.frontmatter.category,
      },
    })
  })

  Array.from({ length: data.pagination.pageInfo.pageCount }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/course` : `/course/${i + 1}`,
      component: require.resolve("./src/templates/allCoursePost.js"),
      context: {
        limit: data.pagination.pageInfo.perPage,
        skip: i * data.pagination.pageInfo.perPage,
        numPages: data.pagination.pageInfo.pageCount,
        currentPage: i + 1,
      },
    })
  })
}






exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `Mdx`) {
    const slug = node.frontmatter.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
    const categorySlug = node.frontmatter.category.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
    
    createNodeField({
      name: `categorySlug`,
      node,
      value: categorySlug,
    })
  }

  if (node.internal.type === `CourseCsv`) {
    const slug = node.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
    const categorySlug = node.category.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
    
    createNodeField({
      name: `categorySlug`,
      node,
      value: categorySlug,
    })
  }
}


