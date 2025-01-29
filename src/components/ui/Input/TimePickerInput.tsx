import {Platform, Pressable} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';
import _get from 'lodash/get';
import React from 'react';
import {Text} from '../Text';
import {DateFormatter} from '../DateTime';

export const TimePickerInput = React.forwardRef((props: any, ref) => {
  const {onChange, value, displayFormat = 'calendar'} = props;

  let unixTimestamp = 0;

  if (typeof value === 'number') {
    unixTimestamp = value;
  } else {
    unixTimestamp = Number(value);
  }

  const onAndroidDateChanged = (date: any) => {
    if (typeof onChange === 'function') {
      onChange((date.nativeEvent.timestamp / 1000).toString());
    }
  };

  const onDateChanged = (text: any) => {
    const selectedDate = moment(text);
    let finalDatetObj = {
      date: Number(selectedDate.format('DD')),
      month: Number(selectedDate.format('MM')),
      year: Number(selectedDate.format('YYYY')),
    };

    if (typeof onChange === 'function') {
      onChange(finalDatetObj);
    }
  };

  const onCalenderPress = async () => {
    let default_date = new Date();
    if (value != '' && value != null) {
      if (typeof unixTimestamp === 'string') {
        default_date = moment.unix(Number(unixTimestamp)).toDate();
      } else {
        default_date = moment.unix(unixTimestamp).toDate();
      }
    }

    if (Platform.OS == 'android') {
      DateTimePickerAndroid.open({
        value: default_date,
        onChange: onAndroidDateChanged,
        mode: 'time',
        display: displayFormat,
      });
    } else {
      //   await Navigation.showOverlay({
      //     component: {
      //       name: SCREENS.MODAL_CENTER_SCREEN,
      //       passProps: {
      //         //parent_component_id: componentId,
      //         dateObj: default_date,
      //         onSuccess: onDateChanged,
      //         type: 'calender',
      //       },
      //       options: {
      //         layout: {
      //           componentBackgroundColor: '#00000050',
      //           backgroundColor: '#00000050',
      //         },
      //       },
      //     },
      //   });
    }
  };

  return (
    <Pressable
      onPress={onCalenderPress}
      style={{
        minHeight: 45,
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text
        nativeTextProps={{
          numberOfLines: 1,
        }}>
        {props.value ? (
          <DateFormatter unixTimestamp={unixTimestamp} format="h:mm A" />
        ) : (
          props.placeholder
        )}
      </Text>
    </Pressable>
  );
});
