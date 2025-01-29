import {Text} from '@components/ui/Text';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

/*
  1. Create the config
*/
const toastConfig = {
  success: ({text1, props}: any) => (
    <View style={[styles.success, {...props?.successStyle}]}>
      <Text style={[styles.successText, {...props?.textStyle}]}>{text1}</Text>
    </View>
  ),
  error: ({text1, props}: any) => (
    <View style={[styles.error, {...props?.successStyle}]}>
      <Text style={[styles.errorText, {...props?.textStyle}]}>{text1}</Text>
    </View>
  ),
  warning: ({text1, props}: any) => (
    <View style={[styles.warning, {...props?.successStyle}]}>
      <Text style={[styles.warningText, {...props?.textStyle}]}>{text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  success: {
    height: 45,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10B981',
  },
  successText: {color: 'white', fontFamily: 'Inter-SemiBold'},
  error: {
    height: 45,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF4444',
  },
  errorText: {color: 'white', fontFamily: 'Inter-SemiBold'},
  warning: {
    height: 45,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F59E0B',
  },
  warningText: {color: 'white', fontFamily: 'Inter-SemiBold'},
});
const AppToast: React.FC<any> = () => {
  return (
    <>
      <Toast config={toastConfig} />
    </>
  );
};
export default AppToast;
