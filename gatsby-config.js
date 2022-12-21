module.exports = {
  siteMetadata: {
    siteUrl: "https://devlog.kro.kr",
    title: "Dev log | Main",
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: "./src/docs",
      },
      __key: "docs",
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `/svg/`
        }
      }
    }
  ],
};
