import React, {useMemo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {ButtonProps} from '../Button';
import {TextBody} from '../Text';
import {RneFunctionComponent, defaultTheme} from '@utils/index';

export interface ChipProps
  extends Omit<ButtonProps, 'loading' | 'loadingStyle' | 'loadingProps'> {
  type?: 'solid' | 'outline';
  isSelected?: boolean;
  selctedColor?: string;
}

export const Chip: RneFunctionComponent<ChipProps> = ({
  icon,
  titleStyle,
  buttonStyle,
  isSelected,
  selctedColor = defaultTheme.colors.primary,
  onPress,
  ...rest
}) => {
  const selectedContainerStyle = useMemo(() => {
    return {
      ...(isSelected
        ? {
            borderWidth: 1,
            borderColor: selctedColor,
            backgroundColor: selctedColor,
          }
        : {}),
    };
  }, [isSelected, selctedColor]);

  const selectedTextStyle = useMemo(() => {
    return {
      ...(isSelected
        ? {
            color: 'white',
          }
        : {
            color: defaultTheme.colors.textPrimary,
          }),
    };
  }, [isSelected]);

  return (
    <Pressable
      onPress={onPress}
      style={{
        gap: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#66737E',
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        ...buttonStyle,
        ...selectedContainerStyle,
      }}>
      <TextBody
        style={StyleSheet.flatten([
          {fontSize: 14, paddingHorizontal: 2},
          titleStyle,
          selectedTextStyle,
        ])}>
        {rest.title}
      </TextBody>

      {icon}
    </Pressable>
  );
};

Chip.displayName = 'Chip';
