/* Dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import Container from '@components/Container';
import Header from '@components/Header';

/* Styled Components */
const ContentContainer = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
`;

/* Page Template */
const Page = ({children}) => {
  return (
    <Fragment>
      <Header />
      <ContentContainer>
        {children}
      </ContentContainer>
    </Fragment>
  )
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
