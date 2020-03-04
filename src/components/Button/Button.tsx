import * as React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"
interface ButtonProps {
  hasIcon?: boolean;
  iconSrc?: string;
  url?: string;
  inverted?: boolean;
  rounded?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  fullWidth?: boolean;
  text?: string;
}

export const StyledLink = styled(Link)<ButtonProps>`
  position:relative;
  width: ${props => (props.fullWidth ? '100%' : props.theme.btnWidth)};
  cursor: pointer;
  display: inline-block;
  color:#fff;
  text-decoration:none;
  font-weight:bold;
  font-size: 1rem;
  transition:0.2s;
  padding-left: 1rem;
  padding-right:  ${props => (props.hasIcon ? '32px' : '1rem')};

  ${props =>
    props.small &&
    ` 
    padding-top: ${props.theme.btnPaddingSmall};
    padding-bottom: ${props.theme.btnPaddingSmall};
  `}

  ${props =>
    props.large &&
    ` 
    padding-top: ${props.theme.btnPaddingLarge};
    padding-bottom: ${props.theme.btnPaddingLarge};
  `}
  

  ${props =>
    !props.large &&
    !props.small &&
    ` 
    padding-top: ${props.theme.btnPaddingRegular};
    padding-bottom: ${props.theme.btnPaddingRegular};
  `}



  ${props =>
    props.rounded &&
    ` 
  border-radius: 50px;
  `}

  ${props =>
    props.outline &&
    ` 
    background: transparent;
    border: 2px solid ${props.theme.btnColorSecondary}
    color: ${props.theme.btnColorSecondary}

    :hover {
      background: ${props.theme.btnColorPrimary}
      border: 2px solid ${props.theme.btnColorPrimary}
    }
  `}
  
  ${props =>
    props.inverted &&
    ` 
    color: ${props.theme.btnColorPrimary}
    background: ${props.theme.btnColorSecondary};
    border: 2px solid transparent;
    
    :hover {
      background: ${props.theme.btnColorPrimary};
      color: ${props.theme.btnColorSecondary};
    }
  `}

  
  ${props =>
    !props.inverted &&
    !props.outline &&
    ` 
    background: ${props.theme.btnColorPrimary};
    color: ${props.theme.btnColorSecondary};
    border: 2px solid transparent;

    :hover {
      background: ${props.theme.btnColorSecondary};
      color: ${props.theme.btnColorPrimary};
    }
  `}

  ${props =>
    props.hasIcon &&
    ` 
   text-align:left;
   ::after {
     position:absolute;
     top:calc(50% - 13px);
     right:1rem;
     content: " ";
     height:26px;
     width:26px;
     background-image: url(${props.iconSrc});
     background-position:center;
     background-size:contain;
   }`}
`;

export const Button = styled('a')<ButtonProps>`
  position:relative;
  width: ${props => (props.fullWidth ? '100%' : props.theme.btnWidth)};
  cursor: pointer;
  border: 2px solid #fff;
  display: inline-block;
  font-weight:bold;
  color:#fff;
  font-size: 1rem;
  transition:0.2s;
  padding-left: 1rem;
  padding-right:  ${props => (props.hasIcon ? '32px' : '1rem')};

  ${props =>
    props.small &&
    ` 
    padding-top: ${props.theme.btnPaddingSmall};
    padding-bottom: ${props.theme.btnPaddingSmall};
  `}

  ${props =>
    props.large &&
    ` 
    padding-top: ${props.theme.btnPaddingLarge};
    padding-bottom: ${props.theme.btnPaddingLarge};
  `}
  

  ${props =>
    !props.large &&
    !props.small &&
    ` 
    padding-top: ${props.theme.btnPaddingRegular};
    padding-bottom: ${props.theme.btnPaddingRegular};
  `}



  ${props =>
    props.rounded &&
    ` 
  border-radius: 50px;
  `}

  ${props =>
    props.outline &&
    ` 
    background: transparent;
    border: 2px solid ${props.theme.btnColorSecondary}
    color: ${props.theme.btnColorSecondary}

    :hover {
      background: ${props.theme.btnColorPrimary}
      border: 2px solid ${props.theme.btnColorPrimary}
    }
  `}
  
  ${props =>
    props.inverted &&
    ` 
    color: ${props.theme.btnColorPrimary}
    background: ${props.theme.btnColorSecondary};
    border: 2px solid transparent;
    
    :hover {
      background: ${props.theme.btnColorPrimary};
      color: ${props.theme.btnColorSecondary};
    }
  `}

  
  ${props =>
    !props.inverted &&
    !props.outline &&
    ` 
    background: ${props.theme.btnColorPrimary};
    color: ${props.theme.btnColorSecondary};
    border: 2px solid transparent;

    :hover {
      background: ${props.theme.btnColorSecondary};
      color: ${props.theme.btnColorPrimary};
    }
  `}

  ${props =>
    props.hasIcon &&
    ` 
   text-align:left;
   ::after {
     position:absolute;
     top:calc(50% - 13px);
     right:1rem;
     content: " ";
     height:26px;
     width:26px;
     background-image: url(${props.iconSrc});
     background-position:center;
     background-size:contain;
   }`}
`;

Button.defaultProps = {
  theme: {
    btnColorPrimary: '#252525',
    btnColorSecondary: '#ccc',
    btnPaddingLarge: '1rem',
    btnPaddingRegular: '0.5rem',
    btnPaddingSmall: '0.2rem',
    btnWidth: '200px'
  }
};

StyledLink.defaultProps = {
  theme: {
    btnColorPrimary: '#252525',
    btnColorSecondary: '#ccc',
    btnPaddingLarge: '1rem',
    btnPaddingRegular: '0.5rem',
    btnPaddingSmall: '0.2rem',
    btnWidth: '200px'
  }
};

export const Buttons: React.FunctionComponent<ButtonProps> = props => {
  return (
    <Button
      rounded={props.rounded}
      outline={props.outline}
      inverted={props.inverted}
      fullWidth={props.fullWidth}
      hasIcon={props.hasIcon}
      iconSrc={props.iconSrc}
      small={props.small}
      large={props.large}
    >
      {props.text}
    </Button>
  );
};

export const GatsbyLink: React.FunctionComponent<ButtonProps> = props => {
  return (
    <StyledLink 
      rounded={props.rounded}
      outline={props.outline}
      inverted={props.inverted}
      fullWidth={props.fullWidth}
      hasIcon={props.hasIcon}
      iconSrc={props.iconSrc}
      small={props.small}
      large={props.large}
      to={props.url}
    >
      {props.text}
    </StyledLink>
  );
};