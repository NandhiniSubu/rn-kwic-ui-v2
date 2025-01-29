import React from 'react';
import {StyleSheet, View} from 'react-native';
export const CardTableBody = (props: any) => {
  const {children, style = {}} = props;
  return (
    <View style={StyleSheet.flatten([styles.tbl_body, style])}>{children}</View>
  );
};

const styles = StyleSheet.create({
  tbl_body: {
    paddingHorizontal: 16,
  },
});
