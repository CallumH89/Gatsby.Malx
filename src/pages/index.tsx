import React from "react"
import { graphql } from "gatsby"
import "../scss/app.scss";
import { MovieGrid, MovieGridContext } from "../components/MovieGrid/MovieGrid";
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>
          Now Showing
        </h1>
          <MovieGridContext.Provider value={{
            showSessions:false,
            hasSynopsis: true,
            hasDetails: true,
            isCentered: false,
            sessionsPerRow: 4,
            hasTrailerIcon: true,
            hasOverlay: true,
            isTrailerOnly:false}}>
            <MovieGrid 
              data={data.allMovies.edges} fallBackPoster={data.file} />
          </MovieGridContext.Provider>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMovies {
    edges {
      node {
        id
        Title
        Sessions {
          Date
          NewDate
          DisplayDate
          ActualDate
          ActualDisplayDate
          Times {
            StartTime
            Scheduleid
            SoldOut
            NotBookable
            SessionExpired
            CinemaId
            CinemaName
            Screen
            Experience {
              Id
              Name
              ExternalId
              Description
              Order
            }
          }
        }
        RunTime
        MediaItems{
          localImage {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        FilmId
        FriendlyName
      }
    }
  }
  file(id: {eq: "5b9d99b5-a48e-5473-be79-27a9bac8396b"}) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`