import * as React from 'react';
import styled from 'styled-components';
import trailerIcon from '../../libs/svg/icon-trailer.svg';
import arrowIcon from '../../libs/svg/icon-arrow.svg';
import {MovieInfo, MovieDetails, MovieSynopsis} from '../MovieDetails/MovieDetails';
import {H4, P} from '../Typography/Typography';
import { TrailerIcon } from '../TrailerIcon/TrailerIcon';
import { Button, Buttons, GatsbyLink, StyledLink } from '../Button/Button';
import {MovieGridContext} from '../MovieGrid/MovieGrid';

export const MoviePosterOverlayContainer = styled.div`
  position:absolute;
  top:1rem;
  bottom:1rem;
  left:1rem;
  right:1rem;
  padding:1rem;
  background:rgba(0,0,0, 0.6);
  border-radius: 5px;
  opacity: 0;
  transition:0.2s;
  display:flex;
  flex-direction:column;
  & ${P},
  & ${H4} {
    color:#fff;
  }

  & ${MovieSynopsis} {
    max-height:150px;
    overflow:hidden;
  }

  & ${MovieInfo} {
    & ${P} + ${P} {
      border-left:1px solid #ffffff;
    }
  }

  & ${Button},
  & ${StyledLink} {
    margin-top:1rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top:auto;
`;

export const MoviePosterOverlayTrailer = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top: 0;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  transition:0.2s;
  opacity: 0;
`;


interface overlayProps {
isOverlay?: boolean; 
title?: string;
rating?: string;
trailer?: string;
friendlyName?: string;
runtime?: string;
synopsis?: string;
}



export const MoviePosterOverlay: React.FunctionComponent<overlayProps> = props => {
  return <MovieGridContext.Consumer>
    {({isTrailerOnly}) => {
      if (isTrailerOnly) {
        return (
          <MoviePosterOverlayTrailer>
            <TrailerIcon />
          </MoviePosterOverlayTrailer>
        )
      } else {
          return (
          <MoviePosterOverlayContainer>
            <MovieDetails 
            isOverlay={props.isOverlay} 
            title={props.title}
            rating={props.rating}
            runtime={props.runtime} />
            <ButtonsContainer>
              {props.trailer &&
              <Buttons rounded={true} outline={true} fullWidth={true} large={true} text={"TRAILER"} hasIcon={true} iconSrc={trailerIcon} url={props.trailer} /> }
              <GatsbyLink rounded={true} fullWidth={true} inverted={false} large={true} text={"DETAILS"} url={props.friendlyName} />
            </ButtonsContainer>
          </MoviePosterOverlayContainer>
      );
      }
    }}
  </MovieGridContext.Consumer>
};

