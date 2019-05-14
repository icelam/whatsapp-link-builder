import React from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Fade = ({ show, duration, children, className, mountOnEnter, unmountOnExit }) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 }
  };

  return (
    <Transition in={show} timeout={duration} mountOnEnter={mountOnEnter} unmountOnExit={unmountOnExit} onEnter={node => node.offsetHeight} className={className}>
      {state => (
        <div style={
          { ...defaultStyle, ...transitionStyles[state] }
        }>
          {children}
        </div>
      )}
    </Transition>
  )
};

Fade.propTypes = {
  show: PropTypes.bool,
  duration: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool
};

Fade.defaultProps = {
  show: false,
  duration: 200,
  mountOnEnter: true,
  unmountOnExit: true
};

export default Fade;
