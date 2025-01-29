import React, {useMemo} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Heading} from '../Text';
import LeftArrowIcon from '@components/Icons/LeftArrowIcon';

interface TopBarProps {
  leftIcon?: any;
  leftIconPress?: () => void;
  rightIcon?: any;
  rightIconPress?: () => void;
  title?: string;
  subtitle?: string;
  rightIcons?: any;
  rightIconsPress?: (id: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const TopBar: React.FC<TopBarProps> = ({
  leftIcon = <LeftArrowIcon />,
  leftIconPress,
  rightIcon,
  rightIconPress,
  title,
  subtitle,
  rightIcons,
  rightIconsPress,
  containerStyle = {},
}) => {
  const {statusBarHeight, topBarHeight} = useMemo(() => {
    return Navigation.constantsSync();
  }, []);
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          height: Platform.select({
            ios: statusBarHeight > 20 ? statusBarHeight : 54,
            android: topBarHeight,
          }),
        },
        containerStyle,
      ])}>
      {leftIcon && (
        <Pressable
          testID="RN_TOPBAR_LEFT_BTN"
          onPress={leftIconPress}
          style={styles.leftContainer}>
          {leftIcon}
        </Pressable>
      )}

      <View style={styles.centerContainer}>
        <Heading
          h4
          color={'primary'}
          nativeTextProps={{
            numberOfLines: 1,
          }}>
          {title}
        </Heading>
        {subtitle && (
          <Heading h5 color={'secondary'}>
            {subtitle}
          </Heading>
        )}
      </View>
      <View style={styles.rightContainer}>
        {rightIcon && (
          <TouchableOpacity onPress={rightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
        {rightIcons &&
          rightIcons.map((item: any) => {
            return (
              <TouchableOpacity
                testID="RN_TOPBAR_RIGHT_BTN"
                key={item.id}
                style={{
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                }}
                onPress={() => {
                  if (typeof rightIconsPress === 'function') {
                    rightIconsPress(item?.id);
                  }
                }}>
                {item?.icon}
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //paddingHorizontal: 16,
  },
  leftContainer: {
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    paddingVertical: 8,
  },
  centerContainer: {
    alignItems: 'flex-start',
    flex: 1,
    //backgroundColor: 'red',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 2,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
});

export default TopBar;
