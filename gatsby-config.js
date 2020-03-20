module.exports = {
  siteMetadata: {
    title: `Squarepatch`,
    author: `Trevor Pennington`,
    description: `A simple e-commerce shop using Gatsby and Snipcart.`,
    siteUrl: `https://gatsby-snipcart-starter.netlify.com/`,
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
        name: `Gatsby Snipcart Starter`,
        short_name: `Gatsby Snipcart`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `thistle`,
        display: `minimal-ui`,
        icon: `content/assets/squarepatchicon.png`,
      },
    },
    `gatsby-plugin-offline`,
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
