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
            showSessions:true,
            hasSynopsis: true,
            hasDetails: true,
            isCentered: false,
            sessionsPerRow: 4,
            hasTrailerIcon: true,
            hasOverlay: true,
            isTrailerOnly:false}}>
            <MovieGrid 
              data={data} />
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
        Synopsis
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
        Img
        localImage {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        FilmId
        FriendlyName
      }
    }
  }
}

`