import {StyleSheet, Pressable} from 'react-native';
import React, {ReactNode} from 'react';
import ListItemAvatar from './ListItemAvatar';
import ListItemContent from './ListItemContent';
import ListItemContentBody from './ListItemContentBody';
import ListItemRightContent from './ListItemRightContent';
import {ViewStyle} from 'react-native-size-matters';

interface ListItemProps {
  onPress?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

const ListItemBase = React.memo((props: ListItemProps) => {
  const {onPress, children, disabled = false, containerStyle} = props;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, containerStyle]}
      {...props}>
      {children}
    </Pressable>
  );
});
const ListItem = Object.assign(ListItemBase, {
  Avatar: ListItemAvatar,
  ContentBody: ListItemContentBody,
  Content: ListItemContent,
  RightContent: ListItemRightContent,
});

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
});
