// DateFormatter.tsx

import React from 'react';

import moment from 'moment';
import {TextBody} from '../Text';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';

interface DateFormatterProps {
  unixTimestamp: number;
  format?: 'h:mm A' | 'DD MMM YYYY' | 'MMM DD, YYYY, h:mm A'; // Add more formats as needed

  txt_style?: StyleProp<TextStyle>;
}

const DateFormatter: React.FC<DateFormatterProps> = ({
  unixTimestamp,
  format = 'DD MMM YYYY',
  txt_style,
}) => {
  //const dateObject = moment.unix(unixTimestamp); // Create a Moment.js object from Unix timestamp
  let dateObject;

  if (typeof unixTimestamp === 'number') {
    dateObject = moment.unix(unixTimestamp);
  } else if (typeof unixTimestamp === 'string') {
    dateObject = moment(unixTimestamp); // Assuming that the timestamp is in a valid format
  } else {
    dateObject = moment(); // Use current date if the timestamp is not a valid number or string
  }
  let formattedDate;

  switch (format) {
    case 'h:mm A':
      formattedDate = dateObject.format('h:mm A');
      break;
    case 'DD MMM YYYY':
      formattedDate = dateObject.format('DD MMM YYYY');
      break;
    case 'MMM DD, YYYY, h:mm A':
      formattedDate = dateObject.format('MMM DD, YYYY, h:mm A');
      break;

    // Add more cases for additional formats as needed

    default:
      formattedDate = 'Invalid format';
  }

  return (
    <TextBody
      style={StyleSheet.flatten([txt_style])}
      size={'md'}
      fontFamily={'Regular'}
      color={'primary'}>
      {formattedDate}
    </TextBody>
  );
};

export default DateFormatter;
