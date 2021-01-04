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
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `data`,
              path: `${__dirname}/src/data/`,
            },
          },
          {
            resolve: `gatsby-plugin-remote-images`,
            options: {
              nodeType: 'CourseCsv',
              imagePath: 'featureimage',
            },
          },
          `gatsby-plugin-styled-components`,
          "gatsby-transformer-sharp",
          "gatsby-plugin-sharp",
          `gatsby-transformer-csv`,
    ]
  }