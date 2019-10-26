import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container';

import logo from '@images/appicon.svg';

const HeaderPlaceHolder = styled.div`
  min-height: 55px;
`;

const HeaderDiv = styled.div`
  padding: 15px 0;
  background-color: ${props => props.theme.headerBackgroundColor};
  color: ${props => props.theme.headerTextColor};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.headerTextColor};
  text-decoration: none;
  height: 25px; /* IE fix */

  &:hover {
    color: ${props => props.theme.headerTextColor};
  }
`;

const Logo = styled.img`
  height: 25px;
  min-height: 25px; /* IE fix */
  max-width: 25px; /* IE fix */
  margin: 0 10px 0 0;
  border: 0;
`;

const SiteName = styled.h1`
  font-size: 1.25em;
  line-height: 1.25em;
  margin: 0;
  white-space: nowrap;
`;

const Header = () => (
  <HeaderPlaceHolder>
    <HeaderDiv>
      <HeaderContainer>
        <HeaderLink href={process.env.PUBLIC_URL + '/'}>
          <Logo src={logo} alt="WhatsApp Link Builder" />
          <SiteName>WhatsApp Link Builder</SiteName>
        </HeaderLink>
      </HeaderContainer>
    </HeaderDiv>
  </HeaderPlaceHolder>
);

export default React.memo(Header);
