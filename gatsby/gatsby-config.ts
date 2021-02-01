module.exports = {
  siteMetadata: {
    title: `Most Updated Internship and 100% All Coupons Courses`,
    description: `Be More Learn Everything is Free!!`,
    ogImage: "/moon.png",
    author: `unknown`,
    url: `https://react-mini-16338.web.app/`,
    siteUrl: `https://react-mini-16338.web.app/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "CourseCsv",
        imagePath: "featureimage",
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [],
        excludePaths: ["/", { regex: "^/coursefree" }, { regex: "^/posts" }],
        height: 6,
        color: `#f37121`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ClockCourse`,
        short_name: `ClockCourse`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/sun.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/../posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              isIconAfterHeader: true,
              elements: [`h2`],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`../src/components/provider.tsx`),
      },
    },
    // {
    //   resolve: 'gatsby-plugin-local-search',
    //   options: {
    //     // A unique name for the search index. This should be descriptive of
    //     // what the index contains. This is required.
    //     name: 'pages',

    //     // Set the search engine to create the index. This is required.
    //     // The following engines are supported: flexsearch, lunr
    //     engine: 'flexsearch',

    //     // Provide options to the engine. This is optional and only recommended
    //     // for advanced users.
    //     //
    //     // Note: Only the flexsearch engine supports options.
    //     engineOptions: 'speed',

    //     // GraphQL query used to fetch all data for the search index. This is
    //     // required.
    //     query: `
    //       {
    //         allMdx {
    //           nodes {
    //             id
    //             frontmatter {
    //               title
    //             }
    //             rawBody
    //           }
    //         }
    //       }
    //     `,

    //     // Field used as the reference value for each document.
    //     // Default: 'id'.
    //     ref: 'id',

    //     // List of keys to index. The values of the keys are taken from the
    //     // normalizer function below.
    //     // Default: all fields
    //     index: ['title', 'body'],

    //     // List of keys to store and make available in your UI. The values of
    //     // the keys are taken from the normalizer function below.
    //     // Default: all fields
    //     store: ['id', 'title'],

    //     // Function used to map the result from the GraphQL query. This should
    //     // return an array of items to index in the form of flat objects
    //     // containing properties to index. The objects must contain the `ref`
    //     // field above (default: 'id'). This is required.
    //     normalizer: ({ data }) =>
    //       data.allMarkdownRemark.nodes.map(node => ({
    //         id: node.id,
    //         title: node.frontmatter.title,
    //         body: node.rawBody,
    //       })),
    //   },
    // },
    `gatsby-plugin-styled-components`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-transformer-csv`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-typescript`,
  ],
}
