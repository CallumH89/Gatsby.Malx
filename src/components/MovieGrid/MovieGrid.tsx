import * as React from 'react';
import styled from 'styled-components';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import { Grid } from '@material-ui/core';

interface ListingProps {
  data: any[];
  fallBackPoster: any;
}

const Container = styled.div`
  width:90%;
  max-width:1440px;
  margin: 0 auto;
`;


export const MovieGridContext = React.createContext({ 
  showSessions: false,
  hasSynopsis: true,
  hasDetails: true,
  isCentered: false,
  sessionsPerRow: 4,
  hasTrailerIcon: true,
  isTrailerOnly: false,
  hasOverlay: false,
});

export const MovieGrid: React.FunctionComponent<ListingProps> = props => {
  const {showSessions} = React.useContext(MovieGridContext);
  return (
    <Container>
      <Grid
      container
      direction="row"
      spacing={5}
      >
        {props.data.map((singleFilm, i) => (
          <Grid
            item
            xl={3}
            lg={3}
            md={4}
            sm={6}
            xs={showSessions ? 12 : 6}
            >
            <MovieGridItem
              key={i}
              friendlyName={singleFilm.node.FriendlyName}
              title={singleFilm.node.Title}
              rating={singleFilm.node.Cert}
              trailer={singleFilm.node.Trailer}
              runtime={singleFilm.node.RunTime}
              synopsis={singleFilm.node.Teaser}
              poster={singleFilm.node.MediaItems.localImage ? singleFilm.node.MediaItems.localImage.childImageSharp.fluid : props.fallBackPoster.childImageSharp.fluid}
              sessions={singleFilm.node.Sessions}
              filmId={singleFilm.node.FilmId}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

