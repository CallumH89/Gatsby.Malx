module.exports = {
  siteMetadata: {
    title: `Gatsby Movies List`,
  },
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        rootKey: "Movies",
          url:  'https://moviegeorgiaapi.peachdigital.com/movies/paginated/34/200?liteVersion=false&expandGenres=false&genres=&excludeGenres=&startDate=2020-03-05&days=1&endDate=null&expandAttributes=true&splitByAttributes=false&expandCinemas=false&startIndex=0&number=24&attributes=All&attributesExclusion='

      }
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
}