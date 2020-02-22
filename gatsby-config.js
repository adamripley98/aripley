module.exports = {
  siteMetadata: {
    title: `Adam Ripley`,
    description: `Personal site for Adam Ripley built with Gatsby`,
    author: `Adam Ripley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adam-ripley`,
        short_name: `adamripley`,
        start_url: `/`,
        background_color: `#05853a`,
        theme_color: `#05853a`,
        display: `minimal-ui`,
        icon: `src/images/alogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
