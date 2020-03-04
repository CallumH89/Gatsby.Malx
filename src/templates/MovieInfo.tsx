import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {H1, P} from '../components/Typography/Typography';
import {MoviePoster, MoviePosterContainer} from '../components/MoviePoster/MoviePoster';
import {SessionsContainer} from '../components/MovieSessionList/SingleMovieSessions';

const StyledH1 = styled(H1)`
  margin-top:0;
`

const MovieMeta = styled.span`
  font-weight:bold;
  font-size:1.2rem;
`

export default ({ data }) => {
  return (
    <Layout>
      <Grid
      container
      direction="row"
      spacing={5}>
        <Grid
            item
            xl={3}
            lg={3}
            md={3}
            sm={3}
            xs={12}>
              <MoviePosterContainer>
                <MoviePoster loading="lazy" fluid={data.movies.localImage.childImageSharp.fluid} alt={data.movies.Title} />
              </MoviePosterContainer>
          </Grid>
          <Grid
            item
            xl={9}
            lg={9}
            md={9}
            sm={9}
            xs={12}>
              <StyledH1>{data.movies.Title}</StyledH1>
              <P><MovieMeta>Director:</MovieMeta> {data.movies.Director}</P>
              <P><MovieMeta>Cast:</MovieMeta> {data.movies.Cast}</P>
              <P><MovieMeta>Run Time:</MovieMeta> {data.movies.RunTime}</P>
              <P>{data.movies.Synopsis}</P>
              <SessionsContainer filmId={data.movies.FilmId} />
          </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
query($slug:String) {
    movies(FriendlyName: {eq: $slug}) {
      Title
      Img
      localImage {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Cast
    Cert
    Director
    Experiences {
      Id
      Name
      ExternalId
    }
    FilmId
    Trailer
    Synopsis
    RunTime
    }
  }
  
`