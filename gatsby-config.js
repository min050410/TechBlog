module.exports = {
  siteMetadata: {
    siteUrl: "https://devlog.kro.kr",
    title: "Dev log | Main",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "md",
        path: "./src/md",
      },
      __key: "md",
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
