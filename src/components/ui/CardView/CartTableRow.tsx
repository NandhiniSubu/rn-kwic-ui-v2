import React from 'react';
import {StyleSheet, View} from 'react-native';
export const CardTableRow = (props: any) => {
  const {children} = props;
  return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 8,
  },
});
