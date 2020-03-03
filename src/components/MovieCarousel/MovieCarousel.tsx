import * as React from 'react';
import styled from 'styled-components';
import { filmData } from '../../types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import Flickity from 'react-flickity-component'
import '../../scss/flickity.min.css';

interface ListingProps {
  showSessions?: boolean;
  hasSynopsis?: boolean;
  isCentered?: boolean;
  hasDetails?: boolean;
  hasTrailerIcon?: boolean;
  sessionsPerRow?: any;
  hasOverlay?: boolean;
  data: filmData[];
  settings?: {}
}


const Container = styled.div`
  width:90%;
  max-width:1440px;
  margin: 0 auto;
`;

const Slide = styled.div`
  width:290px;
  margin-left:1rem;
  margin-right:1rem;
`;

export const MovieCarousel: React.FunctionComponent<ListingProps> = props => {
 
  return (
    <Container>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={props.settings} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {props.data.map((singleFilm, i) => (
          <Slide key={i}>
            <MovieGridItem
              key={`${singleFilm.Title}${i}`}
              sessionsPerRow={props.sessionsPerRow}
              title={singleFilm.Title}
              rating={singleFilm.Cert}
              runtime={singleFilm.RunTime}
              synopsis={singleFilm.Teaser}
              hasDetails={props.hasDetails}
              hasSynopsis={props.hasSynopsis}
              isCentered={props.isCentered}
              hasTrailerIcon={props.hasTrailerIcon}
              poster={singleFilm.MediaItems.Poster}
              sessions={singleFilm.Sessions}
              showSessions={props.showSessions}
              hasOverlay={true}
              filmId={singleFilm.FilmId}
            />
          </Slide>
        ))}
      </Flickity>
    </Container>
  );
};