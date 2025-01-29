import {Pressable, StyleSheet} from 'react-native';
import React from 'react';

const EmptyCheckBox = (props: any) => {
  const {containerStyle, children, onPress} = props;
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      {children}
    </Pressable>
  );
};

export default EmptyCheckBox;

const styles = StyleSheet.create({
  container: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#66737E',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
