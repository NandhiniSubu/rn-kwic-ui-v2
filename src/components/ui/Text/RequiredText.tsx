import React from 'react';
import {Heading} from './Heading';

const RequiredText = (props: any) => {
  return (
    <Heading color={'error'} h5>
      *
    </Heading>
  );
};

export default RequiredText;
