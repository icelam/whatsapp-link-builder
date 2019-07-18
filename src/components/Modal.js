import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Fade from '@components/Fade';

import { mediaQueries } from '@styles/media';

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.overlayColor};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 500px;
  overflow: hidden;
  margin: 80px 0;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.mobile} {
    width: 100%;
    margin: 0;
  }
`;

const ModalHeader = styled.div`
  background-color: ${props => props.theme.headerBackgroundColor};
  color: ${props => props.theme.headerTextColor};
  padding: 10px 20px;
  position: relative;

  .fa, .fas{
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 1.5em;
    cursor: pointer;
  }
`;

const ModalTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 90%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  font-weight: bold;
`;

const ModalContent = styled.div`
  padding: 10px 0;
  overflow-y: auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  -webkit-overflow-scrolling: touch;

  & > p {
    padding: 0 20px;
    margin 0;
    font-size: 0.75em;
  }

  p + p {
    margin-top: 1em;
  }
`;

const Modal = ({ title, closeFunc, children, show }) => (
  <Fade show={show}>
    <ModalOverlay onClick={closeFunc}>
      <ModalBox onClick={event => event.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <i className="fas fa-times" onClick={closeFunc}></i>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </ModalOverlay>
  </Fade>
);

Modal.propTypes = {
  title: PropTypes.string,
  closeFunc: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: PropTypes.string
};

export default Modal;
