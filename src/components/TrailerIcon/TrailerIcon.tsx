import styled from 'styled-components';
import trailerIcon from '../../libs/svg/icon-trailer.svg';
import trailerIconInverted from '../../libs/svg/icon-trailer-inverted.svg';


interface trailerProps {
  inverted?: boolean;
}


export const TrailerIcon = styled("a")<trailerProps>`
cursor:pointer;
height:40px;
width:40px;
background-image:url(${props =>
  props.inverted ? trailerIconInverted : trailerIcon});
background-position:center;
background-size:contain;
display:block;
`;