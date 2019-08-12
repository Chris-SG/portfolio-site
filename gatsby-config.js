module.exports = {
  siteMetadata: {
    siteTitle: `Chris Shand-Gost`,
    siteTitleAlt: `Chris-SG`,
    siteHeadline: `Chris Shand-Gost's Portfolio`,
    siteUrl: `https://chris-sg.github.io`,
    siteDescription: ``,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Chris Shand-Gost`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
}
