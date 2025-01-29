import React from 'react';
import {
  Text,
  View,
  TextInput,
  Animated,
  Easing,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInputProps,
  ActivityIndicator,
} from 'react-native';
import {Theme, defaultTheme, renderNode} from '@utils/index';
import {TextBody} from '../Text';
import normalize from '@utils/normalizeText';

// import { fonts } from '../helpers';
// import { Icon, IconNode } from '../Icon';

const renderText = (content: any, defaultProps: any, style: StyleProp<any>) =>
  renderNode(TextBody, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export interface InputProps
  extends React.ComponentPropsWithRef<typeof TextInput> {
  /**
   * Shake method
   */
  shake?: () => void;
  /**
   * Style for container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * disables the input component
   */
  disabled?: boolean;
  /**
   * disabled styles that will be passed to the style props of the React Native TextInput
   */
  disabledInputStyle?: StyleProp<TextStyle>;
  /**
   * styling for Input Component Container
   */
  inputContainerStyle?: StyleProp<ViewStyle>;
  /**
   * displays an icon on the left
   */
  leftIcon?: any;
  /**
   * styling for left Icon Component container
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * displays an icon on the right
   */
  rightIcon?: any;
  /**
   * styling for right Icon Component container
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style for Input Component
   */
  inputStyle?: StyleProp<TextStyle>;
  /**
   * component that will be rendered in place of the React Native TextInput
   * @type React Component
   */
  InputComponent?: React.ComponentType | React.ForwardRefExoticComponent<any>;
  /**
   * props to be passed to the React Native Text component used to display the error message
   */
  errorProps?: object;
  /**
   * add styling to error message
   */
  errorStyle?: StyleProp<TextStyle>;
  /**
   * Error message to be displayed under the input field
   */
  errorMessage?: string;
  /**
   * component that will be rendered in place of the error message
   * @type React Component
   */
  ErrorComponent?: React.ComponentType | React.ForwardRefExoticComponent<any>;
  /**
   * add a label on top of the input
   */
  label?: string | React.ReactNode;
  /**
   * styling for the label; You can only use this if label is a string
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * props to be passed to the React Native Text component used to display the label or React Component used instead of simple string in label prop
   */
  labelProps?: object;
  /**
   * If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time.
   */
  renderErrorMessage?: boolean;

  leftInputLabel?: string | React.ReactNode;
  options?: any[];
  optionModalTitle?: string;
  loading?: boolean;
  displayFormat?: 'spinner' | 'clock' | 'calendar';
}

export class Input extends React.Component<InputProps & {theme?: Theme}> {
  static displayName = 'Input';
  input: any;
  shakeAnimationValue = new Animated.Value(0);
  state = {
    isFocused: false,
  };
  focus(): void {
    this.input.focus();
  }

  blur(): void {
    this.input.blur();
  }

  clear(): void {
    this.input.clear();
  }

  onfocus(e: any): void {
    this.setState({
      isFocused: true,
    });

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(e);
    }
  }

  onblur(e: any): void {
    this.setState({
      isFocused: false,
    });

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e);
    }
  }

  isFocused(): boolean {
    if (this.input) {
      return this.input.isFocused();
    }
    return false;
  }

  setNativeProps(nativeProps: Partial<TextInputProps>): void {
    this.input.setNativeProps(nativeProps);
  }

  shake = () => {
    const {shakeAnimationValue} = this;
    shakeAnimationValue.setValue(0);
    // Animation duration based on Material Design
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {
      containerStyle,
      placeholder,
      placeholderTextColor,
      disabled,
      disabledInputStyle,
      inputContainerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIcon,
      rightIconContainerStyle,
      InputComponent = TextInput,
      inputStyle,
      ErrorComponent = TextBody,
      errorProps,
      errorStyle,
      errorMessage,
      label,
      labelStyle = {},
      labelProps,
      theme = defaultTheme,
      renderErrorMessage = true,
      style,
      loading,
      leftInputLabel,

      ...attributes
    } = this.props;

    const {isFocused} = this.state;

    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });

    const hideErrorMessage = !renderErrorMessage && !errorMessage;

    const borderColor = isFocused
      ? theme.colors.input.borderActive
      : theme.colors.input.border;

    const textColor = disabled
      ? theme.colors.input.textDisable
      : theme.colors.input.textActive;

    return (
      <View
        testID="RNE__Input__view-wrapper"
        style={StyleSheet.flatten([
          styles.container,
          containerStyle,
          {
            gap: 4,
            //borderWidth: 1,
          },
        ])}>
        {renderText(
          label,
          {
            style: labelStyle,
            ...labelProps,
            color: 'secondary',
            size: 'md',
            fontFamily: 'Regular',
          },
          {},
        )}

        <Animated.View
          style={StyleSheet.flatten([
            {
              flexDirection: 'row',
              // borderBottomWidth: 1,
              borderWidth: 1,
              alignItems: 'center',
              borderColor: theme?.colors?.textContent,
              borderRadius: 8,
              paddingLeft: 8,
            },
            {
              borderColor: borderColor,
            },
            {
              borderColor:
                errorMessage && errorMessage != ''
                  ? theme.colors.input.borderError
                  : borderColor,
            },
            {
              borderColor: disabled ? theme.colors.input.border : borderColor,
            },
            inputContainerStyle,
            {transform: [{translateX}]},
          ])}>
          {leftInputLabel && (
            <View style={StyleSheet.flatten([styles.inputLabelContainer])}>
              <TextBody color={'secondary'} size={'lg'} fontFamily={'Semibold'}>
                {leftInputLabel}
              </TextBody>
            </View>
          )}

          {leftIcon && (
            <View
              style={StyleSheet.flatten([
                styles.iconContainer,
                leftIconContainerStyle,
              ])}>
              <Text>+91</Text>
            </View>
          )}

          <InputComponent
            testID="RNE__Input__text-input"
            underlineColorAndroid="transparent"
            editable={!disabled}
            ref={(ref: any) => {
              this.input = ref;
            }}
            onFocus={this.onfocus.bind(this)}
            selectionColor={theme?.colors?.input.textActive}
            style={StyleSheet.flatten([
              {
                color: textColor,
                fontSize: normalize(14),
                flex: 1,
                fontFamily: 'Inter-Regular',
                minHeight: 40,
              },
              inputStyle,
              disabled && styles.disabledInput,
              disabled && disabledInputStyle,
              style,
            ])}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder}
            // {...patchWebProps(attributes)}
            {...attributes}
            onBlur={this.onblur.bind(this)}
          />
          {loading && (
            <View
              style={StyleSheet.flatten([
                {
                  paddingRight: 8,
                  paddingLeft: 8,
                },
                //styles.iconContainer,
                //rightIconContainerStyle,
              ])}>
              <ActivityIndicator size={'small'} color={theme.colors.primary} />
            </View>
          )}
          {rightIcon && (
            <View
              style={StyleSheet.flatten([
                styles.iconContainer,
                rightIconContainerStyle,
              ])}>
              {rightIcon}
            </View>
          )}
        </Animated.View>

        {errorMessage ? (
          <ErrorComponent
            color={'error'}
            size={'sm'}
            fontFamily={'Regular'}
            {...errorProps}
            style={StyleSheet.flatten([
              {
                paddingBottom: 8,
              },
              errorStyle && errorStyle,
              hideErrorMessage && {
                height: 0,
                margin: 0,
                padding: 0,
              },
            ])}>
            {errorMessage}
          </ErrorComponent>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //paddingHorizontal: 8,
  },
  disabledInput: {
    opacity: 0.5,
  },
  iconContainer: {
    // minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 8,
    //marginVertical: 8,
  },
  inputLabelContainer: {
    // minHeight: 40,
    //  justifyContent: 'center',
    //alignItems: 'center',
    paddingRight: 4,
    paddingLeft: 4,
    // marginVertical: 8,
  },
});
