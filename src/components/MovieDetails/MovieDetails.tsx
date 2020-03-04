import * as React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"
import { TrailerIcon } from '../TrailerIcon/TrailerIcon';
import {H4, P} from '../Typography/Typography';
import {MovieGridContext} from '../MovieGrid/MovieGrid';

interface detailsProps {
  hasTrailerIcon?: boolean; 
  isOverlay?: boolean; 
  title?: string;
  trailer?: string;
  friendlyName?: string;
  rating?: string;
  runtime?: string;
  synopsis?: string;
}
export const MovieDetailsContainer = styled("div")<detailsProps>`
  position:relative;
  ${props =>
    props.hasTrailerIcon && !props.isOverlay &&
    `display: grid;
    grid-template-columns: auto 40px;`}

    & ${H4} {

      & a {
        color:#000;
        text-decoration:none;
      }
      margin-top:0;
      margin-bottom:0rem;
    }
`;

export const MovieSynopsis = styled.div`
`;

export const MovieInfo = styled.div`
  & ${P} {
    display:inline-block;
    margin-bottom: 0; 
    margin-top:0.5rem;

    & + ${P} {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      border-left:1px solid #000000;
    }
  }
`;


export const MovieDetails: React.FunctionComponent<detailsProps> = props => {
  const {hasTrailerIcon, isCentered, hasSynopsis} = React.useContext(MovieGridContext);

  return (
    <MovieDetailsContainer isOverlay={props.isOverlay} hasTrailerIcon={hasTrailerIcon} className={isCentered ? "ta__center" : ""}>
      <div>
      <H4>{props.friendlyName?
        <Link to={props.friendlyName}>{props.title}</Link> : 
        props.title
      }
        </H4>
        <MovieInfo>
          <P>{props.runtime}</P>
          <P>{props.rating}</P>
        </MovieInfo>
        {hasSynopsis && 
          <MovieSynopsis>
            <P>{props.synopsis}</P>
          </MovieSynopsis>
        }
      </div>
      {hasTrailerIcon && !props.isOverlay && props.trailer &&
      <div>
          <TrailerIcon inverted={true} />
      </div>
      }
    </MovieDetailsContainer>
  );
};