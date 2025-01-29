import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

import HeaderLeftContent from './HeaderLeftContent';
import HeaderRightContent from './HeaderRightContent';
import {object} from 'yup';
interface HeaderBlockBaseProps {
  children?: ReactNode;
}
const HeaderBlockBase = (props: HeaderBlockBaseProps) => {
  const {children} = props;
  return <View style={styles.header_con}>{children}</View>;
};
const HeaderBlock = Object.assign(HeaderBlockBase, {
  LeftContent: HeaderLeftContent,
  RightContent: HeaderRightContent,
});

export default HeaderBlock;

const styles = StyleSheet.create({
  header_con: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
