import React, {useMemo} from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {TextBody} from '../Text';
import _get from 'lodash/get';

import {PropertyPath} from 'lodash';
import Icons from '@components/Icons';

interface BottomTabItemProps {
  label: string;
  onPress?: (tab: string) => void;
  isSelected?: boolean;
  id: string;
  containerStyle?: ViewStyle;
  icon_id?: PropertyPath;
  selectedColor: string;
}

const BottomTabItem: React.FC<BottomTabItemProps> = props => {
  const {
    icon_id = 'search',
    label,
    isSelected = false,
    id,
    onPress,
    containerStyle = {},
    selectedColor,
  } = props;

  const TouchableComponent: React.FC<any> =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  const IconComponent = _get(Icons, icon_id, null);

  const selectedIconStyle = useMemo(() => {
    return {
      ...(isSelected ? {backgroundColor: selectedColor} : {}),
    };
  }, [isSelected, selectedColor]);

  const selectedTextStyle = useMemo(() => {
    return {
      ...(isSelected ? {color: selectedColor} : {}),
    };
  }, [isSelected, selectedColor]);

  return (
    <TouchableComponent onPress={onPress}>
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {IconComponent ? (
          <View
            style={StyleSheet.flatten([
              styles.iconContainer,
              selectedIconStyle,
            ])}>
            <IconComponent color={'white'} />
          </View>
        ) : null}

        <View style={styles.textContainer}>
          <TextBody
            color={'white'}
            size={'xs'}
            fontFamily={'Medium'}
            style={selectedTextStyle}>
            {label}
          </TextBody>
        </View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    marginVertical: 4,
  },
  textContainer: {
    paddingVertical: 4,
  },
});

export default BottomTabItem;
