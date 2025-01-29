import React, {useCallback} from 'react';
import {StyleSheet, View, useWindowDimensions, ViewStyle} from 'react-native';
import BottomTabItem from './Item';
import type {Theme} from '@utils/index';
import {defaultTheme} from '@utils/index';

export type BottomTabItem = {
  id: string;
  title: string;
  icon_id: string;
  payload?: {
    type: string;
    link_to: string;
    link_data: any;
  };
};

interface BottomTabBaseProps {
  items: BottomTabItem[];
  selectIndex?: Number;
  onItemPressed?: (id: Number, tab: BottomTabItem) => void;
  containerStyle?: ViewStyle;
  theme?: Theme;
}

const BottomTabBase: React.FC<BottomTabBaseProps> = props => {
  const {
    items = [],
    selectIndex = 0,
    onItemPressed,
    containerStyle = {},
    theme = defaultTheme,
  } = props;
  const dimention = useWindowDimensions();
  const menItemWith = dimention.width / 4 - 20;

  const onPressed = useCallback(
    (item: BottomTabItem, index: Number) => {
      if (typeof onItemPressed === 'function') {
        onItemPressed(index, item);
      }
    },
    [onItemPressed],
  );

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          backgroundColor: theme.colors.grey0,
        },
        containerStyle,
      ])}>
      {items.map((item, index) => {
        return (
          <BottomTabItem
            key={'menu_' + item.id}
            id={item.id}
            containerStyle={{
              width: menItemWith,
            }}
            selectedColor={theme.colors.primary}
            icon_id={item.icon_id}
            label={item.title}
            isSelected={selectIndex === index}
            onPress={() => {
              onPressed(item, index);
            }}
          />
        );
      })}
    </View>
  );
};

const BottomTab = Object.assign(BottomTabBase, {
  item: BottomTabItem,
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
});

export {BottomTab};
