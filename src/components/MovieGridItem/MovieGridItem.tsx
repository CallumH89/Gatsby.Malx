import * as React from 'react';
import styled from 'styled-components';
import { Sessions } from '../../types';
import MovieGridSessionList from '../MovieSessionList/MovieGridSessionList';
import {MoviePoster, MoviePosterContainer} from '../MoviePoster/MoviePoster';
import {MoviePosterOverlay} from '../MoviePoster/MoviePosterOverlay';
import {MovieDetails} from '../MovieDetails/MovieDetails';
import {MovieGridContext} from '../MovieGrid/MovieGrid';

interface itemProps {
  title: string;
  rating?: string;
  runtime?: string;
  trailer?: string;
  synopsis?: string;
  friendlyName?: string;
  filmId: number;
  poster?: string;
  sessions: Sessions[];
}

const SingleItem = styled.div`
width:100%;
display:flex;
flex-direction:column;
height:100%;
`;
export const MovieDetailsContainer = styled.div`
margin-top: 1rem;
`;

const MovieGridItem: React.FunctionComponent<itemProps> = props => {
  const {showSessions, hasDetails, hasOverlay} = React.useContext(MovieGridContext);
  return (
    <SingleItem>
      <MoviePosterContainer>
        <MoviePoster fluid={props.poster} alt={props.title} loading="lazy" />
        {hasOverlay &&
          <MoviePosterOverlay 
            isOverlay={true}
            synopsis={props.synopsis} 
            title={props.title} 
            trailer={props.trailer}
            friendlyName={props.friendlyName} 
            rating={props.rating} 
            runtime={props.runtime} />
        }
      </MoviePosterContainer>
      <MovieDetailsContainer>
        {hasDetails &&
        <MovieDetails 
          isOverlay={false}
          synopsis={props.synopsis} 
          title={props.title}
          trailer={props.trailer}
          friendlyName={props.friendlyName} 
          rating={props.rating}
          runtime={props.runtime} /> }
      </MovieDetailsContainer>
        {showSessions &&
          props.sessions.map((sessionList, i) => (
          <MovieGridSessionList
            key={i}
            date={sessionList.DisplayDate}
            times={sessionList.Times}
          />
        ))}
    </SingleItem>
  );
};

export default MovieGridItem;
