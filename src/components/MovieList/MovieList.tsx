import * as React from 'react';
import styled from 'styled-components';
import { filmData } from '../../types';
import MovieListItem from '../MovieListItem/MovieListItem';

interface ListingProps {
  showSessions?: boolean;
  hasOverlay?: boolean;
  data: filmData[];
}

const Container = styled.div`
  display: block;
`;

const MovieList: React.FunctionComponent<ListingProps> = props => {
  return (
    <Container>
      {props.data.map((singleFilm, i) => (
        <MovieListItem
          key={i}
          title={singleFilm.Title}
          rating={singleFilm.Cert}
          runtime={singleFilm.RunTime}
          synopsis={singleFilm.Synopsis}
          poster={singleFilm.MediaItems.Poster}
          sessions={singleFilm.Sessions}
          showSessions={props.showSessions}
          hasOverlay={props.hasOverlay}
          filmId={singleFilm.FilmId}
        />
      ))}
    </Container>
  );
};

export default MovieList;
