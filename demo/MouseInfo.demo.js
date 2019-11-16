import React from 'react';
import PropTypes from 'prop-types';
import { withMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const MouseInfoDemo = (props) => {
  const {
    mouseInfo: {
      x,
      y,
      xDifference,
      yDifference,
      xDirection,
      yDirection,
      xPercentage,
      yPercentage,
      isInViewport,
      count,
    },
  } = props;

  return (
    <code>
      <pre>
        {'scrollPos:{'}
        <br />
        &emsp;
        {`x: ${x}`}
        <br />
        &emsp;
        {`y: ${y}`}
        <br />
        &emsp;
        {`xDifference: ${xDifference},`}
        <br />
        &emsp;
        {`yDifference: ${yDifference},`}
        <br />
        &emsp;
        {`xDirection: ${xDirection},`}
        <br />
        &emsp;
        {`yDirection: ${yDirection},`}
        <br />
        &emsp;
        {`xPercentage: ${xPercentage},`}
        <br />
        &emsp;
        {`yPercentage: ${yPercentage}`}
        <br />
        &emsp;
        {`mouse is in viewport: ${isInViewport}`}
        <br />
        &emsp;
        {`count: ${count}`}
        <br />
        {'}'}
      </pre>
    </code>
  );
};

MouseInfoDemo.defaultProps = {};

MouseInfoDemo.propTypes = {
  mouseInfo: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    xPercentage: PropTypes.number,
    yPercentage: PropTypes.number,
    xDirection: PropTypes.oneOf([
      '',
      'left',
      'right',
    ]),
    yDirection: PropTypes.oneOf([
      '',
      'up',
      'down',
    ]),
    xDifference: PropTypes.number,
    yDifference: PropTypes.number,
    isInViewport: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
};

export default withMouseInfo(MouseInfoDemo);
