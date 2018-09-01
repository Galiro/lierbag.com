module.exports = {
  siteMetadata: {
    title: 'Gabriel Rosa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
