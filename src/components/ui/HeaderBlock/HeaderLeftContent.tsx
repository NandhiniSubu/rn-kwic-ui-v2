import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {Heading} from '../Text/Heading';
interface HeaderLeftContentProps {
  heading: string;
  styleContainer?: ViewStyle;
}
const HeaderLeftContent = (props: HeaderLeftContentProps) => {
  const {heading, styleContainer} = props;
  return (
    <View style={StyleSheet.flatten([styles.leftContainer, styleContainer])}>
      <Heading h5 color={'primary'}>
        {heading}
      </Heading>
    </View>
  );
};

export default HeaderLeftContent;

const styles = StyleSheet.create({
  leftContainer: {
    flex: 1,
  },
});
