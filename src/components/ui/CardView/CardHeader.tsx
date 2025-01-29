import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Heading} from '../Text';

export const CardHeader = (props: any) => {
  const {children, isBorder = false} = props;

  const borderStyle = isBorder ? styles.borderStyle : {};

  return (
    <View style={StyleSheet.flatten([styles.header, borderStyle])}>
      <Heading h5>{children}</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#DEE1E3',
  },
});
