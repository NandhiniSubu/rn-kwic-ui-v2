import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface ListItemContentBodyProps {
  style?: ViewStyle;
  children?: ReactNode;
  containerStyle?: ViewStyle;
}

const ListItemContentBody = React.memo((props: ListItemContentBodyProps) => {
  const {children, style, containerStyle} = props;
  return (
    <View style={StyleSheet.flatten([styles.body_con, style, containerStyle])}>
      {children}
    </View>
  );
});

export default ListItemContentBody;

const styles = StyleSheet.create({
  body_con: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 0.8,
    borderBottomColor: '#DEE1E3',
  },
});
