import React from "react"
import styled from 'styled-components';
import { Link, graphql } from "gatsby"
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
            sessionsPerRow: 3,
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
query {
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
        }
        RunTime
        Img
        FilmId
        FriendlyName
      }
    }
  }
}


`