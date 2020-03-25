module.exports = {
  siteMetadata: {
    title: `Squarepatch`,
    author: `Trevor Pennington`,
    description: `Simple Squarespace plugins`,
    siteUrl: `https://www.squarepatch.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },




    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 350,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },





    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Squarepatch for Squarespace plugins`,
        short_name: `Squarepatch`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `thistle`,
        display: `minimal-ui`,
        icon: `content/assets/squarepatchicon.png`,
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        //replace with own Snipcart API key
        apiKey: 'ZjQ5MzRhNWQtYWNmZS00ZGJjLThkMTItMWZjN2RlZTk1ZjJjNjM3MTcyMzIyMzMzMzk2ODA3',
        autopop: true,
          }
    },
    `gatsby-plugin-styled-components`,
  ],
}
