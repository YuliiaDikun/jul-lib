import React from 'react'

import styled from "styled-components";
import { Link } from "react-router-dom";
interface ILogo { 
  Primary?: boolean
}
const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  span {
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
  }
`;

const Logo: React.FC<ILogo> = ({Primary }) => {
  return (
    <StyledLogo to="/" data-testid="logo-link" data-primary={Primary }>
        <span>Learn</span>now
      </StyledLogo>
  )
}

export default Logo