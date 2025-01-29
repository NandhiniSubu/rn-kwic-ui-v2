import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ContainerWrapper = (props: any) => {
  const {containerStyle = {}} = props;
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
