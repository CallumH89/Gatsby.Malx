import * as React from 'react';
import styled from 'styled-components';
import { Sessions } from '../../types';
import MovieSessionList from '../MovieSessionList/MovieSessionList';
import {MoviePoster, MoviePosterContainer} from '../MoviePoster/MoviePoster';
import {MoviePosterOverlay} from '../MoviePoster/MoviePosterOverlay';
import {H4} from '../Typography/Typography';

interface itemProps {
  title: string;
  rating?: string;
  runtime?: string;
  synopsis?: string;
  filmId: number;
  poster?: string;
  hasOverlay?: boolean;
  showSessions?: boolean;
  sessions: Sessions[];
}

const SingleItem = styled.div`
  grid-gap: 1rem;
  grid-template-columns: 310px auto;

  & ${H4} {
    margin-top:0.5rem;
    margin-bottom:1rem;
  }
`;


const MovieListItem: React.FunctionComponent<itemProps> = props => {
  return (
    <SingleItem className='grid mb-2'>
      <MoviePosterContainer>
        <MoviePoster src={props.poster} alt={props.title} />
        {props.hasOverlay &&
          <MoviePosterOverlay 
            hasSynopsis={true} 
            isTrailerOnly={false} 
            isCentered={true}
            title={props.title} 
            rating={props.rating} 
            runtime={props.runtime} />
        }
      </MoviePosterContainer>
      <div>
        <H4>{props.title}</H4>
        {props.showSessions &&
          props.sessions.map((sessionList, i) => (
          <MovieSessionList
            key={i}
            date={sessionList.DisplayDate}
            times={sessionList.Times}
          />
        ))}
      </div>
    </SingleItem>
  );
};

export default MovieListItem;
