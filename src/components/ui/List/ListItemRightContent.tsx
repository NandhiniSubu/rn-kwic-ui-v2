import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface ListItemRightContentProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const ListItemRightContent = React.memo((props: ListItemRightContentProps) => {
  const {style = {}} = props;
  return (
    <View style={StyleSheet.flatten([styles.date_con, style])}>
      {props.children}
    </View>
  );
});

export default ListItemRightContent;

const styles = StyleSheet.create({
  date_con: {
    flex: 0.5,
    alignItems: 'flex-end',
    rowGap: 4,
    paddingTop: 4,
  },
});
