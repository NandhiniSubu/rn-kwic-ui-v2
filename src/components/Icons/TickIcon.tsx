import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

export default (props: any) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M9 22.1437H15C20 22.1437 22 20.1437 22 15.1437V9.14374C22 4.14374 20 2.14374 15 2.14374H9C4 2.14374 2 4.14374 2 9.14374V15.1437C2 20.1437 4 22.1437 9 22.1437Z"
      fill={props.color ? props.color : '#1772DB'}
    />
    <Path
      d="M7.75 12.1437L10.58 14.9737L16.25 9.31374"
      stroke="#FEFEFE"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
