require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Bulma Starter",
  },
  plugins: [
    'gatsby-plugin-sass',
  ],
};
