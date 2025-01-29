import {Platform, Dimensions, PressableProps, ColorValue} from 'react-native';
import {Colors, lightColors, darkColors} from './colors';
import React, {PropsWithChildren} from 'react';
import color from 'color';
import normalizeText from './normalizeText';
import renderNode from './renderNode';
import {InlinePressableProps} from './InlinePressableProps';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';
const getBehaviorType = Platform.OS === 'ios' ? 'padding' : 'height';

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export type StringOmit<K extends string> = K | Omit<string, K>;

export type ThemedProps<T> = T & {
  theme?: Theme;
};

export type ThemedPropsWithChildren<T> = PropsWithChildren<ThemedProps<T>>;

export type RneFunctionComponent<T> = React.FunctionComponent<
  ThemedPropsWithChildren<T>
>;

export type {InlinePressableProps};

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const defaultSpacing = {xs: 4, sm: 8, md: 16, lg: 32, xl: 24};

export const defaultTheme: Theme = {
  colors: lightColors,
  spacing: defaultSpacing,
};

export type Theme = {
  colors: Colors;
  spacing: ThemeSpacing;
};

export type IconBaseProps = {
  color?: string;
  size?: any;
};

export const androidRipple = (
  rippleColor?: string | ColorValue,
): PressableProps['android_ripple'] => {
  return {
    borderless: false,
    color: rippleColor,
    radius: -5,
  };
};

export {
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  lightColors,
  darkColors,
  getBehaviorType,
  renderNode,
  color,
};
