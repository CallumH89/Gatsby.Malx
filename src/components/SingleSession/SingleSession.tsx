import styled from 'styled-components';
import { darken } from 'polished';

interface SingleSessionProps {
  soldOut: boolean;
  notBookable: boolean;
  sessionExpired: boolean;
}

export const SingleSession = styled('button')<SingleSessionProps>`
  width:100%;
  border-radius: 0px;
  border: 1px solid ${props => props.theme.btnBorderColorPrimary};
  background: ${props =>
    props.notBookable || props.sessionExpired || props.soldOut
      ? props.theme.btnColorSecondary
      : props.theme.btnColorSecondary};
  color:${props => props.theme.btnFontColorPrimary};
  text-decoration: ${props =>
    props.notBookable || props.sessionExpired || props.soldOut
      ? 'line-through'
      : 'none'};
  padding: 0.5rem 0.2rem;
  transition:0.2s;
  ${props =>
    props.notBookable || props.sessionExpired || props.soldOut ? 'opacity:0.4' : ''}
  cursor: ${props =>
    props.notBookable || props.sessionExpired || props.soldOut
      ? ''
      : 'pointer'};
  :hover {
    background: ${props =>
      props.notBookable || props.sessionExpired || props.soldOut
        ? ''
        : darken(0.1, props.theme.btnColorPrimary)};
  }
`;

SingleSession.defaultProps = {
  theme: {
    btnColorPrimary: '#FFF',
    btnBorderColorPrimary: '#EEE',
    btnFontColorPrimary: '#000',
    btnColorSecondary: '#fff'
  }
};


export const SessionTime = styled.div`
  display:block;
  font-weight:bold;
`;

export const SessionExperiences = styled.div`
margin-top:0.4rem;
font-size:0.625rem;
& span {
  position:relative; 
  & + span {
  margin-left:3px;
  padding-left:6px;
  &:before {
    content: " ";
    width:2px;
    height:2px;
    background:#000;
    border-radius:1px;
    position:absolute;
    left:0;
    top: calc(50% - 1px);
  }
}
`;
