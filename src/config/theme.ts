import {Colors} from '@utils/colors';
import {ComponentTheme} from './theme.component';
import {ThemeSpacing, defaultSpacing} from '@utils/index';
export type RecursivePartial<T> = {[P in keyof T]?: RecursivePartial<T[P]>};

export type ThemeMode = 'light' | 'dark';

export {defaultSpacing};

export type {ThemeSpacing};

export interface Theme {
  mode: ThemeMode;
  spacing: ThemeSpacing;
}

export interface FullTheme extends ComponentTheme, Theme {
  colors: Colors;
}
