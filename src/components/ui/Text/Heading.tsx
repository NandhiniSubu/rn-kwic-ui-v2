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

export interface HeadingProps extends TextProperties {
  style?: StyleProp<TextStyle>;
  /**  Text with Font size 40. */
  h1?: boolean;

  /**  Text with Font size 34. */
  h2?: boolean;

  /**  Text with Font size 28. */
  h3?: boolean;

  /**  Text with Font size 22. */
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;

  textColor?: Colors;

  color?: StringOmit<
    'primary' | 'secondary' | 'white' | 'success' | 'error' | 'warning'
  >;

  /**  Styling when h1 is set. */
  h1Style?: StyleProp<TextStyle>;

  /**  Styling when h2 is set. */
  h2Style?: StyleProp<TextStyle>;

  /**  Styling when h3 is set. */
  h3Style?: StyleProp<TextStyle>;

  /**  Styling when h4 is set. */
  h4Style?: StyleProp<TextStyle>;
  h5Style?: StyleProp<TextStyle>;
  h6Style?: StyleProp<TextStyle>;

  nativeTextProps?: any;
}

export const Heading: RneFunctionComponent<HeadingProps> = React.forwardRef<
  NativeText,
  ThemedProps<HeadingProps>
>(
  (
    {
      style = {},
      h1 = false,
      h2 = false,
      h3 = false,
      h4 = false,
      h5 = false,
      h6 = false,
      h1Style = {},
      h2Style = {},
      h3Style = {},
      h4Style = {},
      h5Style = {},
      h6Style = {},
      children = '',
      color = 'primary',
      textColor = defaultTheme.colors.textPrimary,
      theme = defaultTheme,
      nativeTextProps = {},
      ...rest
    },
    ref,
  ) => {
    const textColorStyle: StyleProp<TextStyle> = useMemo(
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
        ]),
      [color],
    );

    return (
      <NativeText
        ref={ref}
        accessibilityRole="text"
        style={StyleSheet.flatten([
          {
            ...textColorStyle,
          },
          h1 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(36),
                fontFamily: 'Inter-Bold',
                lineHeight: 48,
                letterSpacing: -0.54,
              },
              h1Style,
            ]),
          h2 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(30),
                fontFamily: 'Inter-Bold',
                lineHeight: 40,
                letterSpacing: -0.3,
              },
              h2Style,
            ]),
          h3 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(24),
                fontFamily: 'Inter-Bold',
                lineHeight: 32,
                letterSpacing: -0.2,
              },
              h3Style,
            ]),
          h4 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(20),
                fontFamily: 'Inter-SemiBold',
                lineHeight: 24,
                letterSpacing: -0.2,
              },
              h4Style,
            ]),
          h5 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(14),
                fontFamily: 'Inter-SemiBold',
                lineHeight: 20,
                letterSpacing: 0,
              },
              h5Style,
            ]),
          h6 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(13),
                fontFamily: 'Inter-SemiBold',
                lineHeight: 20,
                letterSpacing: 0,
              },
              h6Style,
            ]),
        ])}
        {...nativeTextProps}>
        {children}
      </NativeText>
    );
  },
);
