import React from 'react';
import {
  Text as NativeText,
  StyleSheet,
  Platform,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
} from 'react-native';

import {
  defaultTheme,
  RneFunctionComponent,
  normalizeText,
  ThemedProps,
} from '@utils/index';
import normalize from '@utils/normalizeText';

export interface TextProps extends TextProperties {
  /**  Add additional styling for Text. */
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

  /**  Styling when h1 is set. */
  h1Style?: StyleProp<TextStyle>;

  /**  Styling when h2 is set. */
  h2Style?: StyleProp<TextStyle>;

  /**  Styling when h3 is set. */
  h3Style?: StyleProp<TextStyle>;

  /**  Styling when h4 is set. */
  h4Style?: StyleProp<TextStyle>;

  h5Style?: StyleProp<TextStyle>;

  nativeTextProps?: any;
}

/** Text displays words and characters of various sizes.
 */
export const Text: RneFunctionComponent<TextProps> = React.forwardRef<
  NativeText,
  ThemedProps<TextProps>
>(
  (
    {
      style = {},
      h1 = false,
      h2 = false,
      h3 = false,
      h4 = false,
      h5 = false,
      h1Style = {},
      h2Style = {},
      h3Style = {},
      h4Style = {},
      h5Style = {},
      children = '',
      theme = defaultTheme,
      nativeTextProps = {},
      ...rest
    },
    ref,
  ) => {
    return (
      <NativeText
        ref={ref}
        accessibilityRole="text"
        style={StyleSheet.flatten([
          {
            color: theme?.colors?.textContent,
          },
          style,
          (h1 || h2 || h3 || h4 || h5) && (styles.bold as TextStyle),
          h1 && StyleSheet.flatten([{fontSize: normalize(40)}, h1Style]),
          h2 && StyleSheet.flatten([{fontSize: normalize(34)}, h2Style]),
          h3 &&
            StyleSheet.flatten([
              {fontSize: normalize(16)},
              {fontFamily: 'Inter-Medium'},
              h3Style,
            ]),
          h4 &&
            StyleSheet.flatten([
              {fontSize: normalize(14)},
              {fontFamily: 'Inter-Regular'},
              h4Style,
            ]),
          h5 &&
            StyleSheet.flatten([
              {fontSize: normalize(12)},
              {fontFamily: 'Inter-Regular'},
              h5Style,
            ]),
        ])}
        {...nativeTextProps}>
        {children}
      </NativeText>
    );
  },
);

const styles = StyleSheet.create({
  bold: {},
});

Text.displayName = 'TextView';
