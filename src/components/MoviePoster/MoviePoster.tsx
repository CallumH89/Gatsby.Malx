import styled from 'styled-components';
import {MoviePosterOverlayContainer, MoviePosterOverlayTrailer} from './MoviePosterOverlay'
import Img from "gatsby-image"


interface PosterTypes {
  src?: string; 
  alt?: string; 
  fluid?: any; 
  loading?: string; 
}


export const MoviePosterContainer = styled.div`
  position:relative;
  overflow:hidden;
  border-radius: 5px;
  height: auto;
  width: 100%;
  
  &:hover ${MoviePosterOverlayContainer},
  &:hover ${MoviePosterOverlayTrailer} {
    opacity: 1;
  }
`;

export const MoviePoster = styled(Img)<PosterTypes>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;