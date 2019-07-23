module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sass`,
      'gatsby-plugin-emotion'
    ],
  }