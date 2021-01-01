module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
              url: "http://clockcouse.local/graphql",
              fieldName: `wordpress`,
              typeName: `WPGraphQL`
            },
          },
          `gatsby-plugin-styled-components`,
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`,
            },
          },
          "gatsby-transformer-sharp",
          "gatsby-plugin-sharp",
    ]
  }