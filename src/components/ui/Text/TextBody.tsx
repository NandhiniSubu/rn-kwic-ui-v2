import React, {useMemo} from 'react';
import {
  Text as NativeText,
  StyleSheet,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
} from 'react-native';
import {
  RneFunctionComponent,
  StringOmit,
  ThemedProps,
  defaultTheme,
} from '@utils/index';
import {Colors} from '@utils/colors';
import normalize from '@utils/normalizeText';

export interface TextBodyProps extends TextProperties {
  style?: StyleProp<TextStyle>;

  textColor?: Colors;

  color?: StringOmit<
    'primary' | 'secondary' | 'white' | 'success' | 'error' | 'warning'
  >;

  fontFamily?: StringOmit<'Medium' | 'Regular' | 'Semibold' | 'Bold'>;
  nativeTextProps?: any;
  size?: StringOmit<'xl' | 'lg' | 'md' | 'sm' | 'xs'>;
}

export const TextBody: RneFunctionComponent<TextBodyProps> = React.forwardRef<
  NativeText,
  ThemedProps<TextBodyProps>
>(
  (
    {
      style = {},
      children = '',
      color = 'primary',
      fontFamily = 'Regular',
      textColor = defaultTheme.colors.textPrimary,
      theme = defaultTheme,
      size = 'md',
      nativeTextProps = {},

      ...rest
    },
    ref,
  ) => {
    const textStyle: StyleProp<TextStyle> = useMemo(
      () =>
        StyleSheet.flatten([
          color == 'primary' && {
            color: theme.colors.textPrimary,
          },
          color == 'secondary' && {
            color: theme.colors.textSecondary,
          },
          color == 'success' && {
            color: theme.colors.success,
          },
          color == 'error' && {
            color: theme.colors.error,
          },
          color == 'warning' && {
            color: theme.colors.warning,
          },
          color == 'white' && {
            color: theme.colors.white,
          },
          fontFamily == 'Regular' && {
            fontFamily: 'Inter-Regular',
          },
          fontFamily == 'Medium' && {
            fontFamily: 'Inter-Medium',
          },
          fontFamily == 'Semibold' && {
            fontFamily: 'Inter-SemiBold',
          },
          fontFamily == 'Bold' && {
            fontFamily: 'Inter-Bold',
          },
          size == 'xl' && {
            fontSize: normalize(16),
            lineHeight: 20,
            letterSpacing: 0,
          },
          size == 'lg' && {
            fontSize: normalize(14),
            lineHeight: 20,
            letterSpacing: 0,
          },
          size == 'md' && {
            fontSize: normalize(13),
            lineHeight: 20,
            letterSpacing: 0,
          },
          size == 'sm' && {
            fontSize: normalize(12),
            lineHeight: 16,
            letterSpacing: 0,
          },
          size == 'xs' && {
            fontSize: normalize(11),
            lineHeight: 14,
            letterSpacing: 0,
          },
        ]),
      [color, fontFamily, size],
    );

    return (
      <NativeText
        ref={ref}
        accessibilityRole="text"
        style={StyleSheet.flatten([
          {
            ...textStyle,
          },
          style,
        ])}
        {...nativeTextProps}>
        {children}
      </NativeText>
    );
  },
);
