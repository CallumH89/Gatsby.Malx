module.exports = {
  pathPrefix: '/Gatsby.Malx',
  siteMetadata: {
    title: `Gatsby Movies List`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        rootKey: 'Movies',
        url:
          'https://movieshowbizapi.peachdigital.com/movies/paginated/55/7924?startIndex=0&endIndex=-1&liteVersion=false&days=0&splitByAttributes=false&expandCinemas=false&expandAttributes=false&startDate=null&endDate=null&expandGenres=false&genres=&attributes=All&attributesExclusion=771',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
