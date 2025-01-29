import {Modal, Platform, Pressable, StyleSheet, View} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';
import _get from 'lodash/get';
import React, {useState} from 'react';
import {Text} from '../Text';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DatePickerInput = React.forwardRef((props: any, ref) => {
  const {onChange, value} = props;
  const [modalVisible, setModalVisible] = useState(false);

  let default_date = new Date();
  if (value != '' && value != null) {
    let reformat = `${value.year}-${value.month}-${value.date}`;
    default_date = moment(reformat).toDate();
  }

  const onAndroidDateChanged = (date: any) => {
    const selectedDate = moment(date.nativeEvent.timestamp);
    let finalDatetObj = {
      date: Number(selectedDate.format('DD')),
      month: Number(selectedDate.format('MM')),
      year: Number(selectedDate.format('YYYY')),
    };

    if (typeof onChange === 'function') {
      onChange(finalDatetObj);
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
    // formikRef.current.setFieldValue('date_of_birth', finalDatetObj);
  };

  const onCalenderPress = async () => {
    let default_date = new Date();
    if (value != '' && value != null) {
      let reformat = `${value.year}-${value.month}-${value.date}`;
      default_date = moment(reformat).toDate();
    }

    if (Platform.OS == 'android') {
      DateTimePickerAndroid.open({
        value: default_date,
        onChange: onAndroidDateChanged,
        mode: 'date',
      });
    } else {
      setModalVisible(true);
      // await Navigation.showOverlay({
      //   component: {
      //     name: SCREENS.MODAL_CENTER_SCREEN,
      //     passProps: {
      //       //parent_component_id: componentId,
      //       dateObj: default_date,
      //       onSuccess: onDateChanged,
      //       type: 'calender',
      //     },
      //     options: {
      //       layout: {
      //         componentBackgroundColor: '#00000050',
      //         backgroundColor: '#00000050',
      //       },
      //     },
      //   },
      // });
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
        {props.value
          ? `${_get(value, 'date', '')}-${_get(value, 'month', '')}-${_get(
              value,
              'year',
              '',
            )}`
          : props.placeholder}
      </Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateTimePicker
              value={default_date}
              mode="date"
              display="inline"
              onChange={(event, date) => {
                onAndroidDateChanged(event);
                setModalVisible(() => false);
              }}
            />
          </View>
        </View>
      </Modal>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
