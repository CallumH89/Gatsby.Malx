import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {H1, P} from '../components/Typography/Typography';
import {MoviePoster, MoviePosterContainer} from '../components/MoviePoster/MoviePoster';
import {SessionsContainer} from '../components/MovieSessionList/SingleMovieSessions';
import Img from "gatsby-image"
const StyledH1 = styled(H1)`
  margin-top:0;
`

const MovieMeta = styled.span`
  font-weight:bold;
  font-size:1.2rem;
`
const MovieHeaderContainer = styled.div`
width:100%;
height:300px;
margin-bottom:2rem;
`;
const MovieHeader = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export default ({ data }) => {
  return (
    <Layout>
      <MovieHeaderContainer>
        {data.movies.MediaItems.localImage ? 
        <MovieHeader loading="lazy" fluid={data.movies.MediaItems.localImage.childImageSharp.fluid} alt={data.movies.Title} />:
        <MovieHeader loading="lazy" fluid={data.file.childImageSharp.fluid} alt={data.movies.Title} /> }
      </MovieHeaderContainer>
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
                {data.movies.MediaItems.localImage ?
                <MoviePoster loading="lazy" fluid={data.movies.MediaItems.localImage.childImageSharp.fluid} alt={data.movies.Title} /> :
                <MoviePoster loading="lazy" fluid={data.file.childImageSharp.fluid} alt={data.movies.Title} />}
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
              <P><MovieMeta>Run Time:</MovieMeta> {data.movies.RunTime} Mins</P>
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
    Cast
    Cert
    Director
    Experiences {
      Id
      Name
      ExternalId
    }
    MediaItems {
        localImage {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    FilmId
    Synopsis
    RunTime
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