module.exports = {
  siteMetadata: {
    title: `Gatsby Movies List`,
  },
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        rootKey: "Movies",
          url:  'https://moviegeorgiaapi.peachdigital.com/movies/paginated/34/?liteVersion=false&expandGenres=false&genres=&excludeGenres=&startDate=null&days=0&endDate=null&expandAttributes=true&splitByAttributes=false&expandCinemas=true&startIndex=0&number=12&attributes=All&attributesExclusion='

      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}