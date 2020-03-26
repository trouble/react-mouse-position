import React from 'react';
import MouseInfoContext from '../MouseInfoProvider/context';

const withMouseInfo = (PassedComponent) => {
  const MouseInfoWrap = (props) => (
    <MouseInfoContext.Consumer>
      {(context) => (
        <PassedComponent
          {...{
            ...props,
            mouseInfo: context,
          }}
        />
      )}
    </MouseInfoContext.Consumer>
  );
  return MouseInfoWrap;
};

export default withMouseInfo;
