module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Youngmin",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
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
  ],
  
};
