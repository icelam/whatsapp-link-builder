/* Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import Container from '@components/Container';
import Header from '@components/Header';

/* Styled Components */
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/* Page Template */
const Page = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        {children}
      </ContentContainer>
    </PageWrapper>
  )
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
